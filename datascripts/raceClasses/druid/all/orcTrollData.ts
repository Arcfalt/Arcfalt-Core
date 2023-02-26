import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildNpc } from "../../../npcBuilder";

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.DRUID,
	ClassText: "May de loa bring ya strength.  Channel de spirits o' nature, friend.",
	NotClassText: "Ya'll need to find a different trainer, $c.  I cannot help ya.",
}});

buildNpc({
	Tag: 'or-dru-trainer-valley',
	CopyFrom: 3060,

	Name: 'Jabul',
	Subname: 'Druid Trainer',
	Spawn: {map:1,x:-630.485291,y:-4213.135254,z:38.134029,o:0.980682},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.DruidLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "orDruTrainer0",
	BakedNpcSound: NpcSoundIDs.TrollMaleDark,
	EquipMainHand: 5778,
});

buildNpc({
	Tag: 'or-dru-trainer-razor',
	CopyFrom: 3064,

	Name: "Den'chulu",
	Subname: 'Druid Trainer',
	Spawn: {map:1,x:305.094727,y:-4839.462402,z:10.524177,o:1.376491},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3283,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: "Den'chulu",
	GuardGossipText: "Seek out Den'chulu in the barracks on the east side of Razor Hill.  I've seen her turn into a cat once...",

	BakedNpc: "orDruTrainer1",
	BakedNpcSound: NpcSoundIDs.TrollFemaleOld,
	EquipMainHand: 15444,
});

std.CreatureTemplates.load(3173).Spawns.getIndex(0).Position.set({map:1,x:309.057709,y:-4840.242188,z:10.524177,o:1.376491});

buildNpc({
	Tag: 'or-dru-trainer-orgrimmar',
	CopyFrom: 3033,
	Level: 60,

	Name: 'Sesebi',
	Subname: 'Druid Trainer',
	Spawn: {map:1,x:1456.644897,y:-4220.769043,z:43.186043,o:0.050751},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 1949,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Orgrimmar Druid Trainers',
	GuardGossipText: "Look for Sesebi in the Darkbriar Lodge in the Valley of Spirits, up above and to the west of the Valley of Strength.",

	BakedNpc: "orDruTrainer2",
	BakedNpcSound: NpcSoundIDs.TrollFemaleLaidBack,
	EquipMainHand: 17743,
});

buildNpc({
	Tag: 'or-dru-trainer-orgrimmar2',
	CopyFrom: 3033,
	Level: 50,

	Name: "Keh'je",
	Subname: 'Druid Trainer',
	Spawn: {map:1,x:1477.814941,y:-4214.729980,z:43.185944,o:5.286729},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "orDruTrainer3",
	BakedNpcSound: NpcSoundIDs.TrollMaleShaman,
	EquipMainHand: 17743,
});

buildNpc({
	Tag: 'or-dru-trainer-orgrimmar3',
	CopyFrom: 3033,
	Level: 40,

	Name: 'Fetho',
	Subname: 'Druid Trainer',
	Spawn: {map:1,x:1480.435181,y:-4218.779297,z:43.185944,o:2.184408},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "orDruTrainer4",
	BakedNpcSound: NpcSoundIDs.TrollFemaleStandard,
	EquipMainHand: 17743,
});
