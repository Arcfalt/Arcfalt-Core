import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.MAGE,
	Race: RaceIDs.ORC,
	EquipCopyFromRace: RaceIDs.TROLL,
})

buildNpc({
	Tag: 'or-mag-trainer-razorhill',
	CopyFrom: 5880,

	Name: 'Ardargaz',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:329.592682,y:-4829.108398,z:10.524224,o:2.874641},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerClassMask: ClassMask.MAGE,
	TrainerID: TrainerID.Mage,
	TrainerGossipClass: "Greetings, $c. Are you here to learn of the hidden arts?",
	TrainerGossipNotClass: "Sorry, $c, I don't think you have what it takes to learn the secrets of magic.",

	GuardGossipOrigin: 3283,
	GuardGossipOption: 'Mage',
	GuardGossipPoiName: 'Ardargaz',
	GuardGossipText: "You can either look for Ardargaz in the barracks on the east side of Razor Hill, or speak to Un'Thuwa to the south in Sen'jin Village.",

	BakedNpc: "orMagTrainer1",
	BakedNpcSound: NpcSoundIDs.OrcMaleStandard,
	EquipMainHand: 2013,
})

std.CreatureTemplates.load(5943).Spawns.getIndex(0).Position.set({map:1,x:330.748596,y:-4824.881348,z:10.524224,o:2.874641});