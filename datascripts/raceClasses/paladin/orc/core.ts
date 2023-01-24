import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { H_PLD_START_FEET_A, H_PLD_START_LEGS_A, H_PLD_START_SHIRT_A } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.PALADIN,
	Race: RaceIDs.ORC,
	EquipIdList: [12282, H_PLD_START_SHIRT_A.ID, H_PLD_START_LEGS_A.ID, H_PLD_START_FEET_A.ID],
	EquipSkills: [std.EquipSkills.Axes2H],
})
