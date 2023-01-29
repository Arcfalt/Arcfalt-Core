import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs } from "../../../commonIds";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { H_PLD_START_FEET_B, H_PLD_START_LEGS_B, H_PLD_START_SHIRT_B } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.PALADIN,
	Race: RaceIDs.UNDEAD,
	EquipIdList: [2361, H_PLD_START_SHIRT_B.ID, H_PLD_START_LEGS_B.ID, H_PLD_START_FEET_B.ID],
	EquipSkills: [std.EquipSkills.Maces2H],
});

buildNpc({
	Tag: 'ud-pld-trainer-start',
	CopyFrom: 15280,

	Name: 'Brother Derrel',
	Subname: 'Paladin Trainer',
	Spawn: {map:0,x:1847.642090,y:1625.090332,z:96.933983,o:2.610433},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinLow,
	TrainerGossipClass: "The light itself harms us for what we are, yet we do not forsake it.  It is we who are forsaken by the world, we who are cast into the shadows...  But we will hold steadfast to the light through every trial.$b$bWe will not forsake ourselves.",
	TrainerGossipNotClass: "May you find light in the shadows, $c.",

	BakedNpc: "udPldTrainer0",
	BakedNpcSound: NpcSoundIDs.UndeadMaleWarrior,
	EquipMainHand: 1511,
	EquipOffHand: 4444,
});

buildNpc({
	Tag: 'ud-pld-trainer-mid',
	CopyFrom: 16275,

	Name: 'Sister Ulita',
	Subname: 'Paladin Trainer',
	Spawn: {map:0,x:2263.048340,y:249.268417,z:41.114834,o:5.679369},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinHorde,
	TrainerGossipClass: "The light itself harms us for what we are, yet we do not forsake it.  It is we who are forsaken by the world, we who are cast into the shadows...  But we will hold steadfast to the light through every trial.$b$bWe will not forsake ourselves.",
	TrainerGossipNotClass: "May you find light in the shadows, $c.",

	GuardGossipOrigin: 3354,
	GuardGossipOption: 'Paladin',
	GuardGossipPoiName: 'Sister Ulita',
	GuardGossipText: "At the southeast edge of town is the Gallows' End Tavern.  Go there and head upstairs, and you'll find Sister Ulita inside the reading room.",

	BakedNpc: "udPldTrainer1",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleWarrior,
	EquipMainHand: 1511,
	EquipOffHand: 4444,
});

buildNpc({
	Tag: 'ud-pld-trainer-main',
	CopyFrom: 16681,

	Name: 'Ballador the Bright',
	Subname: 'Paladin Trainer',
	Spawn: {map:0,x:1771.190674,y:414.072906,z:-57.197552,o:0.772366},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinHorde,
	TrainerGossipClass: "For years, I believed that I could never atone for failing to protect my order.  My life...  But I realize now, that the light has not forsaken me.  Has not forsaken us.$b$bThe light harms us by its very nature, yet it still cradles us in its protection all the same.$b$bI would show you the way, if you require it of me.  Our faith will never again be shaken, no matter our path.  No matter our future.  This I vow.",
	TrainerGossipNotClass: "For years, I believed that I could never atone for failing to protect my order.  My life...  But I realize now, $c, that the light has not forsaken me.  Has not forsaken us.$b$bThe light harms us by its very nature, yet it still cradles us in its protection all the same.$b$bYou may not be a paladin, but I hope you can find your own light, my friend.",

	BakedNpc: "udPldBallador",
	BakedNpcSound: NpcSoundIDs.UndeadMaleDark,
	EquipMainHand: 18717,
});

buildNpc({
	Tag: 'ud-pld-trainer-0',
	CopyFrom: 16680,

	Name: 'Sister Kayley',
	Subname: 'Paladin Trainer',
	Spawn: {map:0,x:1784.428711,y:418.360748,z:-57.197601,o:3.136662},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinHorde,
	TrainerGossipClass: "The light itself harms us for what we are, yet we do not forsake it.  It is we who are forsaken by the world, we who are cast into the shadows...  But we will hold steadfast to the light through every trial.$b$bWe will not forsake ourselves.",
	TrainerGossipNotClass: "May you find light in the shadows, $c.",

	BakedNpc: "udPldTrainer3",
	BakedNpcSound: NpcSoundIDs.UndeadFemaleWarrior,
	EquipMainHand: 4511,
	EquipOffHand: 4444,
});

buildNpc({
	Tag: 'ud-pld-trainer-1',
	CopyFrom: 16679,

	Name: 'Brother Baredil',
	Subname: 'Paladin Trainer',
	Spawn: {map:0,x:1776.015015,y:427.404236,z:-57.197601,o:4.707441},
	Faction: FactionTemplateValues.UNDERCITY,

	TrainerClassMask: ClassMask.PALADIN,
	TrainerID: TrainerID.PaladinHorde,
	TrainerGossipClass: "The light itself harms us for what we are, yet we do not forsake it.  It is we who are forsaken by the world, we who are cast into the shadows...  But we will hold steadfast to the light through every trial.$b$bWe will not forsake ourselves.",
	TrainerGossipNotClass: "May you find light in the shadows, $c.",

	BakedNpc: "udPldTrainer2",
	BakedNpcSound: NpcSoundIDs.UndeadMaleWarrior,
	EquipMainHand: 15418,
});
