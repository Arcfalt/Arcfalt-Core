import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs, AddonBytes2IDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildItem } from "../../../itemBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.ROGUE,
	Race: RaceIDs.DRAENEI,
	EquipIdList: [buildItem({
		Tag: 'dr-rog-gear-chest-starter',
		CopyFrom: 49, DisplayId: 36133,
	}).ID, buildItem({
		Tag: 'dr-rog-gear-legs-starter',
		CopyFrom: 48, DisplayId: 36134,
	}).ID, buildItem({
		Tag: 'dr-rog-gear-feet-starter',
		CopyFrom: 47, DisplayId: 36135,
	}).ID, 28979, 2092, 50055],
	EquipSkills: [std.EquipSkills.Daggers],
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.ROGUE,
	ClassText: "We rangari are the forward scouts of the draenei.  No matter the planet, we'll find a way for our people to thrive.",
	NotClassText: "Stay safe, $c, there's a whole world out there waiting for you.",
}});

const LEADER_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.ROGUE,
	ClassText: "As Rangari Prime of the Exarch Council, I greet you, tracker.$B$BIt is not a new thing for us to have to quickly adapt to a new world, but this time feels different.  We're here to stay, and the rangari will do our part to scout out this new home and make sure we find our place within it.$B$BKnow that wherever the draenei tread, you will always have a friend.",
	NotClassText: "As Rangari Prime of the Exarch Council, I greet you.$B$BIt is not a new thing for us to have to quickly adapt to a new world, but this time feels different.  We're here to stay, and the rangari will do our part to scout out this new home and make sure we find our place within it.$B$BKnow that wherever the draenei tread, you will always have a friend.",
}});

buildNpc({
	Tag: 'dr-rog-trainer-start',
	CopyFrom: 915,
	Level: 6,

	Name: 'Rangari Mesera',
	Subname: 'Rogue Trainer',
	Spawn: {map:530,x:-4093.995117,y:-13746.781250,z:74.706398,o:3.677993},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.RogueLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "drRogStart",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleStandard,
	EquipMainHand: 29457,
	EquipOffHand: 29457,
});

buildNpc({
	Tag: 'dr-rog-trainer-mid',
	CopyFrom: 917,
	Level: 12,

	Name: 'Rangari Phelaa',
	Subname: 'Rogue Trainer',
	Spawn: {map:530,x:-4163.510742,y:-12536.022461,z:44.876472,o:1.707474},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Rogue,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 8137,
	GuardGossipOption: 'Rogue',
	GuardGossipPoiName: 'Rangari Phelaa',
	GuardGossipText: "Phelaa trains new scouts in the eastern portion of Azure Watch.  If training in the ways of the rangari are what you're looking for, she can help you find the path.",

	BakedNpc: "drRogMid",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleMilitary,
	EquipMainHand: 25104,
	EquipOffHand: 25104,
});

std.CreatureTemplates.load(17480).Spawns.getIndex(0).Position.set({map:530,x:-4166.207520,y:-12536.660156,z:44.831833,o:1.705510});

buildNpc({
	Tag: 'dr-rog-trainer-main',
	CopyFrom: 5165,

	Name: 'Exarch Naielle',
	Subname: 'Rogue Trainer',
	Spawn: {map:530,x:-4173.800293,y:-11574.903320,z:-124.728371,o:3.390952},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Rogue,
	Gossip: LEADER_GOSSIP,

	GuardGossipOrigin: 7787,
	GuardGossipOption: 'Rogue',
	GuardGossipPoiName: 'Exodar, Rogue Trainers',
	GuardGossipText: "Ah, you are looking for the rangari, are you not?  You can find Exarch Naielle on the second level of the Trader's Tier, near the Hunters' Sanctum.",

	BakedNpc: "drRogNaielle",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleNoble,
	EquipMainHand: 19965,
	EquipOffHand: 29391,
});

buildNpc({
	Tag: 'dr-rog-trainer-0',
	CopyFrom: 5166,

	Name: "Rangari Inaret",
	Subname: 'Rogue Trainer',
	Spawn: {map:530,x:-4185.386230,y:-11560.951172,z:-125.583900,o:4.464983},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Rogue,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "drRogExo2",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleMilitary,
	EquipMainHand: 6831,
	EquipOffHand: 6831,
});

buildNpc({
	Tag: 'dr-rog-trainer-1',
	CopyFrom: 5167,

	Name: 'Rangari Parula',
	Subname: 'Rogue Trainer',
	Spawn: {map:530,x:-4186.987305,y:-11567.764648,z:-125.626869,o:1.445126},
	Faction: FactionTemplateValues.EXODAR,

	TrainerID: TrainerID.Rogue,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "drRogExo3",
	BakedNpcSound: NpcSoundIDs.DraeneiFemaleStandard,
	EquipMainHand: 33267,
	EquipOffHand: 33267,
});
