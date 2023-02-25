import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { CreatureType } from "wow/wotlk/std/Creature/CreatureType";
import { UnitClass } from "wow/wotlk/std/Creature/UnitClass";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { appendNpc, buildNpc } from "../../../npcBuilder";
import { appendQuest } from "../../../questBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_SHA_START_SHIRT, A_SHA_START_LEGS } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.SHAMAN,
	Race: RaceIDs.DWARF,
	EquipIdList: [36, 2362, A_SHA_START_SHIRT.ID, A_SHA_START_LEGS.ID],
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.SHAMAN,
	ClassText: "The spirit of stone favors you.  What will you ask of it?",
	NotClassText: "The spirit of stone is fickle and best left out of untrained hands.  My apologies, $c, but I have no need of yours.",
}});

buildNpc({
	Tag: 'dw-sha-trainer-start',
	CopyFrom: 17089,

	Name: 'Tara Hammerstorm',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:-6068.460938,y:370.631317,z:393.597412,o:0.744833},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerID: TrainerID.ShamanLow,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "dwShaTrainer0",
});

buildNpc({
	Tag: 'dw-sha-trainer-mid',
	CopyFrom: 17212,

	Name: 'Halbin Frosthammer',
	Subname: 'Shaman Trainer',
	Spawn: {map:0,x:-5582.678711,y:-542.079468,z:403.614899,o:1.946483},
	Faction: FactionTemplateValues.IRONFORGE,

	TrainerID: TrainerID.Shaman,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "dwShaTrainer1",

	GuardGossipOrigin: 3545,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Halbin Frosthammer',
	GuardGossipText: "Ye can probably find Halbin Frosthammer throwin' down a pint or three in the Thunderbrew Distillery.  Ye could join him and see if he'll teach ye his spiritual ways.",
});

appendNpc(23127, {
	Tag: 'dw-sha-trainer-replacer',
	Name: "Eglen Freezerock",
	Subname: "Shaman Trainer",
	Faction: FactionTemplateValues.IRONFORGE,
	BakedNpc: "dwShaIronforge1",
	Level: 60,
	AppendExistingSpawn: true,

	GuardGossipOrigin: 2144,
	GuardGossipOption: 'Shaman',
	GuardGossipPoiName: 'Ironforge Shaman Trainer',
	GuardGossipText: "Ye'll want to look fer Eglen Freezerock in the area of The Great Forge, just a bit to the North on the East side.  The lass is a prodigy at communin' with the spirits, or so I'm told.  No doubt ye'll find what ye seek with her.",
})

appendNpc(35073, {
	Tag: 'dw-sha-other-replacer',
	Name: "Tuinagg Fullflight",
	Subname: "Shaman Trainer",
	Faction: FactionTemplateValues.IRONFORGE,
	BakedNpc: "dwShaIronforge2",
	Level: 50,
	AppendExistingSpawn: true,
	TrainerID: TrainerID.Shaman,
	Gossip: DEFAULT_GOSSIP,
})

appendQuest(14111, {
	ReplaceText: {from: /Farseer Eannu/gi, to: "Tuinagg Fullflight"},
})

buildNpc({
	Tag: 'dw-sha-trainer-ifside',

	Name: 'Uldorn Marblebraid',
	Subname: 'Shaman Trainer',
	Level: 40,
	Type: CreatureType.HUMANOID,
	Spawn: {map:0,x:-4726.208984,y:-1152.681030,z:502.448090,o:0.194646},
	Faction: FactionTemplateValues.IRONFORGE,
	Civilian: true,
	Class: UnitClass.PALADIN,
	AnimateSwim: true,

	TrainerID: TrainerID.Shaman,
	Gossip: DEFAULT_GOSSIP,
	BakedNpc: "dwShaIronforge3",
});
