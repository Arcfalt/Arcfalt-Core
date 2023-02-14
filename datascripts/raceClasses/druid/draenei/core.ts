import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs, AddonBytes2IDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildItem } from "../../../itemBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.DRAENEI,
	EquipIdList: [buildItem({
		Tag: 'dr-dru-gear-chest-starter',
		CopyFrom: 6123,
		DisplayId: 36127,
	}).ID,
	buildItem({
		Tag: 'dr-dru-gear-legs-starter',
		CopyFrom: 6124,
		DisplayId: 36128,
	}).ID,
	buildItem({
		Tag: 'dr-dru-gear-feet-starter',
		CopyFrom: 55,
		DisplayId: 36129,
		Name: "Novice's Boots",
	}).ID,
	3661],
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.DRUID,
	ClassText: "The xenobiologist convocation welcomes you. The denizens of most world know the craft as druidism, and it makes me proud to see such budding talent in another. Come, let me help you with your studies.",
	NotClassText: "Stay alive and well out there, $c.",
}});

buildNpc({
	Tag: 'dr-dru-trainer-start',
	CopyFrom: 3597,
	Level: 6,

	Name: 'Xenobiologist Vudum',
	Subname: 'Druid Trainer',
	Spawn: {map:530,x:-4143.277832,y:-13757.280273,z:74.570465,o:0.277636},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.DruidLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "drDruStart",
	BakedNpcSound: NpcSoundIDs.DraeneiMaleStandard,
	EquipMainHand: 27641,
});

buildNpc({
	Tag: 'dr-dru-trainer-mid',
	CopyFrom: 3602,
	Level: 12,

	Name: 'Xenobiologist Saanii',
	Subname: 'Druid Trainer',
	Spawn: {map:530,x:-4216.007324,y:-12477.015625,z:45.210625,o:5.730016},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 8137,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Xenobiologist Saanii',
	GuardGossipText: "Druid? Oh, you must be looking for Xenobiologist Saanii. She spends most of her time awaiting test results near the general goods trader, in the south of Azure Watch.",

	BakedNpc: "drDruMid",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleStandard,
	EquipMainHand: 26050,
});

buildNpc({
	Tag: 'dr-dru-trainer-main',
	CopyFrom: 4217,

	Name: 'Xenobiologist Remekua',
	Subname: 'Druid Trainer',
	Spawn: {map:530,x:-4029.021240,y:-11366.000977,z:-138.760010,o:3.022479},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 7787,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Exodar, Druid Trainers',
	GuardGossipText: "You're looking for a what? A druid? Ah, you must be looking for the xenobiologists. You'll find Remekua by the alchemists in the Hall of Lights, against the back wall.$B$BI'd be careful if I were you. They work with some fairly esoteric magics that can change your very body and soul. Light protect you.",

	BakedNpc: "drDruMain",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleNoble,
	AddonBytes2: AddonBytes2IDs.MELEE,
});

buildNpc({
	Tag: 'dr-dru-trainer-0',
	CopyFrom: 4219,

	Name: "Xenobiologist Bran'alus",
	Subname: 'Druid Trainer',
	Spawn: {map:530,x:-4043.267822,y:-11354.765625,z:-138.883942,o:2.909904},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "drDruRed",
	BakedNpcSound: NpcSoundIDs.DraeneiMaleNoble,
	AddonBytes2: AddonBytes2IDs.RANGED,
});

buildNpc({
	Tag: 'dr-dru-trainer-1',
	CopyFrom: 4218,

	Name: 'Xenobiologist Ranaam',
	Subname: 'Druid Trainer',
	Spawn: {map:530,x:-4051.218018,y:-11363.830078,z:-139.011032,o:1.111342},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Druid,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "drDruBlu",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleStandard,
	AddonBytes2: AddonBytes2IDs.RANGED,
});