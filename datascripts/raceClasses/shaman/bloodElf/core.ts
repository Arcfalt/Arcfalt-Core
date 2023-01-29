import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs } from "../../../commonIds";
import { buildItem } from "../../../util/itemBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.SHAMAN,
	Race: RaceIDs.BLOODELF,
	EquipIdList: [buildItem({
		Tag: 'be-sha-gear-chest-starter',
		CopyFrom: 20901, DisplayId: 33380,
		Name: "Spirited Shirt",
	}).ID, buildItem({
		Tag: 'be-sha-gear-legs-starter',
		CopyFrom: 20899, DisplayId: 33381,
		Name: "Spirited Pants",
	}).ID, buildItem({
		Tag: 'be-sha-gear-feet-starter',
		CopyFrom: 20900, DisplayId: 33350,
		Name: "Spirited Boots",
		DisplayTextures: [
			{i: 6, value: "Leather_Blood_A_02Red_Boot_LL"},
			{i: 7, value: "Leather_Blood_A_02Red_Boot_FO"},
		],
	}).ID, 36, 2362]
})

buildNpc({
	Tag: 'be-sha-trainer-start',
	CopyFrom: 3062,

	Name: "Hansendra Goldenflare",
	Subname: 'Shaman Trainer',
	Spawn: {map:530,x:10336.679688,y:-6416.905273,z:38.531380,o:0.271821},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Come to learn more about binding the elements to your will?  There is power all around us, and it is not only for the magisters to use!",
	TrainerGossipNotClass: "Sorry, $c, but you don't have the skills needed to bring the elements to heel.",

	BakedNpc: "beShaStart",
	BakedNpcSound: NpcSoundIDs.BloodElfFemaleNoble,
	EquipMainHand: 20853,
});

buildNpc({
	Tag: 'be-sha-trainer-mid',
	CopyFrom: 3066,

	Name: 'Vyntor Mirthreaver',
	Subname: 'Shaman Trainer',
	Spawn: {map:530,x:9461.666016,y:-6848.895996,z:28.378567,o:5.737963},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Come to learn more about binding the elements to your will?  There is power all around us, and it is not only for the magisters to use!",
	TrainerGossipNotClass: "Sorry, $c, but you don't have the skills needed to bring the elements to heel.",

	GuardGossipOrigin: 8196,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Falconwing Square, Shaman Trainer',
	GuardGossipText: "Looking to harness the power of the land itself?  Some see it as a bit crude these days, but I hear Vyntor Mirthreaver is still teaching the practice.  You can find him on the second floor of Delaniel's inn.",

	BakedNpc: "beShaMid",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleStandard,
	EquipMainHand: 20851,
	EquipOffHand: 20841,
});

buildNpc({
	Tag: 'be-sha-trainer-s1',
	CopyFrom: 3344,

	Name: 'Sedada Autumnsun',
	Subname: 'Shaman Trainer',
	Spawn: {map:530,x:9930.378906,y:-7047.987305,z:47.715302,o:5.258304},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Come to learn more about binding the elements to your will?  There is power all around us, and it is not only for the magisters to use!",
	TrainerGossipNotClass: "Sorry, $c, but you don't have the skills needed to bring the elements to heel.",

	GuardGossipOrigin: 7649,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Silvermoon City, Shaman Trainer',
	GuardGossipText: "Binding the elements is a bit crude for my tastes, but it's hard to deny it still gets results.  Look for Sedada Autumnsun at the library within the Sunfury Spire.",

	BakedNpc: "beSha1",
	BakedNpcSound: NpcSoundIDs.BloodElfFemaleNoble,
});

buildNpc({
	Tag: 'be-sha-trainer-s2',
	CopyFrom: 13417,

	Name: 'Alaath Duskshine',
	Subname: 'Shaman Trainer',
	Spawn: {map:530,x:9925.242188,y:-7067.852539,z:47.715302,o:3.927071},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Come to learn more about binding the elements to your will?  There is power all around us, and it is not only for the magisters to use!",
	TrainerGossipNotClass: "Sorry, $c, but you don't have the skills needed to bring the elements to heel.",
	Emote: 69,

	BakedNpc: "beSha2",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleNoble,
});

buildNpc({
	Tag: 'be-sha-trainer-s3',
	CopyFrom: 3403,

	Name: 'Faralanne Soulshine',
	Subname: 'Shaman Trainer',
	Spawn: {map:530,x:9948.627930,y:-7047.850098,z:47.716087,o:3.907446},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Come to learn more about binding the elements to your will?  There is power all around us, and it is not only for the magisters to use!",
	TrainerGossipNotClass: "Sorry, $c, but you don't have the skills needed to bring the elements to heel.",

	BakedNpc: "beSha3",
	BakedNpcSound: NpcSoundIDs.BloodElfFemaleStandard,
});
