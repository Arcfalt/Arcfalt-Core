import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.ROGUE,
	Race: RaceIDs.TAUREN,
	EquipCopyFromRace: RaceIDs.TROLL,
	EquipSkills: [std.EquipSkills.Daggers],
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.ROGUE,
	ClassText: "Greetings, young rogue.  What do you seek?",
	NotClassText: "You don't appear ready to blend in to the shadows.  Try seeking out a $c trainer.",
}});

buildNpc({
	Tag: 'ta-rog-trainer-start',
	CopyFrom: 3155,

	Name: 'Olisa Bloodstride',
	Subname: 'Rogue Trainer',
	Spawn: {map:1,x:-2862.635742,y:-230.636627,z:54.820702,o:2.676214},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.RogueLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taRogStart",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleStandard,
	EquipMainHand: 2266,
	EquipOffHand: 2266,
});

buildNpc({
	Tag: 'ta-rog-trainer-mid',
	CopyFrom: 3170,

	Name: 'Osarkiloo Softscar',
	Subname: 'Rogue Trainer',
	Spawn: {map:1,x:-2384.228516,y:-341.220947,z:-0.730204,o:5.774609},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Rogue,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3329,
	GuardGossipOption: 'Rogue',
	GuardGossipPoiName: 'Osarkiloo Softscar',
	GuardGossipText: "If it is the way of the shadows you're looking for, seek out Osarkiloo Softscar.  You'll find him upstairs in the inn, on the western side of Bloodhoof Village.$B$BIf he wishes to be found, of course.",

	BakedNpc: "taRogMid",
	BakedNpcSound: NpcSoundIDs.TaurenMaleWarrior,
	EquipMainHand: 2266,
	EquipOffHand: 2266,
});

buildNpc({
	Tag: 'ta-rog-trainer-main',
	CopyFrom: 3401,

	Name: 'Zuzela Swiftwinds',
	Subname: 'Rogue Trainer',
	Spawn: {map:1,x:-1074.816772,y:-342.205719,z:160.012833,o:1.054903},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Rogue,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 740,
	GuardGossipOption: 'Rogue',
	GuardGossipPoiName: 'Rogue Camp',
	GuardGossipText: "Ah...  The way of the shadows.  You'll want to look for Zuzela Swiftwinds in a small encampment near the very back of the Elder Rise, behind the Hall of Elders.",

	BakedNpc: "taRog3",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleOfficial,
	EquipMainHand: 6660,
	EquipOffHand: 6660,
});

buildNpc({
	Tag: 'ta-rog-trainer-0',
	CopyFrom: 3328,

	Name: 'Ahmik Lonewound',
	Subname: 'Rogue Trainer',
	Spawn: {map:1,x:-1068.608276,y:-339.682251,z:159.884521,o:2.028798},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Rogue,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taRog2",
	BakedNpcSound: NpcSoundIDs.TaurenMaleWarrior,
	EquipMainHand: 6660,
	EquipOffHand: 6660,
});

buildNpc({
	Tag: 'ta-rog-trainer-1',
	CopyFrom: 3327,

	Name: 'Chosposi Darkdraft',
	Subname: 'Rogue Trainer',
	Spawn: {map:1,x:-1074.723145,y:-336.509491,z:159.863617,o:6.283038},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Rogue,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taRog1",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleStandard,
	EquipMainHand: 6660,
	EquipOffHand: 6660,
});
