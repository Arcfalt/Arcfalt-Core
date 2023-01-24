import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { NpcSoundIDs, TrainerID } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";

// Shadowglen Trainer
export const NE_SHA_TRAINER_SHADOWGLEN = buildNpc({
	Tag: 'ne-sha-trainer-shadowglen',
	CopyFrom: 17089,

	Name: 'Hallomon Duskspirit',
	Subname: 'Shaman Trainer',
	Spawn: {map:1,x:10457.809570,y:835.046753,z:1380.938110,o:3.191704},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.ShamanLow,
	TrainerGossipClass: "Welcome, $Gbrother:sister;. If you are here for training, I would be happy to assist you.$B$BThough many of us used to be druids, slumbering for eternity within the barrow dens of old, the loss of our sacred immortality has shown us the need to rekindle our connection to the elements as well.",
	TrainerGossipNotClass: "The way of the shaman is not truly a new one. Many of us used to be druids, slumbering for eternity within the barrow dens of old, but with the loss of our sacred immortality, there are those of us who have begun to rekindle our direct connection to the elements themselves.",

	BakedNpc: "neShaTrainer01",
	BakedNpcSound: NpcSoundIDs.NightElfMaleWarrior,
	EquipMainHand: 3262,
	EquipOffHand: 3654,
});

// Dolanaar Trainer
export const NE_SHA_TRAINER_DOLANAAR = buildNpc({
	Tag: 'ne-sha-trainer-dolanaar',
	CopyFrom: 17212,

	Name: 'Falnados Skybough',
	Subname: 'Shaman Trainer',
	Spawn: {map:1,x:9743.555664,y:968.361938,z:1293.467163,o:5.963892},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Ah, you seek training, do you not? The land calls out to us, and it brings me satisfaction to see more and more listen to it each passing day. Our immortality once blinded us from an important part of nature, but no more.$B$BIt would be my honor to teach you.",
	TrainerGossipNotClass: "The land has called to us for so long, and though we would tend to nature through the druidic ways, we did not listen for what else was trying to speak. The balance of nature includes all things, the elements and the spirits all around us should not be ignored.",

	GuardGossipOrigin: 3564,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Falnados Skybough',
	GuardGossipText: "You seek the aid of a Shaman? I know some have been expanding their skill set recently into that field. If you're looking to study the ancient ways of communing with the land, perhaps you could try asking Falnados at the Moonwell, just South of the Inn in Dolanaar.",

	BakedNpc: "neShaTrainer02",
	BakedNpcSound: NpcSoundIDs.NightElfMaleStandard,
	EquipMainHand: 15903,
	EquipOffHand: 15907,
});

// Darnassus Lower
export const NE_SHA_TRAINER_DARNASSUS_MAIN = buildNpc({
	Tag: 'ne-sha-trainer-darnassus',
	CopyFrom: 17219,

	Name: 'Ilylass Leafspirit',
	Subname: 'Shaman Trainer',
	Spawn: {map:1,x:10183.485352,y:2579.783691,z:1325.965088,o:3.930445},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Ah, you seek training, do you not? The land calls out to us, and it brings me satisfaction to see more and more listen to it each passing day. Our immortality once blinded us from an important part of nature, but no more.$B$BIt would be my honor to teach you.",
	TrainerGossipNotClass: "The land has called to us for so long, and though we would tend to nature through the druidic ways, we did not listen for what else was trying to speak. The balance of nature includes all things, the elements and the spirits all around us should not be ignored.",

	GuardGossipOrigin: 2343,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Darnassus Shaman Trainer',
	GuardGossipText: "You seek the aid of a Shaman? I know some have been expanding their skill set recently into that field. If you're looking to study the ancient ways of communing with the land, perhaps you could try inquiring at the Cenarion Enclave. While it may be led by our druids, the practice of shamanism is beginning there too.",
	
	BakedNpc: "neShaTrainer03",
	BakedNpcSound: NpcSoundIDs.NightElfMaleOfficial,
	EquipMainHand: 5256,
	EquipOffHand: 7463,
});

// Darnassus Upper
export const NE_SHA_TRAINER_DARNASSUS_UPPER = buildNpc({
	Tag: 'ne-sha-trainer-darnassus-upper',
	CopyFrom: 17519,
	Level: 50,

	Name: 'Radiir Dewtree',
	Subname: 'Shaman Trainer',
	Spawn: {map:1,x:10172.927734,y:2580.630859,z:1340.131348,o:1.961069},
	Faction: FactionTemplateValues.DARNASSUS,

	TrainerClassMask: ClassMask.SHAMAN,
	TrainerID: TrainerID.Shaman,
	TrainerGossipClass: "Ah, you seek training, do you not? The land calls out to us, and it brings me satisfaction to see more and more listen to it each passing day. Our immortality once blinded us from an important part of nature, but no more.$B$BIt would be my honor to teach you.",
	TrainerGossipNotClass: "The land has called to us for so long, and though we would tend to nature through the druidic ways, we did not listen for what else was trying to speak. The balance of nature includes all things, the elements and the spirits all around us should not be ignored.",

	BakedNpc: "neShaTrainer04",
	BakedNpcSound: NpcSoundIDs.NightElfMaleWarrior,
	EquipMainHand: 11603,
	EquipOffHand: 17738,
});
