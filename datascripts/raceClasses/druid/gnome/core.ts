import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_DRU_START_CHEST, A_DRU_START_SHIRT } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.GNOME,
	EquipIdList: [35, A_DRU_START_CHEST.ID, A_DRU_START_SHIRT.ID, 6124],
})
