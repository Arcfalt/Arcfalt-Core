import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.WARLOCK,
	Race: RaceIDs.DWARF,
	EquipIdList: [35, 57, 6097, 1396, 59],
})