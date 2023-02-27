import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { ABOM_GOSSIP_CLASS_TRAINERS } from "../../../classicFixes/undercityAbomGossipFix";
import { TrainerID, NpcSoundIDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildItem } from "../../../itemBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.UNDEAD,
	EquipIdList: [35, buildItem({
		Tag: 'ud-dru-gear-chest-starter',
		CopyFrom: 6123,
		DisplayId: 9669,
		Name: "Novice's Jacket",
	}).ID,
	buildItem({
		Tag: 'ud-dru-gear-legs-starter',
		CopyFrom: 6124,
		DisplayId: 7533,
	}).ID,
	buildItem({
		Tag: 'ud-dru-gear-feet-starter',
		CopyFrom: 55,
		DisplayId: 25871,
		Name: "Novice's Boots",
	}).ID]
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.DRUID,
	ClassText: "There are so few of the harvest left amongst us.  Though it is understandable, given our situation...  It is good to see another tender of nature here, even in the midst of such decay.",
	NotClassText: "Even here amongst the ruin and decay, $c, may nature be ever by your side.",
}});

buildNpc({
	Tag: 'ud-dru-trainer-start',
	CopyFrom: 3060,

	Name: 'Nyla Redcap',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:1855.015259,y:1572.514038,z:99.075493,o:6.268429},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.DruidLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "udDruTrainer0",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleMagic,
	EquipMainHand: 766,
	EquipOffHand: 3421,
});

buildNpc({
	Tag: 'ud-dru-trainer-mid',
	CopyFrom: 3064,

	Name: 'Earl Quietfear',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:2369.834717,y:434.630524,z:33.591431,o:2.335445},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3354,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Earl Quietfear',
	GuardGossipText: "Look for Earl Quietfear, he's probably around the graveyard looking wistfully at a dead plant or something.",

	BakedNpc: "udDruTrainer1",
	BakedNpcSound: NpcSoundIDs.UndeadMaleStandard,
	EquipMainHand: 766,
	EquipOffHand: 3421,
});

buildNpc({
	Tag: 'ud-dru-trainer-main',
	CopyFrom: 3034,

	Name: 'Lucan Hayward',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:1564.154419,y:354.043060,z:-62.159279,o:3.714833},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipPoiName: "Undercity Druid Trainers",
	InjectGossip: [{
		Target: ABOM_GOSSIP_CLASS_TRAINERS,
		Option: "Druid",
		Gossip: "Oh, we like the druids, they turn into kitties, like little pet friends.  You find them on inner ring of The Apothecarium, with Herbalists.",
	}, {
		Target: 10768,
		Option: "Druid",
		Gossip: "You'll find Lucan Hayward on inner ring of The Apothecarium, working with the herbalists.  Nowhere else down in this pit to find a single plant, I suppose.",
	}],

	BakedNpc: "udDruTrainer3",
	BakedNpcSound: NpcSoundIDs.UndeadMaleDark,
	EquipMainHand: 3327,
});

buildNpc({
	Tag: 'ud-dru-trainer-0',
	CopyFrom: 3033,

	Name: 'Adaliz Wildcry',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:1556.635498,y:353.888489,z:-62.166023,o:5.099762},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "udDruTrainer4",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleStandard,
});

buildNpc({
	Tag: 'ud-dru-trainer-1',
	CopyFrom: 3036,

	Name: 'Molly Tornweeper',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:1554.859741,y:352.176819,z:-62.167915,o:5.811856},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "udDruTrainer5",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleWarrior,
	EquipMainHand: 5778,
});
