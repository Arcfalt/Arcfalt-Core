import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { CreatureType } from "wow/wotlk/std/Creature/CreatureType";
import { UnitClass } from "wow/wotlk/std/Creature/UnitClass";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs, AddonBytes1IDs } from "../../../commonIds";
import { appendNpc, buildNpc } from "../../../npcBuilder";
import { appendQuest } from "../../../questBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_SHA_START_SHIRT, A_SHA_START_LEGS } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.SHAMAN,
	Race: RaceIDs.DWARF,
	EquipIdList: [36, 2362, A_SHA_START_SHIRT.ID, A_SHA_START_LEGS.ID],
})

buildNpc({
	Tag: 'dw-sha-trainer-northshire',
	CopyFrom: 17089,

	Name: 'Demme Dualcrag',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:-6056.049805,y:382.597992,z:392.760010,o:2.967060},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.ShamanLow,
	TrainerGossipClass: "Welcome, fellow friend of the stone.  Spirits of land and earth keep ye safe.",
	TrainerGossipNotClass: "Ye may not be attuned to the spirits of the land, $c, but stone keep ye safe.",

	BakedNpc: "dwShaTrainer0",
	BakedNpcSound: NpcSoundIDs.DwarfFemaleGuard,
	AddonBytes1: AddonBytes1IDs.SitMediumChair,
});

buildNpc({
	Tag: 'dw-sha-trainer-goldshire',
	CopyFrom: 17212,

	Name: 'Sagremonn Icepatch',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:-5582.678711,y:-542.079468,z:403.614899,o:1.946483},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Welcome, fellow friend of the stone.  Spirits of land and earth keep ye safe.",
	TrainerGossipNotClass: "Ye may not be attuned to the spirits of the land, $c, but stone keep ye safe.",

	GuardGossipOrigin: 3545,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Sagremonn Icepatch',
	GuardGossipText: "Ye can probably find Sagremonn Icepatch throwin' down a pint or three in the Thunderbrew Distillery.  Ye could join him and see if he'll teach ye how ta talk to the land.",

	BakedNpc: "dwShaTrainer1",
	BakedNpcSound: NpcSoundIDs.DwarfMaleStandard,
	EquipMainHand: 4090,
	EquipOffHand: 18425,
});

appendNpc(23127, {
	Tag: 'dw-sha-trainer-replacer',
	Name: "Eglen Freezerock",
	Subname: "Shaman Trainer",
	Faction: FactionTemplateValues.IRONFORGE,
	BakedNpc: "dwShaIronforge1",
	BakedNpcSound: NpcSoundIDs.DwarfFemaleYoung,
	EquipMainHand: 15236,
	EquipOffHand: 15236,
	Level: 60,
	AppendExistingSpawn: true,

	GuardGossipOrigin: 2144,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Ironforge Shaman Trainer',
	GuardGossipText: "Ye'll want to look fer Eglen Freezerock in the area of The Great Forge, just a bit to the North on the East side.  The lass is a prodigy at communin' with the spirits, or so I'm told.  No doubt ye'll find what ye seek with her.",
})

appendNpc(35073, {
	Tag: 'dw-sha-other-replacer',
	Name: "Tuinagg Fullflight",
	Subname: "Elder Stormseer",
	Faction: FactionTemplateValues.IRONFORGE,
	BakedNpc: "dwShaIronforge2",
	BakedNpcSound: NpcSoundIDs.DwarfMaleGrim,
	EquipMainHand: 7954,
	EquipOffHand: 3763,
	Level: 50,
	AppendExistingSpawn: true,
})

appendQuest(14111, {
	ReplaceText: {from: /Farseer Eannu/gi, to: "Tuinagg Fullflight"},
})

buildNpc({
	Tag: 'dw-sha-trainer-ifside',

	Name: 'Uldorn Marblebraid',
	Subname: 'Shaman Trainer',
	Level: 40,
	Type: CreatureType.HUMANOID,
	Spawn: {map:0,x:-4726.208984,y:-1152.681030,z:502.448090,o:0.194646},
	Faction: FactionTemplateValues.IRONFORGE,
	Civilian: true,
	Class: UnitClass.PALADIN,
	AnimateSwim: true,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Welcome, fellow friend of the stone.  Spirits of land and earth keep ye safe.",
	TrainerGossipNotClass: "Ye may not be attuned to the spirits of the land, $c, but stone keep ye safe.",

	BakedNpc: "dwShaIronforge3",
	BakedNpcSound: NpcSoundIDs.DwarfMaleStandard,
	EquipMainHand: 2030,
});
