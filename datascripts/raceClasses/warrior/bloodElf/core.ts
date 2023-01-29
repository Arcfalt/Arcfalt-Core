import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs } from "../../../commonIds";
import { buildItem } from "../../../util/itemBuilder";
import { appendNpc, buildNpc } from "../../../npcBuilder";
import { ARCANE_TORRENT_RAGE, buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.WARRIOR,
	Race: RaceIDs.BLOODELF,
	EquipIdList: [23346, buildItem({
		Tag: 'be-war-gear-shirt-starter',
		CopyFrom: 24143, DisplayId: 33346,
		Name: "Recruit's Shirt",
	}).ID, buildItem({
		Tag: 'be-war-gear-legs-starter',
		CopyFrom: 24145, DisplayId: 33359,
		Name: "Recruit's Pants",
	}).ID, buildItem({
		Tag: 'be-war-gear-feet-starter',
		CopyFrom: 24146, DisplayId: 33348,
		Name: "Recruit's Boots",
	}).ID],
})

buildNpc({
	Tag: 'be-war-trainer-start',
	CopyFrom: 3059,

	Name: "Delios Silverblade",
	Subname: 'Warrior Trainer',
	Spawn: {map:530,x:10381.597656,y:-6399.277344,z:38.531258,o:3.637249},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.WARRIOR,
	TrainerID: TrainerID.Warrior,
	TrainerGossipClass: "Come to train in the arts of war?  So many have been lured by their precious new light, but there are those of us who still remember our own strength.  Never forsake mastery over your body, warrior.",
	TrainerGossipNotClass: "I train only warriors, $c.  You'll have to look elsewhere.",

	BakedNpc: "beWarStart",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleStandard,
	EquipMainHand: 20977,
	EquipOffHand: 20841,
});

appendNpc(15280, {
	BakedNpc: "bePldStartReplacer",
})

buildNpc({
	Tag: 'be-war-trainer-mid',
	CopyFrom: 3063,

	Name: 'Lothan Silverblade',
	Subname: 'Warrior Trainer',
	Spawn: {map:530,x:9520.937500,y:-6865.336914,z:18.750872,o:5.326005},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.WARRIOR,
	TrainerID: TrainerID.Warrior,
	TrainerGossipClass: "Come to train in the arts of war?  So many have been lured by their precious new light, but there are those of us who still remember our own strength.  Never forsake mastery over your body, warrior.",
	TrainerGossipNotClass: "I train only warriors, $c.  You'll have to look elsewhere.",

	GuardGossipOrigin: 8196,
	GuardGossipOption: 'Warrior',
	GuardGossipPoiName: 'Falconwing Square, Warrior Trainer',
	GuardGossipText: "I'd say you'd be better off joining the Blood Knights, but if you insist on the warrior's path, you can seek Lothan Silverblade within the northeast building of the square.",

	BakedNpc: "beWarMid",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleMilitary,
	EquipMainHand: 20850,
	EquipOffHand: 20911,
});

buildNpc({
	Tag: 'be-war-trainer-s1',
	CopyFrom: 4593,

	Name: 'Alsudar the Bastion',
	Subname: 'Warrior Trainer',
	Spawn: {map:530,x:9850.095703,y:-7384.210449,z:18.608770,o:4.711055},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.WARRIOR,
	TrainerID: TrainerID.Warrior,
	TrainerGossipClass: "We were evicted from our training hall to make way for the new order...  The Blood Knights.  I do not resent them, but our people are making a grave mistake if they think all front line forces should be unified to yet another new power source.$b$bI will not let that happen under my watch.",
	TrainerGossipNotClass: "I train only warriors, $c.  You'll have to look elsewhere.",

	GuardGossipOrigin: 7649,
	GuardGossipOption: 'Warrior',
	GuardGossipPoiName: 'Silvermoon City, Warrior Trainer',
	GuardGossipText: "Hm.  I've a mind to simply point to towards joining the Blood Knights, but if you insist on training with a deprecated order, you could go looking for Alsudar the Bastion in Farstriders' Square.  I believe he and his few remaining loyalists watch over the training grounds there since their headquarters was repurposed.  Very quaint.",

	BakedNpc: "beWar3",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleMilitary,
	EquipMainHand: 28425,
	EquipOffHand: 34676,
});

buildNpc({
	Tag: 'be-war-trainer-s2',
	CopyFrom: 4594,

	Name: 'Sarithra',
	Subname: 'Warrior Trainer',
	Spawn: {map:530,x:9855.796875,y:-7382.424316,z:18.608770,o:2.545338},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.WARRIOR,
	TrainerID: TrainerID.Warrior,
	TrainerGossipClass: "Come to train in the arts of war?  So many have been lured by their precious new light, but there are those of us who still remember our own strength.  Never forsake mastery over your body, warrior.",
	TrainerGossipNotClass: "I train only warriors, $c.  You'll have to look elsewhere.",

	BakedNpc: "beWar2",
	BakedNpcSound: NpcSoundIDs.BloodElfFemaleMilitary,
	EquipMainHand: 20979,
	EquipOffHand: 20851,
});

buildNpc({
	Tag: 'be-war-trainer-s3',
	CopyFrom: 4595,

	Name: 'Beldis',
	Subname: 'Warrior Trainer',
	Spawn: {map:530,x:9843.940430,y:-7382.108887,z:18.608770,o:0.519022},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.WARRIOR,
	TrainerID: TrainerID.Warrior,
	TrainerGossipClass: "Come to train in the arts of war?  So many have been lured by their precious new light, but there are those of us who still remember our own strength.  Never forsake mastery over your body, warrior.",
	TrainerGossipNotClass: "I train only warriors, $c.  You'll have to look elsewhere.",

	BakedNpc: "beWar1",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleStandard,
	EquipMainHand: 34667,
	EquipOffHand: 25079,
});
