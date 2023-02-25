import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_DRU_START_CHEST, A_DRU_START_SHIRT } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.DWARF,
	EquipIdList: [35, A_DRU_START_CHEST.ID, A_DRU_START_SHIRT.ID, 6124],
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.DRUID,
	ClassText: "Welcome, $g brother : sister;.  Have you come to deepen your connection with the beating heart of nature?",
	NotClassText: "May the wilds keep you safe, $c.",
}});

buildNpc({
	Tag: 'dw-dru-trainer-coldridge',
	CopyFrom: 3597,

	Name: 'Brynle Boulderward',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-6069.121582,y:373.291321,z:393.598785,o:0.330418},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerID: TrainerID.DruidLow,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "dwDruTrainer1",
});

buildNpc({
	Tag: 'dw-dru-trainer-kharanos',
	CopyFrom: 3602,

	Name: 'Jedon Boulderbranch',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-5587.494141,y:-539.594910,z:403.540680,o:0.178068},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "dwDruTrainer2",
	
	GuardGossipOrigin: 3545,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Jedon Boulderbranch',
	GuardGossipText: "Ach, a Druid?  Yer in luck, one of the wildhammer naturalists, Jedon Boulderbranch, has been staying in the Thunderbrew Distillery.  Uncommon to see them leave the roost too often.",
});

buildNpc({
	Tag: 'dw-dru-trainer-if1',
	CopyFrom: 5505,

	Name: 'Dimos Cliffmane',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-4697.833984,y:-1176.038818,z:505.269440,o:3.839701},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "ifDru1",

	GuardGossipOrigin: 2144,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Hall of Explorers',
	GuardGossipText: "Lucky fer ye, the League of Explorers recently called in some naturalists from our allies at Aerie Peak to assist with a wee little project.  Ye can find them lodging in the Hall of Explorers, hopefully they can assist ye if they aren't too busy!",
});

buildNpc({
	Tag: 'dw-dru-trainer-if2',
	CopyFrom: 5506,

	Name: 'Agrirn Deepflight',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-4702.763184,y:-1171.683716,z:505.269318,o:5.285773},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "ifDru2",
});

buildNpc({
	Tag: 'dw-dru-trainer-if3',
	CopyFrom: 5504,

	Name: 'Khuidruthal Steelbelly',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-4697.470703,y:-1179.420410,z:511.936920,o:2.518273},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "ifDru3",
});
