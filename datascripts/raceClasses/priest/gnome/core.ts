import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.PRIEST,
	Race: RaceIDs.GNOME,
	EquipCopyFromRace: RaceIDs.DWARF,
})
