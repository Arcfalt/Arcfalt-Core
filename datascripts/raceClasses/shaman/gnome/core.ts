import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_SHA_START_SHIRT, A_SHA_START_LEGS } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.SHAMAN,
	Race: RaceIDs.GNOME,
	EquipIdList: [36, 2362, A_SHA_START_SHIRT.ID, A_SHA_START_LEGS.ID],
})
