import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { CreatureType } from "wow/wotlk/std/Creature/CreatureType";
import { UnitClass } from "wow/wotlk/std/Creature/UnitClass";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs, AddonBytes2IDs } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.HUNTER,
	Race: RaceIDs.HUMAN,
	EquipIdList: [148, 147, 129, 12282, 23347, 2101, 2512],
	EquipSkills: [std.EquipSkills.Axes2H, std.EquipSkills.Crossbows],
})

buildNpc({
	Tag: 'hu-hnt-trainer-northshire',
	CopyFrom: 17089,

	Name: 'Louisa Lea',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:-8873.949219,y:-218.049820,z:81.464012,o:4.281247},
	Faction: FactionTemplateValues.STORMWIND,

	TrainerClassMask: ClassMask.HUNTER,
	TrainerID: TrainerID.HunterLow,
	TrainerGossipClass: "Ready to sharpen up your hunting skills?",
	TrainerGossipNotClass: "I cannot train a $c such as you.",

	BakedNpc: "huHntTrainer0",
	BakedNpcSound: NpcSoundIDs.HumanFemaleWarrior,
	EquipRanged: 15807,
});

buildNpc({
	Tag: 'hu-hnt-trainer-goldshire',
	CopyFrom: 3601,

	Name: 'Ronny Branson',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:-9475.209961,y:44.946182,z:56.727257,o:1.534215},
	Faction: FactionTemplateValues.STORMWIND,

	TrainerClassMask: ClassMask.HUNTER,
	TrainerID: TrainerID.Hunter,
	TrainerGossipClass: "Ready to sharpen up your hunting skills?",
	TrainerGossipNotClass: "I cannot train a $c such as you.",

	GuardGossipOrigin: 3519,
	GuardGossipOption: 'Hunter',
	GuardGossipPoiName: 'Ronny Branson',
	GuardGossipText: "You'll want to look for Ronny, he helps work the stables just out the front of Lion's Pride Inn.  He's good with a crossbow and knows a thing or two about training animals.",

	BakedNpc: "huHntTrainer1",
	BakedNpcSound: NpcSoundIDs.HumanMaleWarrior,
	EquipRanged: 19107,
});

buildNpc({
	Tag: 'hu-hnt-pet-trainer-goldshire',
	CopyFrom: 3306,

	Name: 'Chiara Hastings',
	Subname: 'Pet Trainer',
	Spawn: {map:0,x:-9466.536133,y:43.153828,z:56.708179,o:1.989742},
	Faction: FactionTemplateValues.STORMWIND,

	BakedNpc: "huHntTrainer2",
	BakedNpcSound: NpcSoundIDs.HumanFemaleStandard,
});

buildNpc({
	Tag: 'hu-hnt-pet-trainer-sw',
	CopyFrom: 10090,

	Name: 'Alma Deering',
	Subname: 'Pet Trainer',
	Spawn: {map:0,x:-8716.582031,y:323.337708,z:101.019226,o:1.594099},
	Faction: FactionTemplateValues.STORMWIND,

	BakedNpc: "hmHntAlma",
	BakedNpcSound: NpcSoundIDs.HumanFemaleOfficial,
});

buildNpc({
	Tag: 'hu-hnt-trainer-sw-wulf',

	Name: 'Wulf Hansreim',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:-8697.335938,y:299.945618,z:101.020561,o:1.224722},
	Faction: FactionTemplateValues.STORMWIND,
	Level: 60,
	Type: CreatureType.HUMANOID,
	Civilian: true,
	Class: UnitClass.WARRIOR,
	AnimateSwim: true,

	TrainerClassMask: ClassMask.HUNTER,
	TrainerID: TrainerID.Hunter,
	TrainerGossipClass: "If you're here to be trained in the tactics and strategy of hunting, you've come to the right place.  Keep on your toes and stay alive out there.",
	TrainerGossipNotClass: "I cannot help you with your training.  Seek out a $c trainer.",

	GuardGossipOrigin: 401,
	GuardGossipOption: 'Hunter',
	GuardGossipPoiName: 'Stormwind Barracks',
	GuardGossipText: "Looking to train as a hunter?  You'll find Wulf Hansreim at the Barracks in Old Town, he trains many of the skilled hunters in the Stormwind army.  Or, I suppose you could look for Thorfin Stoneshield in the Dwarven District if you'd prefer a bit of dwarven hunting expertise.",

	BakedNpc: "hmHntWulf",
	BakedNpcSound: NpcSoundIDs.HumanMaleOfficial,
	EquipMainHand: 3201,
	EquipRanged: 22347,
	AddonBytes2: AddonBytes2IDs.RANGED,
});

buildNpc({
	Tag: 'hu-hnt-trainer-sw-sarisse',

	Name: 'Sarisse Jume',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:-8702.943359,y:305.815277,z:101.020561,o:0.100091},
	Faction: FactionTemplateValues.STORMWIND,
	Level: 40,
	Type: CreatureType.HUMANOID,
	Civilian: true,
	Class: UnitClass.WARRIOR,
	AnimateSwim: true,

	TrainerClassMask: ClassMask.HUNTER,
	TrainerID: TrainerID.Hunter,
	TrainerGossipClass: "If you're here to be trained in the tactics and strategy of hunting, you've come to the right place.",
	TrainerGossipNotClass: "I cannot help you with your training.  Seek out a $c trainer.",

	BakedNpc: "hmHntSarisse",
	BakedNpcSound: NpcSoundIDs.HumanFemaleWarrior,
	EquipMainHand: 13055,
	EquipRanged: 15324,
	AddonBytes2: AddonBytes2IDs.RANGED,
});

buildNpc({
	Tag: 'hu-hnt-trainer-sw-tyrathan',

	Name: 'Tyrathan Khort',
	Subname: 'Hunter Trainer',
	Spawn: {map:0,x:-8722.803711,y:362.828583,z:101.019226,o:4.487875},
	Faction: FactionTemplateValues.STORMWIND,
	Level: 50,
	Type: CreatureType.HUMANOID,
	Civilian: true,
	Class: UnitClass.WARRIOR,
	AnimateSwim: true,

	TrainerClassMask: ClassMask.HUNTER,
	TrainerID: TrainerID.Hunter,
	TrainerGossipClass: "In the jungles of Stranglethorn I learned how to survive.  If you're looking for hunting training, I'd be happy to pass on my experiences.",
	TrainerGossipNotClass: "I cannot help you with your training.  Seek out a $c trainer.",

	BakedNpc: "hmHntTyrathan",
	BakedNpcSound: NpcSoundIDs.HumanMaleStandard,
	EquipMainHand: 1937,
	EquipOffHand: 1937,
	EquipRanged: 13023,
	AddonBytes2: AddonBytes2IDs.RANGED,
});

buildNpc({
	Tag: 'hu-hnt-stable-trainer-sw',
	CopyFrom: 9984,

	Name: 'Karin',
	Subname: 'Stable Master',
	Spawn: {map:0,x:-8733.974609,y:354.205200,z:101.019226,o:6.119526},
	Faction: FactionTemplateValues.STORMWIND,

	BakedNpc: "hmHntKarin",
	BakedNpcSound: NpcSoundIDs.HumanFemaleStandard,
});
