import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_DRU_START_CHEST, A_DRU_START_SHIRT } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.HUMAN,
	EquipIdList: [35, A_DRU_START_CHEST.ID, A_DRU_START_SHIRT.ID, 6124],
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.DRUID,
	ClassText: "Ready to nourish the roots of your budding knowledge?",
	NotClassText: "May you sow the seeds of your future harvest, $c.",
}});

export const HUMAN_DRUID_NORTHSHIRE = buildNpc({
	Tag: 'hu-dru-trainer-northshire',
	CopyFrom: 3597,

	Name: 'Alvis Trollope',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-8850.545898,y:-185.824783,z:81.943451,o:3.402238},
	Faction: FactionTemplateValues.STORMWIND,

	TrainerID: TrainerID.DruidLow,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "huDruTrainer0",
});

export const HUMAN_DRUID_GOLDSHIRE = buildNpc({
	Tag: 'hu-dru-trainer-goldshire',
	CopyFrom: 3602,

	Name: 'Aubrianne Notleigh',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-9459.940430,y:24.847572,z:63.820717,o:2.496357},
	Faction: FactionTemplateValues.STORMWIND,

	GuardGossipOrigin: 3519,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Aubrianne Notleigh',
	GuardGossipText: "Druids?  Normally I'd direct you to our elven allies Stormwind, but I believe there happens to be a harvest witch, Aubrianne Notleigh, staying upstairs at Lion's Pride Inn.  Perhaps you could see if she's willing to help you?",

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "huDruTrainer1",
});

export const HUMAN_DRUID_STORMWIND = buildNpc({
	Tag: 'hu-dru-trainer-sw',
	CopyFrom: 4219,

	Name: 'Peverell Smythe',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-8770.171875,y:1096.364868,z:92.551514,o:4.252604},
	Faction: FactionTemplateValues.STORMWIND,

	TrainerID: TrainerID.Druid,
	Gossip: {AddClassTrainer: {ClassMask: ClassMask.DRUID,
		ClassText: "The coven of the harvest was once a secretive group, we simply tended to the forests around the capital with nature in our heart, using magics rarely found in these lands.  Ever since Stormwind allied with our elven neighbors from across the sea, however, we learned there was so much more to our art than we could ever have known.$B$BWe emerged from the wilds and sought a new beginning here, and the druids, while at first hesitant to share their teachings with us, have come to embrace us and teach us their ways.$B$BHave you come here to train?",
		NotClassText: "The coven of the harvest was once a secretive group, we simply tended to the forests around the capital with nature in our heart, using magics rarely found in these lands.  Ever since Stormwind allied with our elven neighbors from across the sea, however, we learned there was so much more to our art than we could ever have known.$B$BWe emerged from the wilds and sought a new beginning here, and the druids, while at first hesitant to share their teachings with us, have come to embrace us and teach us their ways.",
	}},
	BakedNpc: "huDruTrainer3",
});
