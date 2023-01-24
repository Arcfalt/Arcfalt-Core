import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { H_WLK_START_CHEST } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.WARLOCK,
	Race: RaceIDs.TAUREN,
	EquipIdList: [H_WLK_START_CHEST.ID, 1396, 35]
})