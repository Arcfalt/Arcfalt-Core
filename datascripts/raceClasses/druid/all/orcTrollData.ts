import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";

buildNpc({
	Tag: 'or-dru-trainer-valley',
	CopyFrom: 3060,

	Name: 'Hotah Pyrewinds',
	Subname: 'Druid Trainer',
	Spawn: {map:1,x:-630.485291,y:-4213.135254,z:38.134029,o:0.980682},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.DruidLow,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BWe are the preservers of the balance, now and forever, as Cenarius has taught us.  Never forget this.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  His is the light of a beacon that shows the way for us, and we must do everything in our power to preserve that light.",

	BakedNpc: "orDruTrainer0",
	BakedNpcSound: NpcSoundIDs.TaurenMaleElder,
	EquipMainHand: 5778,
});

buildNpc({
	Tag: 'or-dru-trainer-razor',
	CopyFrom: 3064,

	Name: 'Guhu Grasstalon',
	Subname: 'Druid Trainer',
	Spawn: {map:1,x:305.094727,y:-4839.462402,z:10.524177,o:1.376491},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BWe are the preservers of the balance, now and forever, as Cenarius has taught us.  Never forget this.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  His is the light of a beacon that shows the way for us, and we must do everything in our power to preserve that light.",

	GuardGossipOrigin: 3283,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Guhu Grasstalon',
	GuardGossipText: "Seek out Guhu Grasstalon in the barracks on the east side of Razor Hill. She's from Thunder Bluff and can probably help you.",

	BakedNpc: "orDruTrainer1",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleStandard,
	EquipMainHand: 15444,
});

std.CreatureTemplates.load(3173).Spawns.getIndex(0).Position.set({map:1,x:309.057709,y:-4840.242188,z:10.524177,o:1.376491});

buildNpc({
	Tag: 'or-dru-trainer-orgrimmar',
	CopyFrom: 3033,

	Name: 'Isku Mistshout',
	Subname: 'Druid Trainer',
	Spawn: {map:1,x:1938.287109,y:-4211.719238,z:42.319805,o:3.065359},
	Faction: FactionTemplateValues.ORGRIMMAR,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, my $g brother : sister;.  If you are here to train, then I would be delighted to train you.$B$BWe are the preservers of the balance, now and forever, as Cenarius has taught us.  Never forget this.",
	TrainerGossipNotClass: "We work to preserve the balance as Cenarius teaches, $c.  His is the light of a beacon that shows the way for us, and we must do everything in our power to preserve that light.",

	GuardGossipOrigin: 1949,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Orgrimmar Druid Trainer',
	GuardGossipText: "Seek out Isku Mistshout in the entrance room of Thrall's Fortress in the Valley of Wisdom. He has come to discuss matters with our shaman, but I'm sure he can spare the time to assist you in your training.",

	BakedNpc: "orDruTrainer2",
	BakedNpcSound: NpcSoundIDs.TaurenMaleShaman,
	EquipMainHand: 17743,
});
