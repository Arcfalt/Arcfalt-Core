import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { TrainerID } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildNpc } from "../../../npcBuilder";

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.MAGE,
	ClassText: "The magic of today pales in comparison to that of millennia past.  Still, we Highborne still know much of the arcane.  The people of this land shun us because they do not understand, but knowledge is the key to fixing past mistakes, not ignorance.  Are you ready to learn?",
	NotClassText: "My apologies, $c, but the arcane secrets of the Highborne will forever remain secrets to you.",
}});

export const NE_MAG_TRAINER_START = buildNpc({
	Tag: 'ne-mag-trainer-start',
	CopyFrom: 198,

	Name: 'Rhyanda',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:10440.950195,y:773.303589,z:1322.666260,o:2.157962},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerID: TrainerID.MageLow,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "neMagRhyanda",
});

export const NE_MAG_TRAINER_MID = buildNpc({
	Tag: 'ne-mag-trainer-mid',
	CopyFrom: 328,

	Name: 'Irriende',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:9834.517578,y:955.770569,z:1308.774780,o:2.582702},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerID: TrainerID.Mage,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "neMagIrriende",

	GuardGossipOrigin: 3564,
	GuardGossipOption: 'Mage',
	GuardGossipPoiName: 'Irriende',
	GuardGossipText: "Be wary, practicing the arcane here will not be treated kindly, and for good reason.  Though we no longer actively exile practitioners, you won't win yourself many friends.  Look for the Highborne, Irriende, near the entrance of the Dolanaar Inn.  You can't miss her.",
});

export const NE_MAG_TRAINER_CITY_MAIN = buildNpc({
	Tag: 'ne-mag-trainer-citymain',
	CopyFrom: 5146,

	Name: 'Archmage Mordent Evenshade',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:9646.210938,y:2439.796387,z:1337.293945,o:0.012006},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerID: TrainerID.Mage,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "neMagMordent",

	GuardGossipOrigin: 2343,
	GuardGossipOption: 'Mage',
	GuardGossipPoiName: 'Darnassus Mage Trainer',
	GuardGossipText: "Watch yourself, many here still shun the arcane arts, and for good reason.  If you truly wish to pursue this reckless course of action, you may find Mordent Evenshade in the gardens outside of the Temple of the Moon.",
});

export const NE_MAG_TRAINER_CITY_1 = buildNpc({
	Tag: 'ne-mag-trainer-city1',
	CopyFrom: 5498,

	Name: 'Dyrhara',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:9629.408203,y:2435.422363,z:1337.293945,o:1.606362},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerID: TrainerID.Mage,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "neMagDyrhara",
});

export const NE_MAG_TRAINER_CITY_2 = buildNpc({
	Tag: 'ne-mag-trainer-city2',
	CopyFrom: 5497,

	Name: 'Maelir',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:9629.397461,y:2442.947510,z:1337.293945,o:4.766283},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerID: TrainerID.Mage,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "neMagMaelir",
});

std.CreatureTemplates.load(36479).Spawns.getIndex(0).Position.set({map:1,x:9676.408203,y:2508.906250,z:1335.414551,o:2.345940});
std.CreatureTemplates.load(36481).Spawns.getIndex(0).Position.set({map:1,x:9673.087891,y:2512.047363,z:1334.951660,o:5.528137});
std.CreatureTemplates.load(17105).Spawns.getIndex(0).delete();
std.CreatureTemplates.load(4090).Spawns.getIndex(0).Position.set({map:1,x:9664.407227,y:2528.656738,z:1360.000244,o:5.779341});
std.CreatureTemplates.load(36506).Spawns.getIndex(0).delete();