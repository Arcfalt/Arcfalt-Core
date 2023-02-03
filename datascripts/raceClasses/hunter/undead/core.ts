import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { ABOM_GOSSIP_CLASS_TRAINERS } from "../../../classicFixes/undercityAbomGossipFix";
import { TrainerID, NpcSoundIDs, AddonBytes2IDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildItem } from "../../../itemBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.HUNTER,
	Race: RaceIDs.UNDEAD,
	EquipIdList: [buildItem({
		Tag: 'ud-hnt-gear-chest-starter',
		CopyFrom: 127,
		DisplayId: 8635,
	}).ID, buildItem({
		Tag: 'ud-hnt-gear-feet-starter',
		CopyFrom: 6127,
		DisplayId: 10362,
	}).ID, buildItem({
		Tag: 'ud-hnt-gear-legs-starter',
		CopyFrom: 6126,
		DisplayId: 10534,
		DisplayIcon: "INV_Pants_02",
	}).ID, 12282, 23347, 2101, 2512],
	EquipSkills: [std.EquipSkills.Axes2H, std.EquipSkills.Crossbows],
})

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.HUNTER,
	ClassText: "Let the thrill of the hunt rattle through your bones, may it never leave you...",
	NotClassText: "Be gone, $c.  I have no need of you in my hunt.",
}});

buildNpc({
	Tag: 'ud-hnt-trainer-start',
	CopyFrom: 3154,

	Name: 'Jette Zayne',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:1859.488281,y:1556.411621,z:94.790657,o:1.033769},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.HunterLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "udHntTrainer0",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleWarrior,
	EquipRanged: 13038,
});

buildNpc({
	Tag: 'ud-hnt-trainer-mid',
	CopyFrom: 3171,

	Name: 'Hadrian',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:2252.170166,y:316.173553,z:35.187950,o:5.537489},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Hunter,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3354,
	GuardGossipOption: 'Hunter',
	GuardGossipPoiName: 'Hadrian',
	GuardGossipText: "Look for Hadrian, he can be found around the stables most of the time.",

	BakedNpc: "udHntTrainer1",
	BakedNpcSound: NpcSoundIDs.UndeadMaleStandard,
	EquipRanged: 5596,
});

buildNpc({
	Tag: 'ud-hnt-pet-trainer-mid',
	CopyFrom: 3620,

	Name: 'Svana Oldham',
	Subname: 'Pet Trainer',
	Spawn: {map:0,x:2262.058594,y:327.741974,z:35.158947,o:5.684096},
	Faction: FactionTemplateValues.UNDERCITY,

	BakedNpc: "udHntTrainerPet",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleStandard,
});

buildNpc({
	Tag: 'ud-hnt-trainer-main',
	CopyFrom: 3352,

	Name: 'Apolos',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:1757.420166,y:400.246826,z:-57.213375,o:3.921825},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Hunter,
	Gossip: buildGossip({AddClassTrainer: {ClassMask: ClassMask.HUNTER,
		ClassText: "I thought my hunt was over when death came for me, but it seems it was simply a new beginning.  If you wish to train your skills as a hunter, these old bones can show you a thing or two.",
		NotClassText: "Be gone, $c.  I have no need of you in my hunt.",
	}}),

	GuardGossipPoiName: "Undercity Hunter Trainers",
	InjectGossip: [{
		Target: ABOM_GOSSIP_CLASS_TRAINERS,
		Option: "Hunter",
		Gossip: "Hunters funny.  They keep pets that like to use their bones as toys.  You find them on outer ring of War Quarter.",
	}, {
		Target: 10768,
		Option: "Hunter",
		Gossip: "You can find a group of hunters in the War Quarter. Head to the outer ring there.",
	}],

	BakedNpc: "udHntTrainer2",
	BakedNpcSound: NpcSoundIDs.UndeadMaleDark,
	EquipMainHand: 13056,
	EquipRanged: 27507,
	AddonBytes2: AddonBytes2IDs.MELEE,
});

buildNpc({
	Tag: 'ud-hnt-trainer-0',
	CopyFrom: 3407,

	Name: 'Lenka Hastings',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:1797.052734,y:432.303040,z:-57.213375,o:3.763025},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Hunter,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "udHntTrainer3",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleWarrior,
	EquipMainHand: 4568,
	EquipOffHand: 4568,
	EquipRanged: 10508,
	AddonBytes2: AddonBytes2IDs.RANGED,
});

buildNpc({
	Tag: 'ud-hnt-trainer-1',
	CopyFrom: 3406,

	Name: 'Carine Winmore',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:1790.030029,y:439.358734,z:-57.213375,o:4.098135},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Hunter,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "udHntTrainer4",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleStandard,
	EquipMainHand: 1522,
	EquipRanged: 10508,
	AddonBytes2: AddonBytes2IDs.RANGED,
});

buildNpc({
	Tag: 'ud-hnt-pet-trainer-main',
	CopyFrom: 10088,

	Name: 'Mandel Bauhaus',
	Subname: 'Pet Trainer',
	Spawn: {map:0,x:1789.646362,y:432.050751,z:-57.214260,o:0.778517},
	Faction: FactionTemplateValues.UNDERCITY,

	BakedNpc: "udHntTrainerPet2",
	BakedNpcSound: NpcSoundIDs.UndeadMaleDark,
});

buildNpc({
	Tag: 'ud-hnt-stable-master-main',
	CopyFrom: 10053,

	Name: 'Elise Chesterhill',
	Subname: 'Stable Master',
	Spawn: {map:0,x:1794.528320,y:420.983978,z:-57.214321,o:6.215185},
	Faction: FactionTemplateValues.UNDERCITY,

	BakedNpc: "udHntTrainerPet3",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleStandard,
});
