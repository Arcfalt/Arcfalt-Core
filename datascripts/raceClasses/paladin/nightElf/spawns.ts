import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";

export const NE_PLD_TRAINER_SHADOWGLEN = buildNpc({
	Tag: 'ne-pld-trainer-shadowglen',
	CopyFrom: 925,

	Name: 'Semai Bearsword',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:10523.862305,y:787.640076,z:1329.599609,o:3.381346},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinLow,
	TrainerGossipClass: "Welcome, young one. Through our worship of Mother Moon, and observation of our new allies, we of the New Moon have begun to form the beginnings of a Paladin order.  Have you come to train?",
	TrainerGossipNotClass: "It appears you are not one to harness the light of the moon and balance of the blade together in harmony. Move along, young one.",

	BakedNpc: "nePldTrainer00",
	BakedNpcSound: NpcSoundIDs.NightElfFemaleSentinel,
	EquipMainHand: 9385,
});

export const NE_PLD_TRAINER_DOLANAAR = buildNpc({
	Tag: 'ne-pld-trainer-dolanaar',
	CopyFrom: 1232,

	Name: 'Elendia Morninglight',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:9906.869141,y:987.328857,z:1313.831665,o:2.753534},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinAlliance,
	TrainerGossipClass: "Through our worship of Mother Moon, and observation of our new allies, we of the New Moon have begun to form our own Paladin order.  Have you come to train?",
	TrainerGossipNotClass: "Elune guide you, $c.",

	GuardGossipOrigin: 3564,
	GuardGossipOption: 'Paladin',
	GuardGossipPoiName: 'Elendia Morninglight',
	GuardGossipText: "Ah, I have heard of the new order combining the efforts of the priestesses and sentinels under inspiration of the human order of Paladins. I believe Elendia would be able to assist you. She can be found in the tower just north of Dolanaar Inn.",

	BakedNpc: "nePldTrainer01",
	BakedNpcSound: NpcSoundIDs.NightElfFemalePriestess,
	EquipMainHand: 3319,
	EquipOffHand: 876,
});

export const NE_PLD_TRAINER_DARNASSUS_LOWER = buildNpc({
	Tag: 'ne-pld-trainer-darnassus-lower',
	CopyFrom: 5491,
	Level: 50,

	Name: 'Fyliyell Farleaf',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:9605.822266,y:2534.134033,z:1331.658447,o:6.075466},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinAlliance,
	TrainerGossipClass: "Through our worship of Mother Moon, and observation of our new allies, we of the New Moon have begun to form our own Paladin order.  Have you come to train?",
	TrainerGossipNotClass: "Elune guide you, $c.",
	
	GuardGossipOrigin: 2343,
	GuardGossipOption: 'Paladin',
	GuardGossipPoiName: 'Darnassus Paladin Trainers',
	GuardGossipText: "Our new order of Paladins can be found residing within the Temple of the Moon.  Seek out the Farleaf sisters, they will guide you into this new style of training.",

	BakedNpc: "nePldTrainer02",
	BakedNpcSound: NpcSoundIDs.NightElfFemalePriestess,
	EquipMainHand: 9490,
});

export const NE_PLD_TRAINER_DARNASSUS = buildNpc({
	Tag: 'ne-pld-trainer-darnassus',
	CopyFrom: 5492,
	Level: 60,

	Name: 'Ilyesana Silverstar',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:9665.286133,y:2530.818115,z:1360.000244,o:6.065613},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinAlliance,
	TrainerGossipClass: "Through our worship of Mother Moon, and observation of our new allies, we of the New Moon have begun to form our own Paladin order.  Have you come to train?",
	TrainerGossipNotClass: "Elune guide you, $c.",

	BakedNpc: "nePldTrainer03",
	BakedNpcSound: NpcSoundIDs.NightElfFemaleSentinel,
	EquipMainHand: 913,
});

export const NE_PLD_TRAINER_DARNASSUS_2 = buildNpc({
	Tag: 'ne-pld-trainer-darnassus-2',
	CopyFrom: 5492,
	Level: 40,

	Name: 'Ayanaya Farleaf',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:9608.135742,y:2537.576416,z:1331.629395,o:5.601935},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinAlliance,
	TrainerGossipClass: "Through our worship of Mother Moon, and observation of our new allies, we of the New Moon have begun to form our own Paladin order.  Have you come to train?",
	TrainerGossipNotClass: "Elune guide you, $c.",

	BakedNpc: "nePldTrainer04",
	BakedNpcSound: NpcSoundIDs.NightElfFemaleSentinel,
	EquipMainHand: 9490,
});

std.CreatureTemplates.load(35281).Spawns.getIndex(0).delete();