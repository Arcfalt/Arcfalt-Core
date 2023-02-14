import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.ORC,
	EquipCopyFromRace: RaceIDs.TAUREN,
})