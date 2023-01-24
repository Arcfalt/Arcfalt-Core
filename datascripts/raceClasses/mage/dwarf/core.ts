import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.MAGE,
	Race: RaceIDs.DWARF,
	EquipIdList: [35, 56, 6096, 1395, 55],
})
