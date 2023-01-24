import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";

export const NE_MAG_TRAINER_SHADOWGLEN = buildNpc({
	Tag: 'ne-mag-trainer-shadowglen',
	CopyFrom: 198,

	Name: 'Halsey Rivers',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:10450.197266,y:789.223328,z:1345.646729,o:1.498362},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.MAGE,
	TrainerID: TrainerID.MageLow,
	TrainerGossipClass: "Well met, $r. It is good to see another study of the arcane arts in this land, where so many are quick to shun it. While their scorn may have once been justified, now is the time to seek a more knowledgeable future.",
	TrainerGossipNotClass: "A word of advice, if I may. The arcane is meant to be understood, and with knowledge, there is no need to fear it.",

	BakedNpc: "neMagTrainer00",
	BakedNpcSound: NpcSoundIDs.HumanFemaleStandard,
	EquipMainHand: 3902,
});

export const NE_MAG_TRAINER_DOLANAAR = buildNpc({
	Tag: 'ne-mag-trainer-dolanaar',
	CopyFrom: 328,

	Name: 'Collins Newbery',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:9807.503906,y:960.823181,z:1324.011108,o:4.630679},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.MAGE,
	TrainerID: TrainerID.Mage,
	TrainerGossipClass: "Well met, $r. It is good to see another study of the arcane arts in this land, where so many are quick to shun it. While their scorn may have once been justified, now is the time to seek a more knowledgeable future.",
	TrainerGossipNotClass: "A word of advice, if I may. The arcane is meant to be understood, and with knowledge, there is no need to fear it.",

	GuardGossipOrigin: 3564,
	GuardGossipOption: 'Mage',
	GuardGossipPoiName: 'Collins Newbery',
	GuardGossipText: "Not sure why you'd want to seek out a patron of the arcane, but if that's what you wish, you can see if that human is still staying upstairs in the Dolanaar Inn.",

	BakedNpc: "neMagTrainer01",
	BakedNpcSound: NpcSoundIDs.HumanMaleOfficial,
	EquipMainHand: 2013,
});

export const NE_MAG_TRAINER_DARNASSUS = buildNpc({
	Tag: 'ne-mag-trainer-darnassus',
	CopyFrom: 5498,

	Name: 'Harvey Rivers',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:9661.640625,y:2513.537354,z:1331.658691,o:2.823056},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.MAGE,
	TrainerID: TrainerID.Mage,
	TrainerGossipClass: "Well met, $r. It is good to see another study of the arcane arts in this land, where so many are quick to shun it. While their scorn may have once been justified, now is the time to seek a more knowledgeable future.",
	TrainerGossipNotClass: "A word of advice, if I may. The arcane is meant to be understood, and with knowledge, there is no need to fear it.",

	GuardGossipOrigin: 2343,
	GuardGossipOption: 'Mage',
	GuardGossipPoiName: 'Darnassus Mage Trainer',
	GuardGossipText: "Watch yourself, many here still shun the arcane arts, and for good reason. If you truly wish to pursue this course of action, you may find one of our human allies, Harvey Rivers, in the Temple of the Moon.",

	BakedNpc: "neMagTrainer03",
	BakedNpcSound: NpcSoundIDs.HumanMaleOfficial,
	EquipMainHand: 9514,
});

std.CreatureTemplates.load(36479).Spawns.getIndex(0).Position.set({map:1,x:9676.408203,y:2508.906250,z:1335.414551,o:2.345940});
std.CreatureTemplates.load(36481).Spawns.getIndex(0).Position.set({map:1,x:9673.087891,y:2512.047363,z:1334.951660,o:5.528137});
std.CreatureTemplates.load(17105).Spawns.getIndex(0).delete();
std.CreatureTemplates.load(4090).Spawns.getIndex(0).Position.set({map:1,x:9664.407227,y:2528.656738,z:1360.000244,o:5.779341});