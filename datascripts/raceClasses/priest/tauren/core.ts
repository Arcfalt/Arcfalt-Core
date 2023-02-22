import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildItem } from "../../../itemBuilder";
import { buildNpc, appendNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.PRIEST,
	Race: RaceIDs.TAUREN,
	EquipIdList: [buildItem({
		Tag: 'ta-pst-gear-chest-starter',
		CopyFrom: 6144, DisplayId: 25944,
	}).ID, 52, 35]
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.PRIEST,
	ClassText: "What shall An'she's Light teach you today?",
	NotClassText: "An'she's Light protect you, $c.",
}});

buildNpc({
	Tag: 'ta-pri-trainer-start',
	CopyFrom: 3707,

	Name: 'Muna Mistsong',
	Subname: 'Priest Trainer',
	Spawn: {map:1,x:-2887.654297,y:-275.144318,z:53.914757,o:2.020567},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.PriestLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taPriStart",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleShaman,
	EquipMainHand: 9514,
});

buildNpc({
	Tag: 'ta-pri-trainer-mid',
	CopyFrom: 3706,

	Name: 'Alsoomse Sunshout',
	Subname: 'Priest Trainer',
	Spawn: {map:1,x:-2297.157227,y:-439.865326,z:-5.438316,o:3.879175},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Priest,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3329,
	GuardGossipOption: 'Priest',
	GuardGossipPoiName: 'Alsoomse Sunshout',
	GuardGossipText: "Alsoomse Sunshout is our resident teacher in the ways of the Light of An'she.  She is within the large tent on the east side of Bloodhoof Village.",

	BakedNpc: "taPriAlsoomse",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleStandard,
	EquipMainHand: 4563,
	EquipOffHand: 15946,
});

appendNpc(34528, {ClearExistingSpawns: true});

buildNpc({
	Tag: 'ta-pri-trainer-main',
	CopyFrom: 3046,

	Name: 'Tahu Sagewind',
	Subname: 'Priest Trainer',
	Spawn: {map:1,x:-1036.587769,y:-302.225677,z:159.029999,o:2.242324},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Priest,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 740,
	GuardGossipOption: 'Priest',
	GuardGossipPoiName: "Hall of Elders",
	GuardGossipText: "You'll find Tahu Sagewind and his fellow sages of the Light of An'she residing within the Hall of Elders, on the Elder Rise.",

	BakedNpc: "taPriTahu",
	BakedNpcSound: NpcSoundIDs.TaurenMaleShaman,
	EquipMainHand: 4134,
});

buildNpc({
	Tag: 'ta-pri-trainer-0',
	CopyFrom: 3045,

	Name: 'Beryl Sagewind',
	Subname: 'Priest Trainer',
	Spawn: {map:1,x:-1066.944092,y:-297.333832,z:159.029999,o:0.721257},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Priest,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taPriBeryl",
	BakedNpcSound: NpcSoundIDs.TaurenMaleElder,
	EquipMainHand: 1300,
});

buildNpc({
	Tag: 'ta-pri-trainer-1',
	CopyFrom: 3044,

	Name: 'Kaya Sunshout',
	Subname: 'Priest Trainer',
	Spawn: {map:1,x:-1070.560181,y:-288.535339,z:159.029999,o:0.116505},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Priest,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taPriKaya",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleShaman,
	EquipMainHand: 1300,
});
