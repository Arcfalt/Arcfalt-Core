import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";

buildNpc({
	Tag: 'or-pld-trainer-valley',
	CopyFrom: 15280,

	Name: 'Muwgar',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:-639.194458,y:-4226.721680,z:38.134216,o:5.383162},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinLow,
	TrainerGossipClass: "Welcome, $c. The so called light may have been unknown to us until recent years, but through our strength we can channel it just the same as any little human.",
	TrainerGossipNotClass: "You'll have to find someone else to train you, $c.",

	BakedNpc: "orPldTrainer0",
	BakedNpcSound: NpcSoundIDs.OrcFemaleWarrior,
	EquipMainHand: 5779,
});

buildNpc({
	Tag: 'or-pld-trainer-razor',
	CopyFrom: 16275,

	Name: 'Gezirdrit',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:293.725220,y:-4830.029297,z:10.524028,o:0.616615},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinHorde,
	TrainerGossipClass: "Welcome, $c. The so called light may have been unknown to us until recent years, but through our strength we can channel it just the same as any little human.",
	TrainerGossipNotClass: "You'll have to find someone else to train you, $c.",

	GuardGossipOrigin: 3283,
	GuardGossipOption: 'Paladin',
	GuardGossipPoiName: 'Gezirdrit',
	GuardGossipText: "A Paladin? You'd be better staying true to being a warrior if you ask me, but you can find Gezirdrit in the barracks on the east side of Razor Hill.",

	BakedNpc: "orPldTrainer1",
	BakedNpcSound: NpcSoundIDs.OrcFemaleShaman,
	EquipMainHand: 14145,
	EquipOffHand: 2446,
});

std.CreatureTemplates.load(3706).Spawns.getIndex(0).Position.set({map:1,x:295.898987,y:-4833.096191,z:10.524028,o:0.616615});

buildNpc({
	Tag: 'or-pld-trainer-orgrimmar1',
	CopyFrom: 16681,

	Name: 'Kovzarl Aridtooth',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:2028.221436,y:-4637.040039,z:29.781172,o:4.232431},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinHorde,
	TrainerGossipClass: "Welcome, $c. The so called light may have been unknown to us until recent years, but through our strength we can channel it just the same as any little human.",
	TrainerGossipNotClass: "You'll have to find someone else to train you, $c.",

	GuardGossipOrigin: 1949,
	GuardGossipOption: 'Paladin',
	GuardGossipPoiName: 'Orgrimmar Paladin Trainer',
	GuardGossipText: "Pah! You can find Kovzarl messing about with his precious light over in the little shack by the fishing pond in the Valley of Honor. He was once a feared warrior, but he's gone soft if you ask me.",

	BakedNpc: "orPldTrainer2",
	BakedNpcSound: NpcSoundIDs.OrcMaleGuard,
	EquipMainHand: 1680,
});

buildNpc({
	Tag: 'or-pld-trainer-orgrimmar2',
	CopyFrom: 16680,

	Name: 'Omza Rapidwish',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:2033.455444,y:-4639.927734,z:29.781172,o:3.551083},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinHorde,
	TrainerGossipClass: "Welcome, $c. The so called light may have been unknown to us until recent years, but through our strength we can channel it just the same as any little human.",
	TrainerGossipNotClass: "You'll have to find someone else to train you, $c.",

	BakedNpc: "orPldTrainer4",
	BakedNpcSound: NpcSoundIDs.OrcFemaleStandard,
	EquipMainHand: 15228,
	EquipOffHand: 4069,
});

buildNpc({
	Tag: 'or-pld-trainer-orgrimmar3',
	CopyFrom: 16679,

	Name: 'Ulugnest',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:2025.279175,y:-4632.700195,z:29.781172,o:5.351614},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinHorde,
	TrainerGossipClass: "Welcome, $c. The so called light may have been unknown to us until recent years, but through our strength we can channel it just the same as any little human.",
	TrainerGossipNotClass: "You'll have to find someone else to train you, $c.",

	BakedNpc: "orPldTrainer3",
	BakedNpcSound: NpcSoundIDs.OrcMaleShady,
	EquipMainHand: 18410,
});