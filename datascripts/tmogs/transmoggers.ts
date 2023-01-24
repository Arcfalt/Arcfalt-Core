import { std } from "wow/wotlk";
import { CreatureType } from "wow/wotlk/std/Creature/CreatureType";
import { UnitClass } from "wow/wotlk/std/Creature/UnitClass";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { NpcSoundIDs, TRANSMOG_NPC_ID } from "../commonIds";
import { buildNpc, removeNpcSpawns } from "../npcBuilder";

// gossip
std.NPCText.load(65000).get(0).Text.clear().Text.set({enGB: "Beep.  Transmogrification lets you change the appearance of your equipment without changing its functionality, power, or statistics.  This will bind the item to you if it not already.$b$bIf your item is part of a set, you may notice that is no longer says it is part of the item set.  Fear not, $c, this is purely visual.  I assure you, the set bonus is still working!"});
std.NPCText.load(65001).get(0).Text.clear().Text.set({enGB: "Simply set yourself up with the transmogrification you like, and then you can save it as a set.  You can then re-apply the entire set of items to new equipment all at once!"});
const NPC_GOS = "Hey there, $c!  Do you want to look flashy without sacrificing your strength?  Well look no further my friend!$b$bThe T-MOG bot is the top of the line transmogrification station around!  It'll help you morph your equipment to look like other equipment you own, without changing its function!$b$bJust speak to the T-MOG bot here next to me to begin.";

//tmog
buildNpc({
	Tag: 'sw-tmog-1',
	CopyFrom: TRANSMOG_NPC_ID,

	Name: 'T-MOG',
	Subname: 'Transmogrifier',
	Spawn: [
		{map:0,x:-8807.292969,y:638.415649,z:94.228745,o:3.424364},
		{map:0,x:-4853.088379,y:-914.772644,z:503.257202,o:1.906804},
		{map:1,x:9804.477539,y:2313.195312,z:1329.321533,o:5.546421}],
	Faction: FactionTemplateValues.NEUTRAL_PASSIVE,
	Level: 30,
	Type: CreatureType.MECHANICAL,
	Civilian: true,
	Class: UnitClass.WARRIOR,
	Boss: false,
	AnimateSwim: true,
	Model: 22779,
})

// stormwind
removeNpcSpawns(29093);
buildNpc({
	Tag: 'sw-tmog-0',

	Name: 'Mevu Wiggleblast',
	Subname: 'T-MOG Technician',
	Spawn: {map:0,x:-8808.220703,y:639.658691,z:94.228706,o:3.858770},
	Faction: FactionTemplateValues.STORMWIND,
	Level: 45,
	Type: CreatureType.HUMANOID,
	Civilian: true,
	Class: UnitClass.WARRIOR,
	AnimateSwim: true,
	SimpleGossip: NPC_GOS,
	BakedNpc: "aTmog0",
	BakedNpcSound: NpcSoundIDs.GnomeMaleZany,
	EquipMainHand: 23221,
	EquipOffHand: 11855,
	GuardGossipOrigin: 435,
	GuardGossipOption: "Transmogrifier",
	GuardGossipPoiName: "Stormwind Transmogrifier",
	GuardGossipText: "A gnome called Mevu Wiggleblast has recently set up shop in the middle of the Trade District with some kind of contraption that can change how your equipment looks.  Perhaps he'll let you use it?",
})
// ironforge
buildNpc({
	Tag: 'if-tmog-0',

	Name: 'Tyssa Gripcase',
	Subname: 'T-MOG Technician',
	Spawn: {map:0,x:-4854.844727,y:-915.405396,z:503.021942,o:1.777219},
	Faction: FactionTemplateValues.IRONFORGE,
	Level: 45,
	Type: CreatureType.HUMANOID,
	Civilian: true,
	Class: UnitClass.WARRIOR,
	AnimateSwim: true,
	SimpleGossip: NPC_GOS,
	BakedNpc: "aTmog2",
	BakedNpcSound: NpcSoundIDs.GnomeFemaleNerdy,
	EquipMainHand: 2048,
	EquipOffHand: 11855,
	GuardGossipOrigin: 2121,
	GuardGossipOption: "Transmogrifier",
	GuardGossipPoiName: "Ironforge Transmogrifier",
	GuardGossipText: "Ye'll want ta look fer Tyssa Gripcase, near the barbershop.  She's been up on a box shoutin' all about her little robot that can change how yer equipment looks.",
})
// darnassus
buildNpc({
	Tag: 'dn-tmog-0',

	Name: 'Dellyflol Cogfield',
	Subname: 'T-MOG Technician',
	Spawn: {map:1,x:9803.296875,y:2310.535645,z:1329.321533,o:5.911621},
	Faction: FactionTemplateValues.DARNASSUS,
	Level: 45,
	Type: CreatureType.HUMANOID,
	Civilian: true,
	Class: UnitClass.WARRIOR,
	AnimateSwim: true,
	SimpleGossip: NPC_GOS,
	BakedNpc: "aTmog1",
	BakedNpcSound: NpcSoundIDs.GnomeFemaleStandard,
	EquipMainHand: 6219,
	EquipOffHand: 11855,
	GuardGossipOrigin: 2352,
	GuardGossipOption: "Transmogrifier",
	GuardGossipPoiName: "Darnassus Transmogrifier",
	GuardGossipText: "You're looking for what?  Actually, a small gnome with an even smaller gadget following her around resides in the Tradesmen's Terrace, I think I heard her say that word a few times.  I believe her name was Dellyflol Cogfield?",
})
