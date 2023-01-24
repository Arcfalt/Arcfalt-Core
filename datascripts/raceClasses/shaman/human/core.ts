import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { CreatureType } from "wow/wotlk/std/Creature/CreatureType";
import { UnitClass } from "wow/wotlk/std/Creature/UnitClass";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { AddonBytes1IDs, NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_SHA_START_SHIRT, A_SHA_START_LEGS } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.SHAMAN,
	Race: RaceIDs.HUMAN,
	EquipIdList: [36, 2362, A_SHA_START_SHIRT.ID, A_SHA_START_LEGS.ID],
})

buildNpc({
	Tag: 'hu-sha-trainer-northshire',
	CopyFrom: 17089,

	Name: 'Wenceslas Fulton',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:-8907.079102,y:-211.221191,z:82.120628,o:2.909391},
	Faction: FactionTemplateValues.STORMWIND,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.ShamanLow,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  Have you come to deepen your connection to the spirit that surrounds us?",
	TrainerGossipNotClass: "Let spirit grant you strength, $c.",

	BakedNpc: "huShaTrainer0",
	BakedNpcSound: NpcSoundIDs.HumanMaleStandard,
	EquipMainHand: 5778,
});

buildNpc({
	Tag: 'hu-sha-trainer-goldshire',
	CopyFrom: 17212,

	Name: 'Engelberthe Graeme',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:-9482.705078,y:35.827187,z:57.813786,o:6.142537},
	Faction: FactionTemplateValues.STORMWIND,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  Have you come to deepen your connection to the spirit that surrounds us?",
	TrainerGossipNotClass: "Let spirit grant you strength, $c.",

	GuardGossipOrigin: 3519,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Engelberthe Graeme',
	GuardGossipText: "A Shaman?  Perhaps you could try looking for Engelberthe, she's one of those witch doctors from Stranglethorn.  You'll find her tending to the flowers outside Lion's Pride Inn.",

	BakedNpc: "huShaTrainer1",
	BakedNpcSound: NpcSoundIDs.HumanFemaleStandard,
	AddonBytes1: AddonBytes1IDs.Kneel,
});

buildNpc({
	Tag: 'hu-sha-trainer-stormwind-1',

	Name: 'Uland Bunce',
	Subname: 'Shaman Trainer',
	Level: 60,
	Type: CreatureType.HUMANOID,
	Spawn: {map:0,x:-8771.313477,y:999.559143,z:104.944695,o:1.110510},
	Faction: FactionTemplateValues.STORMWIND,
	Civilian: true,
	Class: UnitClass.PALADIN,
	AnimateSwim: true,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  Have you come to deepen your connection to the spirit that surrounds us?",
	TrainerGossipNotClass: "Let spirit grant you strength, $c.",

	GuardGossipOrigin: 401,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'The Park',
	GuardGossipText: "A Shaman?  I think a few witch doctors from Stranglethorn recently moved into the park and struck it up with one of those Wildhammer dwarves...  Perhaps you could go see if that's what you're looking for?",

	BakedNpc: "huShaTrainer2",
	BakedNpcSound: NpcSoundIDs.HumanMaleWarrior,
	EquipMainHand: 15903,
	EquipOffHand: 15907,
});

buildNpc({
	Tag: 'hu-sha-trainer-stormwind-2',

	Name: 'Orrahm Hardgrip',
	Subname: 'Shaman Trainer',
	Level: 40,
	Type: CreatureType.HUMANOID,
	Spawn: {map:0,x:-8776.947266,y:1008.719971,z:104.944695,o:5.186735},
	Faction: FactionTemplateValues.STORMWIND,
	Civilian: true,
	Class: UnitClass.PALADIN,
	AnimateSwim: true,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Welcome, fellow friend of the stone.  Spirits of land and earth keep ye safe.",
	TrainerGossipNotClass: "Ye may not be attuned to the spirits of the land, $c, but stone keep ye safe.",

	BakedNpc: "huShaTrainer3",
	BakedNpcSound: NpcSoundIDs.DwarfMaleGrim,
	EquipMainHand: 7954,
	EquipOffHand: 3763,
});

buildNpc({
	Tag: 'hu-sha-trainer-stormwind-3',

	Name: 'Thery Tattersall',
	Subname: 'Shaman Trainer',
	Level: 50,
	Type: CreatureType.HUMANOID,
	Spawn: {map:0,x:-8780.058594,y:999.125427,z:104.946526,o:1.047689},
	Faction: FactionTemplateValues.STORMWIND,
	Civilian: true,
	Class: UnitClass.PALADIN,
	AnimateSwim: true,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  Have you come to deepen your connection to the spirit that surrounds us?",
	TrainerGossipNotClass: "Let spirit grant you strength, $c.",

	BakedNpc: "huShaTrainer4",
	BakedNpcSound: NpcSoundIDs.HumanFemaleOfficial,
	EquipMainHand: 6505,
});
