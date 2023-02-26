import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildNpc } from "../../../npcBuilder";

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.PALADIN,
	ClassText: "May de' Light o' Lukou guide us, friend.  What can 'dis humble servant do for ya?",
	NotClassText: "Light o' Lukou guide ya, $c.",
}});

buildNpc({
	Tag: 'or-pld-trainer-valley',
	CopyFrom: 15280,

	Name: "Az'kea",
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:-639.194458,y:-4226.721680,z:38.134216,o:5.383162},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.PaladinLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "orPldTrainer0",
	BakedNpcSound: NpcSoundIDs.TrollFemaleStandard,
	EquipMainHand: 5779,
});

buildNpc({
	Tag: 'or-pld-trainer-razor',
	CopyFrom: 16275,

	Name: "Tzem'tei",
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:293.725220,y:-4830.029297,z:10.524028,o:0.616615},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.PaladinHorde,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3283,
	GuardGossipOption: 'Paladin',
	GuardGossipPoiName: "Tzem'tei",
	GuardGossipText: "A Paladin?  That's like those Light of Lukou worshippers, right?  You can find Tzem'tei in the barracks on the east side of Razor Hill.",

	BakedNpc: "orPldTrainer1",
	BakedNpcSound: NpcSoundIDs.TrollMaleStandard,
	EquipMainHand: 14145,
	EquipOffHand: 2040,
});

std.CreatureTemplates.load(3706).Spawns.getIndex(0).Position.set({map:1,x:295.898987,y:-4833.096191,z:10.524028,o:0.616615});

buildNpc({
	Tag: 'or-pld-trainer-orgrimmar1',
	CopyFrom: 16681,

	Name: "Zar'sasay",
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:1457.811646,y:-4177.457520,z:44.290951,o:4.512091},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.PaladinHorde,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 1949,
	GuardGossipOption: 'Paladin',
	GuardGossipPoiName: 'Orgrimmar Paladin Trainers',
	GuardGossipText: "Look for Zar'sasay and his little Light of Lukou group in the Spirits Lodge, in the Valley of Spirits.  They moved in with the priests there recently.",

	BakedNpc: "orPldTrainer2",
	BakedNpcSound: NpcSoundIDs.TrollMaleDark,
	EquipMainHand: 1680,
});

buildNpc({
	Tag: 'or-pld-trainer-orgrimmar2',
	CopyFrom: 16680,

	Name: 'Zulre',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:1459.427979,y:-4176.071777,z:61.560863,o:3.724069},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.PaladinHorde,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "orPldTrainer4",
	BakedNpcSound: NpcSoundIDs.TrollFemaleLaidBack,
	EquipMainHand: 15228,
	EquipOffHand: 2040,
});

buildNpc({
	Tag: 'or-pld-trainer-orgrimmar3',
	CopyFrom: 16679,

	Name: 'Yuhize',
	Subname: 'Paladin Trainer',
	Spawn: {map:1,x:1449.482422,y:-4180.997070,z:61.560863,o:0.391362},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.PaladinHorde,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "orPldTrainer3",
	BakedNpcSound: NpcSoundIDs.TrollFemaleOld,
	EquipMainHand: 18410,
});