import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.ROGUE,
	Race: RaceIDs.TAUREN,
	EquipCopyFromRace: RaceIDs.TROLL,
	EquipSkills: [std.EquipSkills.Daggers],
})
