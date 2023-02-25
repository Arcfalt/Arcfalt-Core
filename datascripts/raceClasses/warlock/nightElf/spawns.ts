import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { MODNAME } from "../../../datascripts";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";

// Shadowglen Trainer
export const NE_WLK_TRAINER_START = buildNpc({
	Tag: 'ne-wlk-trainer-shadowglen',
	CopyFrom: 459,

	Name: 'Sebrul',
	Subname: 'Warlock Trainer',
	Spawn: {map:1,x:10464.696289,y:770.547852,z:1316.446899,o:3.599303},
	Faction: FactionTemplateValues.DARNASSUS,
	Model: 10035,

	TrainerClassMask: ClassMask.WARLOCK,
	TrainerID: TrainerID.WarlockLow,
	TrainerGossipClass: "Ahh, welcome, welcome...  Always good to see fresh faces exploring the dark.  I look forward to seeing you in action.",
	TrainerGossipNotClass: "Move along, friend...  You don't want to get caught up in anything messy now, do you?",
});

// Dolanaar Trainer
export const NE_WLK_TRAINER_DOLANAAR = buildNpc({
	Tag: 'ne-wlk-trainer-dolanaar',
	CopyFrom: 906,

	Name: 'Merellin Blackscribe',
	Subname: 'Warlock Trainer',
	Spawn: {map:1,x:9803.881836,y:977.884949,z:1303.583008,o:1.895049},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.WARLOCK,
	TrainerID: TrainerID.Warlock,
	TrainerGossipClass: "The arcane only corrupts those who are weak.  Don't let anyone tell you what not to do with your strengths.",
	TrainerGossipNotClass: "The shadows do not embrace you, $C.  You would do well to forget you saw me here. Begone!",

	GuardGossipOrigin: 3564,
	GuardGossipOption: 'Warlock',
	GuardGossipPoiName: 'Merellin Blackscribe',
	GuardGossipText: "A warlock?  Here?  Are you on a hunt?  Actually, now that you mention it, there were strange reports of dark magic being practiced behind the inn, but no evidence has been turned up as of now.  If you're looking into the matter, you could start there?",
	
	BakedNpc: "neWlkTrainer01",
	BakedNpcSound: NpcSoundIDs.NightElfFemaleStandard,
	EquipMainHand: 9513,
});

// Main Darnassus Trainer
export const NE_WLK_DARNASSUS_MAIN = buildNpc({
	Tag: 'ne-wlk-trainer-darnassus-main',
	CopyFrom: 5171,

	Name: 'Eraelleas Rainstalker',
	Subname: 'Warlock Trainer',
	Spawn: {map:1,x:10099.524414,y:2693.028809,z:1316.837036,o:5.527245},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.WARLOCK,
	TrainerID: TrainerID.Warlock,
	TrainerGossipClass: "The arcane only corrupts those who are weak.  My people may not accept it, but I will not let their arrogance blind us.",
	TrainerGossipNotClass: "The shadows do not embrace you, $C.  You would do well to forget you saw me here. Begone!",

	GuardGossipOrigin: 2343,
	GuardGossipOption: 'Warlock',
	GuardGossipPoiName: 'Darnassus Warlock Trainer',
	GuardGossipText: "There have been worrying reports of unauthorized arcane fluctuations behind the Cenarion Enclave as of late.  If you are on the hunt for dark magic, you could begin your search there.  Be warned, such forces are not to be taken lightly.",

	BakedNpc: "neWlkTrainer02",
	BakedNpcSound: NpcSoundIDs.NightElfMaleWarrior,
	EquipMainHand: 5201,
});

// Side Darnassus Trainer
export const NE_WLK_DARNASSUS_SATYR = buildNpc({
	Tag: 'ne-wlk-trainer-darnassus-satyr',
	CopyFrom: 5172,

	Name: 'Dexxethix',
	Subname: 'Warlock Trainer',
	Spawn: {map:1,x:10097.639648,y:2689.960938,z:1317.334106,o:0.027006},
	Faction: FactionTemplateValues.DARNASSUS,
	Model: 10035,

	TrainerClassMask: ClassMask.WARLOCK,
	TrainerID: TrainerID.Warlock,
	TrainerGossipClass: "Not all of us are so misguided as to join the Burning Legion.  The secrets hiding in the dark can be a gift to us all...",
	TrainerGossipNotClass: "Not all of us are so misguided as to join the Burning Legion!  I am not your enemy, but you would do well to leave me be.",
});

// Darnassus Breadcrumb Quest Offerer
export const NE_WLK_DARNASSUS_SIDEKICK = buildNpc({
	Tag: 'ne-wlk-trainer-darnassus-sidekick',
	CopyFrom: 6382,

	Name: 'Veneta Shadowfeather',
	Spawn: {map:1,x:10099.381836,y:2687.410400,z:1317.588257,o:6.206592},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.WARLOCK,
	TrainerID: TrainerID.Warlock,
	TrainerGossipClass: "The arcane only corrupts those who are weak.  My people may not accept it, but I will not let their arrogance blind us.",
	TrainerGossipNotClass: "The shadows do not embrace you, $C.  You would do well to forget you saw me here. Begone!",
	
	BakedNpc: "neWlkTrainer03",
	BakedNpcSound: NpcSoundIDs.NightElfFemaleStandard,
	EquipMainHand: 6831,
	EquipOffHand: 4984,
});

// Darnassus cauldron
std.GameObjectTemplates.SpellFocus.load(20877).Spawns.add(MODNAME, "ne-wlk-trainer-cauldron", {map:1,x:10100.447266,y:2689.913086,z:1317.223999,o:6.201255});