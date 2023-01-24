import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { H_PLD_START_LEGS_A, H_PLD_START_SHIRT_A } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.PALADIN,
	Race: RaceIDs.TAUREN,
	EquipIdList: [2361, H_PLD_START_SHIRT_A.ID, H_PLD_START_LEGS_A.ID],
	EquipSkills: [std.EquipSkills.Maces2H],
})
