import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildItem } from "../../../itemBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.WARLOCK,
	Race: RaceIDs.DRAENEI,
	EquipIdList: [buildItem({
		Tag: 'dr-wlk-gear-chest-starter',
		CopyFrom: 57, DisplayId: 40441,
		DisplayIcon: "INV_Chest_Cloth_24",
		DisplayGeosetGroup: [
			{i: 0, value: 2},
			{i: 2, value: 1}
		],
		DisplayTextures: [
			{i: 5, value: "Robe_A_07Orange_Robe_LU"},
			{i: 6, value: "Robe_A_07Orange_Robe_LL"}
		]
	}).ID, 6097, 1396, 3661],
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.WARLOCK,
	ClassText: "Don't let the self-righteous lot get under your skin.  We're are not the Man'ari Eredar.$B$BWe study the fel because knowing our ancient enemy is more important than the social comforts of the weaker willed.",
	NotClassText: "I have every right to be here, just as much as you do.  Go bother a $c trainer.",
}});

buildNpc({
	Tag: 'dr-wlk-trainer-start',
	CopyFrom: 460,
	Level: 6,

	Name: "Al'kethru",
	Subname: 'Warlock Trainer',
	Spawn: {map:530,x:-4109.189453,y:-13730.479492,z:74.680405,o:4.141368},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.WarlockLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "drWlkStart",
	BakedNpcSound: NpcSoundIDs.DraeneiMaleStandard,
	EquipMainHand: 2226,
});

buildNpc({
	Tag: 'dr-wlk-trainer-mid',
	CopyFrom: 5612,
	Level: 14,

	Name: 'Saverza',
	Subname: 'Warlock Trainer',
	Spawn: {map:530,x:-4152.276367,y:-12541.141602,z:46.056129,o:5.957939},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Warlock,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 8137,
	GuardGossipOption: 'Warlock',
	GuardGossipPoiName: 'Saverza',
	GuardGossipText: "Oh.  You are quite bold to ask about that so brazenly...$B$BIf you're really sure, you could try approaching Saverza.  She often stands around the outskirts of Azure Watch.  Just don't cause a panic.",

	BakedNpc: "drWlkMid",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleMilitary,
	EquipMainHand: 19567,
});

buildNpc({
	Tag: 'dr-wlk-trainer-main',
	CopyFrom: 5173,

	Name: 'Nolerzi',
	Subname: 'Warlock Trainer',
	Spawn: {map:530,x:-4069.289551,y:-11576.552734,z:-138.772629,o:0.443742},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Warlock,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 7787,
	GuardGossipOption: 'Warlock',
	GuardGossipPoiName: 'Exodar, Warlock Trainers',
	GuardGossipText: "You're looking for a warlock...?  You do realise what they are, yes?$B$BIf you would invite that upon yourself, you're probably not going to listen to anything I say anyway.$B$BGo look for Nolerzi in the Vault of Lights, where they've been allowed to loiter near the mages with the task of 'understanding our enemy' or some such nonsense.",

	BakedNpc: "drWlk3",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleNoble,
});

buildNpc({
	Tag: 'dr-wlk-trainer-0',
	CopyFrom: 5172,

	Name: "Berrardas",
	Subname: 'Warlock Trainer',
	Spawn: {map:530,x:-4068.203613,y:-11572.234375,z:-138.743973,o:5.551445},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Warlock,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "drWlk2",
	BakedNpcSound: NpcSoundIDs.DraeneiMaleMilitary,
});

buildNpc({
	Tag: 'dr-wlk-trainer-1',
	CopyFrom: 5171,

	Name: 'Enlendreh',
	Subname: 'Warlock Trainer',
	Spawn: {map:530,x:-4064.454102,y:-11574.229492,z:-138.708023,o:3.794775},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Warlock,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "drWlk1",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleStandard,
});
