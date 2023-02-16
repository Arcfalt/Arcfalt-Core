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
	Class: ClassIDs.SHAMAN,
	Race: RaceIDs.UNDEAD,
	EquipIdList: [buildItem({
		Tag: 'ud-sha-gear-chest-starter',
		CopyFrom: 154, DisplayId: 10077,
		Name: "Primitive Jacket",
	}).ID, buildItem({
		Tag: 'ud-sha-gear-legs-starter',
		CopyFrom: 153, DisplayId: 10079,
		Name: "Primitive Pants",
	}).ID, buildItem({
		Tag: 'ud-sha-gear-feet-starter',
		CopyFrom: 55, DisplayId: 16802,
		Name: "Primitive Boots",
	}).ID, 36, 2362]
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.SHAMAN,
	ClassText: "The spirits have guided you to me.  This land calls out for aid, the elements are in decay, the spirits cry in anger and despair...$B$BIt will take time, but we must do what we can.  Have you come to learn?",
	NotClassText: "May the spirits be with you, $c.",
}});

buildNpc({
	Tag: 'ud-sha-trainer-start',
	CopyFrom: 3157,

	Name: 'Trokdi Barrenstorm',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:1857.051270,y:1568.240967,z:99.080490,o:1.213090},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.ShamanLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "udShaTrainer0",
	BakedNpcSound: NpcSoundIDs.OrcMaleStandard,
	EquipMainHand: 3443,
});

buildNpc({
	Tag: 'ud-sha-trainer-mid',
	CopyFrom: 3173,

	Name: 'Sahtu Sourheart',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:2368.704834,y:438.374390,z:33.481468,o:4.579060},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Shaman,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3354,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Sahtu Sourheart',
	GuardGossipText: "You'll find Sahtu Sourheart in the graveyard, supposedly talking to the spirits of the dead.",

	BakedNpc: "udShaTrainer1",
	BakedNpcSound: NpcSoundIDs.OrcFemaleShaman,
	EquipMainHand: 2844,
});

buildNpc({
	Tag: 'ud-sha-trainer-main',
	CopyFrom: 3344,

	Name: 'Mogg Clansmoke',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:1548.031372,y:332.955963,z:-62.138470,o:0.471114},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Shaman,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipPoiName: "Undercity Shaman Trainers",
	InjectGossip: [{
		Target: ABOM_GOSSIP_CLASS_TRAINERS,
		Option: "Shaman",
		Gossip: "Shamans come visit to read some books.  Learn about spirits.  We hope they in high spirits!  You find them on inner ring of The Apothecarium.",
	}, {
		Target: 10768,
		Option: "Shaman",
		Gossip: "You'll find some shamans on inner ring of The Apothecarium, in the small library there.  Looking for ways to help the spirits here.  Hah!  Going to be a lot of spirits to help here, I'd say.",
	}],

	BakedNpc: "udShaTrainer3",
	BakedNpcSound: NpcSoundIDs.OrcMaleShady,
	EquipMainHand: 17743,
	AddonBytes2: AddonBytes2IDs.UNARMED,
});

buildNpc({
	Tag: 'ud-sha-trainer-0',
	CopyFrom: 13417,

	Name: "Gin'zacei",
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:1558.131104,y:331.948395,z:-62.138470,o:2.659760},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Shaman,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "udShaTrainer4",
	BakedNpcSound: NpcSoundIDs.TrollFemaleLaidBack,
});

buildNpc({
	Tag: 'ud-sha-trainer-1',
	CopyFrom: 3403,

	Name: 'Numees Fourhoof',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:1552.876953,y:327.455261,z:-62.138470,o:4.411201},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerID: TrainerID.Shaman,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "udShaTrainer5",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleShaman,
});
