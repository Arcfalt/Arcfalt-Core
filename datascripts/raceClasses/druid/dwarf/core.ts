import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs, AddonBytes1IDs } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_DRU_START_CHEST, A_DRU_START_SHIRT } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.DWARF,
	EquipIdList: [35, A_DRU_START_CHEST.ID, A_DRU_START_SHIRT.ID, 6124],
})

buildNpc({
	Tag: 'dw-dru-trainer-coldridge',
	CopyFrom: 3597,

	Name: 'Rathasu',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-6140.176270,y:337.123871,z:403.216736,o:3.456859},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.DruidLow,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BThough druidism has traditionally not been a common practice here in your lands, it is my pleasure to spread the teachings of Cenarius to those who will listen.  Our immortality is lost, and in this new age, it is my belief that the younger races should inherit our charge.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  Though you are not here to learn of the druidic ways, I grant you walk with the blessing of nature.",

	BakedNpc: "dwDruTrainer1",
	BakedNpcSound: NpcSoundIDs.NightElfMaleOfficial,
	EquipMainHand: 2132,
	AddonBytes1: AddonBytes1IDs.Kneel,
});

buildNpc({
	Tag: 'dw-dru-trainer-kharanos',
	CopyFrom: 3602,

	Name: 'Faloris',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-5586.030762,y:-403.378265,z:424.349976,o:2.429471},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BThough druidism has traditionally not been a common practice here in your lands, it is my pleasure to spread the teachings of Cenarius to those who will listen.  Our immortality is lost, and in this new age, it is my belief that the younger races should inherit our charge.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  Though you are not here to learn of the druidic ways, I grant you walk with the blessing of nature.",

	GuardGossipOrigin: 3545,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Faloris',
	GuardGossipText: "Ach, a Druid?  Yer in luck, there's been a friendly fellow from across the sea come to teach us 'younger races' about nature...  If ye ask me, I think we already get along jus' fine, but if you wanna hear him out, ye'll find him outside around the back of the smithy in Kharanos.",

	BakedNpc: "dwDruTrainer2",
	BakedNpcSound: NpcSoundIDs.NightElfMaleOfficial,
	EquipMainHand: 5187,
});

buildNpc({
	Tag: 'dw-dru-trainer-if1',
	CopyFrom: 5505,

	Name: 'Marrannul Stagflower',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-4697.833984,y:-1176.038818,z:505.269440,o:3.839701},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BThough druidism has traditionally not been a common practice here in your lands, it is my pleasure to spread the teachings of Cenarius to those who will listen.  Our immortality is lost, and in this new age, it is my belief that the younger races should inherit our charge.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  Though you are not here to learn of the druidic ways, I grant you walk with the blessing of nature.",

	GuardGossipOrigin: 2144,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Hall of Explorers',
	GuardGossipText: "Lucky fer ye, the League of Explorers recently called in some druids from Darnassus to assist with a wee little project.  Ye can find them lodging in the Hall of Explorers, hopefully they can assist ye if they aren't too busy!",

	BakedNpc: "ifDru1",
	BakedNpcSound: NpcSoundIDs.NightElfMaleOfficial,
	EquipMainHand: 3262,
	EquipOffHand: 2410,
});

buildNpc({
	Tag: 'dw-dru-trainer-if2',
	CopyFrom: 5506,

	Name: 'Thelealaes',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-4702.896973,y:-1171.727295,z:505.269440,o:4.827338},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BThough druidism has traditionally not been a common practice here in your lands, it is my pleasure to spread the teachings of Cenarius to those who will listen.  Our immortality is lost, and in this new age, it is my belief that the younger races should inherit our charge.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  Though you are not here to learn of the druidic ways, I grant you walk with the blessing of nature.",

	BakedNpc: "ifDru2",
	BakedNpcSound: NpcSoundIDs.NightElfMaleWarrior,
	EquipMainHand: 20660,
});

buildNpc({
	Tag: 'dw-dru-trainer-if3',
	CopyFrom: 5504,

	Name: 'Alin Lunarage',
	Subname: 'Druid Trainer',
	Spawn: {map:0,x:-4697.470703,y:-1179.420410,z:511.936920,o:2.518273},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BThough druidism has traditionally not been a common practice here in your lands, it is my pleasure to spread the teachings of Cenarius to those who will listen.  Our immortality is lost, and in this new age, it is my belief that the younger races should inherit our charge.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  Though you are not here to learn of the druidic ways, I grant you walk with the blessing of nature.",

	BakedNpc: "ifDru3",
	BakedNpcSound: NpcSoundIDs.NightElfMaleStandard,
	EquipMainHand: 29911,
});
