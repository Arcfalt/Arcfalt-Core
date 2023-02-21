import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs, AddonBytes1IDs, AddonBytes2IDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { appendNpc, buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { H_PLD_START_LEGS_A, H_PLD_START_SHIRT_A } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.PALADIN,
	Race: RaceIDs.TAUREN,
	EquipIdList: [2361, H_PLD_START_SHIRT_A.ID, H_PLD_START_LEGS_A.ID],
	EquipSkills: [std.EquipSkills.Maces2H],
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.PALADIN,
	ClassText: "The light of the sun illuminates the path to wisdom.  Where shall we walk today, friend?",
	NotClassText: "May the sun's light protect you, $c.",
}});

buildNpc({
	Tag: 'ta-pld-trainer-start',
	CopyFrom: 15280,

	Name: 'Sunwalker Helaku',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:-2909.703125,y:-232.995087,z:53.796524,o:4.975334},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.PaladinLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taPldHelaku",
	BakedNpcSound: NpcSoundIDs.TaurenMaleWarrior,
	EquipMainHand: 11964,
	EquipOffHand: 2129,
});

buildNpc({
	Tag: 'ta-pld-trainer-mid',
	CopyFrom: 16275,

	Name: 'Sunwalker Iopi',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:-2308.567871,y:-455.487579,z:-5.438238,o:1.894734},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.PaladinHorde,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3329,
	GuardGossipOption: 'Paladin',
	GuardGossipPoiName: 'Sunwalker Iopi',
	GuardGossipText: "You will find Sunwalker Iopi ready to train those blessed by the light of An'she.  He is within the large tent on the east side of Bloodhoof Village.",

	BakedNpc: "taPldIopi",
	BakedNpcSound: NpcSoundIDs.TaurenMaleWarrior,
	EquipMainHand: 15255,
});

appendNpc(34526, {ClearExistingSpawns: true});

buildNpc({
	Tag: 'ta-pld-trainer-main',
	CopyFrom: 16681,

	Name: 'Aponi Brightmane',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:-1405.535767,y:-148.160324,z:159.254669,o:1.476408},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.PaladinHorde,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 740,
	GuardGossipOption: 'Paladin',
	GuardGossipPoiName: "Sunwalkers Hall",
	GuardGossipText: "Looking for training with the Sunwalkers?  You will find Aponi Brightmane within the Sunwalkers Hall on the Hunter Rise.  An'she guide you.",

	BakedNpc: "taPldAponi",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleStandard,
	EquipMainHand: 15266,
});

appendNpc(8664, {ClearExistingSpawns: true});

buildNpc({
	Tag: 'ta-pld-trainer-0',
	CopyFrom: 16680,

	Name: 'Sunwalker Saern',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:-1410.673340,y:-146.698761,z:159.254669,o:0.465862},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.PaladinHorde,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taPldSaern",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleShaman,
	EquipMainHand: 9651,
	EquipOffHand: 9899,
});

buildNpc({
	Tag: 'ta-pld-trainer-1',
	CopyFrom: 16679,

	Name: 'Sunwalker Reha',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:-1400.242065,y:-147.549515,z:159.254669,o:2.518366},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.PaladinHorde,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taPldReha",
	BakedNpcSound: NpcSoundIDs.TaurenMaleWarrior,
	EquipMainHand: 9651,
	EquipOffHand: 9899,
});

appendNpc(35471, {ClearExistingSpawns: true});
