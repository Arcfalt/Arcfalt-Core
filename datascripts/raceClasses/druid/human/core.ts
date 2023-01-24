import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_DRU_START_CHEST, A_DRU_START_SHIRT } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.HUMAN,
	EquipIdList: [35, A_DRU_START_CHEST.ID, A_DRU_START_SHIRT.ID, 6124],
})

buildNpc({
	Tag: 'hu-dru-trainer-northshire',
	CopyFrom: 3597,

	Name: 'Larrendil',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-8850.545898,y:-185.824783,z:81.943451,o:3.402238},
	Faction: FactionTemplateValues.STORMWIND,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.DruidLow,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BThough druidism has traditionally not been a common practice here in your lands, it is my pleasure to spread the teachings of Cenarius to those who will listen.  Our immortality is lost, and in this new age, it is my belief that the younger races should inherit our charge.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  Though you are not here to learn of the druidic ways, I grant you walk with the blessing of nature.",

	BakedNpc: "huDruTrainer0",
	BakedNpcSound: NpcSoundIDs.NightElfMaleOfficial,
	EquipMainHand: 5778,
});

buildNpc({
	Tag: 'hu-dru-trainer-goldshire',
	CopyFrom: 3602,

	Name: 'Esaelas',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-9476.366211,y:33.280605,z:63.821064,o:5.447446},
	Faction: FactionTemplateValues.STORMWIND,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BThough druidism has traditionally not been a common practice here in your lands, it is my pleasure to spread the teachings of Cenarius to those who will listen.  Our immortality is lost, and in this new age, it is my belief that the younger races should inherit our charge.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  Though you are not here to learn of the druidic ways, I grant you walk with the blessing of nature.",

	GuardGossipOrigin: 3519,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Esaelas',
	GuardGossipText: "Druids? Normally I'd direct you to Stormwind, but I believe there happens to be one of our elven allies, Esaelas, staying upstairs at Lion's Pride Inn. Perhaps you could see if he's willing to help you?",

	BakedNpc: "huDruTrainer1",
	BakedNpcSound: NpcSoundIDs.NightElfMaleOfficial,
	EquipMainHand: 15444,
});
