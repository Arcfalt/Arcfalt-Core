import fs from 'fs';
import path from "path";
import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { Genders } from "wow/wotlk/std/Conditions/Settings/Gender";
import { CreatureInstance } from 'wow/wotlk/std/Creature/CreatureInstance';
import { CreatureInstancePosition, CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";
import { CreatureType } from 'wow/wotlk/std/Creature/CreatureType';
import { UnitClass } from 'wow/wotlk/std/Creature/UnitClass';
import { RangedType, CreatureOutfit } from "wow/wotlk/std/CreatureOutfits/CreatureOutfits";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { MODNAME } from "./datascripts";
import { buildGossip, GossipBuilder, GossipInjector, injectGossip } from './gossipBuilder';

export declare type NpcBuilder = {
	Tag?: string,
	CopyFrom?: number,

    Name?: string,
	Subname?: string,
	Type?: CreatureType,

	Spawn?: CreatureInstancePosition | CreatureInstancePosition[],
	Faction?: number,
	Model?: number,
	Level?: number,
	MinLevel?: number,
	MaxLevel?: number,
	UTag?: string,

	Gossip?: number | GossipBuilder,

	GuardGossipOrigin?: number,
	GuardGossipOption?: string,
	GuardGossipText?: string,
	GuardGossipPoiName?: string,

	InjectGossip?: GossipInjector[],

	TrainerID?: number,
	TrainerClassMask?: number,
	TrainerGossipClass?: string,
	TrainerGossipNotClass?: string,
	TrainerCustomTrainText?: string,

	DressNpc?: DressNpcBuilder,
	BuildNpc?: CreatureDisplayBuilder,
	BakedNpc?: string,
	BakedNpcSound?: number,

	EquipMainHand?: number,
	EquipOffHand?: number,
	EquipRanged?: number,
	AppendExistingSpawn?: boolean,
	ClearExistingSpawns?: boolean,

	AddonBytes1?: number,
	AddonBytes2?: number,
	Emote?: number,
	Mount?: number,
	Civilian?: boolean,
	Boss?: boolean,
	Speed?: number,
	WalkSpeed?: number,
	RunSpeed?: number,
	AnimateSwim?: boolean,
	BasicHuman?: boolean,

	Class?: UnitClass,

	SimpleGossip?: string,
}

export function buildNpc(c: NpcBuilder): CreatureTemplate
{
	if (!c.Tag) throw new Error("Attempted to build NPC without a tag!");
	let npc = std.CreatureTemplates.create(MODNAME, c.Tag, c.CopyFrom);
	return appendNpc(npc, c);
}

export function appendNpc(target: number | CreatureTemplate, c: NpcBuilder): CreatureTemplate
{
	let npc : CreatureTemplate;
	if (typeof target === "number") {
		npc = std.CreatureTemplates.load(target);
	}
	else {
		npc = target;
	}

	if (c.UTag !== undefined) npc.Tags.addUnique(MODNAME, c.UTag);
	if (c.Name !== undefined) npc.Name.enGB.set(c.Name);
	if (c.Subname !== undefined) npc.Subname.enGB.set(c.Subname);
	if (c.Type !== undefined) npc.Type.set(c.Type);

	let eqMain = c.EquipMainHand;
	let eqOff = c.EquipOffHand;
	let eqRange = c.EquipRanged;

	if (c.Faction !== undefined) npc.FactionTemplate.set(c.Faction);
	if (c.Model !== undefined) npc.Models.clearAll().Models.addIds(c.Model);
	else if (c.BakedNpc !== undefined) {
		let af = getArcCreatureFromFile(c.BakedNpc);
		if (eqMain === undefined && af.weaponMainHandId) eqMain = af.weaponMainHandId;
		if (eqOff === undefined && af.weaponOffHandId) eqOff = af.weaponOffHandId;
		if (eqRange === undefined && af.weaponRangedId) eqRange = af.weaponRangedId;
		npc.Models.clearAll().Models.addIds(buildCreatureDisplayFromArc(af, c.BakedNpcSound));
	}
	else if (c.DressNpc !== undefined) npc.Models.clearAll().Models.addIds(buildDressNpc(c.DressNpc).ID);
	else if (c.BuildNpc !== undefined) npc.Models.clearAll().Models.addIds(buildCreatureDisplay(c.BuildNpc));
	if (c.Level !== undefined) npc.Level.set(c.Level, c.Level);
	else if (c.MinLevel !== undefined && c.MaxLevel !== undefined) npc.Level.set(c.MinLevel, c.MaxLevel);
	if (c.Civilian !== undefined) {
		npc.FlagsExtra.CIVILIAN.set(c.Civilian);
		npc.FlagsExtra.NO_XP.set(c.Civilian);
		npc.UnitFlags.IMMUNE_TO_PC.set(c.Civilian);
		npc.UnitFlags.IMMUNE_TO_NPC.set(c.Civilian);
	}
	if (c.BasicHuman) {
		npc.Type.set(CreatureType.HUMANOID);
		npc.UnitFlags.CAN_SWIM.set(true);
	}
	if (c.Boss !== undefined) npc.TypeFlags.BOSS.set(c.Boss);
	if (c.Speed !== undefined) npc.MovementSpeed.set(c.Speed, c.Speed);
	else if (c.WalkSpeed !== undefined && c.RunSpeed !== undefined) npc.MovementSpeed.set(c.WalkSpeed, c.RunSpeed);
	if (c.AnimateSwim !== undefined) npc.UnitFlags.CAN_SWIM.set(c.AnimateSwim);
	if (c.Class !== undefined) {
		npc.UnitClass.set(c.Class);
		if (c.Class === UnitClass.PALADIN || c.Class === UnitClass.MAGE) npc.UnitFlags.REGENERATE_POWER.set(true);
		else npc.UnitFlags.REGENERATE_POWER.set(false);
	}

	let setEquip: boolean = false;
	if (eqMain !== undefined || eqOff !== undefined || eqRange !== undefined) {
		if (c.AppendExistingSpawn && npc.Weapons.length > 0) {
			let weps = npc.Weapons.getIndex(0);
			if (eqMain) weps.RightHand.set(eqMain);
			if (eqOff) weps.LeftHand.set(eqOff);
			if (eqRange) weps.Ranged.set(eqRange);
		}
		else npc.Weapons.add(eqMain, eqOff, eqRange);
		setEquip = true;
	}

	let poi: number | undefined = undefined;
	if (c.GuardGossipPoiName !== undefined) {
		poi = std.IDs.points_of_interest.dynamicId();
	}
	if (c.ClearExistingSpawns) {
		npc.Spawns.forEach(value => {
			value.delete();
		})
	}
	if (c.Spawn !== undefined || c.AppendExistingSpawn !== undefined) {
		let spawns: CreatureInstance[] | undefined = undefined;
		if (c.Spawn !== undefined) spawns = npc.Spawns.addGet(MODNAME, c.Tag + '-spawn', c.Spawn);
		else if (c.AppendExistingSpawn && npc.Spawns.length > 0) spawns = npc.Spawns.get();
		if (spawns !== undefined) {
			for (let i = 0; i < spawns.length; i++) {
				let spawn = spawns[i];
				if (i == 0 && poi !== undefined) std.SQL.points_of_interest.add(poi, { PositionX: spawn.Position.X.get(), PositionY: spawn.Position.Y.get(), Icon: 7, Flags: 99, Importance: 0, Name: c.GuardGossipPoiName });
				if (setEquip) {
					spawn.EquipmentID.set(1);
					if (eqMain === undefined && eqOff === undefined && eqRange !== undefined && c.AddonBytes2 === undefined) spawn.AddonBytes2.set(2);
				}
				if (c.AddonBytes1 !== undefined) spawn.AddonBytes1.set(c.AddonBytes1);
				if (c.AddonBytes2 !== undefined) spawn.AddonBytes2.set(c.AddonBytes2);
				if (c.Emote !== undefined) spawn.Emote.set(c.Emote);
				if (c.Mount !== undefined) spawn.Mount.set(c.Mount);
			}
		}
	}

	let injectGossips = c.InjectGossip;
	if (c.GuardGossipOrigin !== undefined && c.GuardGossipText !== undefined && c.GuardGossipOption !== undefined)
	{
		if (injectGossips === undefined) injectGossips = [];
		injectGossips.push({
			Target: c.GuardGossipOrigin,
			Option: c.GuardGossipOption,
			Gossip: c.GuardGossipText
		});
	}
	if (injectGossips !== undefined) {
		injectGossips.forEach(value => {
			injectGossip(value, poi);
		});
	}

	if (c.TrainerID !== undefined) {
		npc.NPCFlags.TRAINER.set(true);
		npc.NPCFlags.CLASS_TRAINER.set(true);
		npc.Trainer.set(c.TrainerID);
	}

	let useGossip = c.Gossip;
	if (c.TrainerClassMask !== undefined && c.TrainerGossipClass !== undefined && c.TrainerGossipNotClass !== undefined) {
		useGossip = buildGossip({
			AddClassTrainer: {ClassMask: c.TrainerClassMask, ClassText: c.TrainerGossipClass, NotClassText: c.TrainerGossipNotClass},
		});
	}
	else if (c.SimpleGossip !== undefined) {
		useGossip = buildGossip({SimpleText: c.SimpleGossip});
	}
	if (useGossip !== undefined) {
		npc.NPCFlags.GOSSIP.set(true);
		if (typeof useGossip === "number") npc.Gossip.set(useGossip);
		else if (poi !== undefined) npc.Gossip.set(buildGossip(useGossip, [poi]));
		else npc.Gossip.set(buildGossip(useGossip));
	}

	return npc;
}

export function removeNpcSpawns(target: number | CreatureTemplate) {
	let npc : CreatureTemplate;
	if (typeof target === "number") {
		npc = std.CreatureTemplates.load(target);
	}
	else {
		npc = target;
	}
	npc.Spawns.get().forEach((value, _index, _array) => {
		if (value.AddonRow.exists()) value.AddonRow.get().delete();
		value.delete();
	});
}

export declare type DressNpcBuilder = {
	Parent?: number,
	NPCSounds?: number,
	Race?: RaceIDs,
	Class?: ClassIDs,
	Gender?: Genders,
	Skin?: number,
	Face?: number,
	Hair?: number,
	HairColor?: number,
	FacialHair?: number,
	Head?: number,
	Shirt?: number,
	Shoulders?: number,
	Chest?: number,
	Waist?: number,
	Legs?: number,
	Feet?: number,
	Wrists?: number,
	Hands?: number,
	Back?: number,
	Tabard?: number,
	Guild?: number,
	Mainhand?: number,
	Offhand?: number,
	Ranged?: number,
	WmvString?: string,
	WmvRanged?: RangedType,
	WmvEmptyOverride?: boolean,
};

export function buildDressNpc(c: DressNpcBuilder) : CreatureOutfit {
	let o : CreatureOutfit;
	if (c.Parent) o = std.CreatureOutfits.create(c.Parent);
	else o = std.CreatureOutfits.create();
	if (c.WmvString) o.fromString(c.WmvString, c.WmvRanged, c.WmvEmptyOverride);
	if (c.Race) o.Race.set(c.Race);
	if (c.Class) o.Class.set(c.Class);
	if (c.Gender) o.Gender.set(c.Gender);
	if (c.Skin) o.Skin.set(c.Skin);
	if (c.Face) o.Face.set(c.Face);
	if (c.Hair) o.Hair.set(c.Hair);
	if (c.HairColor) o.HairColor.set(c.HairColor);
	if (c.FacialHair) o.FacialHair.set(c.FacialHair);
	if (c.Head) o.Head.set(c.Head);
	if (c.Shirt) o.Shirt.set(c.Shirt);
	if (c.Shoulders) o.Shoulders.set(c.Shoulders);
	if (c.Chest) o.Chest.set(c.Chest);
	if (c.Waist) o.Waist.set(c.Waist);
	if (c.Legs) o.Legs.set(c.Legs);
	if (c.Feet) o.Feet.set(c.Feet);
	if (c.Wrists) o.Wrists.set(c.Wrists);
	if (c.Hands) o.Hands.set(c.Hands);
	if (c.Back) o.Back.set(c.Back);
	if (c.Tabard) o.Tabard.set(c.Tabard);
	if (c.Guild) o.Guild.set(c.Guild);
	if (c.Mainhand) o.Mainhand.set(c.Mainhand);
	if (c.Offhand) o.Offhand.set(c.Offhand);
	if (c.Ranged) o.Ranged.set(c.Ranged);
	if (c.NPCSounds) o.NPCSounds.set(c.NPCSounds);
	return o;
}

function getModelIdFromRaceId(raceId: number, genderId: number) : number {
	let raceRow = std.DBC.ChrRaces.findById(raceId);
	let did : number;
	if (genderId == 0) did = raceRow.MaleDisplayId.get();
	else did = raceRow.FemaleDisplayId.get();
	return std.DBC.CreatureDisplayInfo.findById(did).ModelID.get();
}

export declare type CreatureDisplayBuilder = {
	raceId?: number,
	genderId?: number,
	skinId?: number,
	faceId?: number,
	hairStyleId?: number,
	hairColorId?: number,
	facialHairId?: number,
	itemDisplay?: number[],
	flags?: number,
	bakeName?: string,
	modelOverride?: number,
	soundOverride?: number,
	scaleOverride?: number,
	opacityOverride?: number,
	texture1Override?: string,
	texture2Override?: string,
	texture3Override?: string,
	portraitOverride?: string,
	bloodColorOverride?: number, // 1 red 2 green 3 black 4 other
	npcSoundOverride?: number,
	preventExtraInfo?: boolean,
	boundingRadiusOverride?: number,
	combatReachOverride?: number,
	displayIdOtherGenderOverride?: number,
};

export declare type ArcCreatureFormat = {
	raceId?: number,
	genderId?: number,
	skinId?: number,
	faceId?: number,
	hairStyleId?: number,
	hairColorId?: number,
	facialHairId?: number,
	itemDisplay?: number[],
	bakeName?: string,
	bakeResolution?: number,
	soundId?: number,
	weaponMainHandId?: number,
	weaponOffHandId?: number,
	weaponRangedId?: number,
}

export function getArcCreatureFromFile(fileName: string) : ArcCreatureFormat {
	let p = path.join(__dirname, '..', '..', 'charDatas', (fileName + '.json'));
	let dat = fs.readFileSync(p, 'utf-8');
	let o : ArcCreatureFormat = JSON.parse(dat);
	return o;
}

export function buildCreatureDisplay(o: CreatureDisplayBuilder) : number {
	let d = std.DBC.CreatureDisplayInfo.add(std.IDs.CreatureDisplayInfo.id());
	let ds = std.SQL.creature_model_info.add(d.ID.get());
	if (o.modelOverride != undefined) d.ModelID.set(o.modelOverride);
	else if (o.raceId != undefined && o.genderId != undefined) d.ModelID.set(getModelIdFromRaceId(o.raceId, o.genderId));
	if (o.scaleOverride != undefined) d.CreatureModelScale.set(o.scaleOverride);
	if (o.opacityOverride != undefined) d.CreatureModelAlpha.set(o.opacityOverride);
	if (o.texture1Override != undefined) d.TextureVariation.setIndex(0, o.texture1Override);
	if (o.texture2Override != undefined) d.TextureVariation.setIndex(1, o.texture2Override);
	if (o.texture3Override != undefined) d.TextureVariation.setIndex(2, o.texture3Override);
	if (o.portraitOverride != undefined) d.PortraitTextureName.set(o.portraitOverride);
	if (o.bloodColorOverride != undefined) d.BloodID.set(o.bloodColorOverride);
	if (o.npcSoundOverride != undefined) d.NPCSoundID.set(o.npcSoundOverride);
	if (o.preventExtraInfo != undefined && o.preventExtraInfo) return d.ID.get();
	if (o.boundingRadiusOverride != undefined) ds.BoundingRadius.set(o.boundingRadiusOverride);
	else ds.BoundingRadius.set(0.306);
	if (o.combatReachOverride != undefined) ds.CombatReach.set(o.combatReachOverride);
	else ds.CombatReach.set(1.5);
	if (o.displayIdOtherGenderOverride != undefined) ds.DisplayID_Other_Gender.set(o.displayIdOtherGenderOverride);
	let de = std.DBC.CreatureDisplayInfoExtra.add(std.IDs.CreatureDisplayInfoExtra.id());
	d.ExtendedDisplayInfoID.set(de.ID.get());
	if (o.raceId != undefined) de.DisplayRaceID.set(o.raceId);
	if (o.genderId != undefined) de.DisplaySexID.set(o.genderId);
	if (o.skinId != undefined) de.SkinID.set(o.skinId);
	if (o.faceId != undefined) de.FaceID.set(o.faceId);
	if (o.hairStyleId != undefined) de.HairStyleID.set(o.hairStyleId);
	if (o.hairColorId != undefined) de.HairColorID.set(o.hairColorId);
	if (o.facialHairId != undefined) de.FacialHairID.set(o.facialHairId);
	if (o.flags != undefined) de.Flags.set(o.flags);
	if (o.bakeName != undefined) de.BakeName.set(o.bakeName + ".blp");
	if (o.itemDisplay != undefined) {
		de.NPCItemDisplay.set(o.itemDisplay);
	}
	return d.ID.get();
}

export function buildCreatureDisplayFromArc(o: ArcCreatureFormat, npcSound?: number) : number {
	let builder : CreatureDisplayBuilder = o;
	if (npcSound !== undefined) builder.npcSoundOverride = npcSound;
	else if (o.soundId !== undefined) builder.npcSoundOverride = o.soundId;
	return buildCreatureDisplay(builder);
}

export function exportNewCharFromCreature(target: number, fileName: string, index?: number) {
	let c = std.CreatureTemplates.load(target);
	let i = 0;
	if (index !== undefined) i = index;
	let did = c.Models.get(i).get();
	let d = std.CreatureDisplayInfo.load(did);
	let edid = d.ExtendedDisplay.get();
	let e = std.DBC.CreatureDisplayInfoExtra.query({ID: edid});
	let a : ArcCreatureFormat = {
		raceId: e.DisplayRaceID.get(),
		genderId: e.DisplaySexID.get(),
		skinId: e.SkinID.get(),
		faceId: e.FaceID.get(),
		hairStyleId: e.HairStyleID.get(),
		hairColorId: e.HairColorID.get(),
		facialHairId: e.FacialHairID.get(),
		itemDisplay: e.NPCItemDisplay.get(),
		bakeName: fileName,
		bakeResolution: 0,
		soundId: d.NPCSound.get(),
	};
	if (c.Weapons.length > 0) {
		let w = c.Weapons.getIndex(0);
		a.weaponMainHandId = w.RightHand.get();
		a.weaponOffHandId = w.LeftHand.get();
		a.weaponRangedId = w.Ranged.get();
	}
	let s = JSON.stringify(a);
	let p = path.join(__dirname, '..', '..', 'charDatas', (fileName + '.json'));
	fs.writeFileSync(p, s, 'utf-8');
}
