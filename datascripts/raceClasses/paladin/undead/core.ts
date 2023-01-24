import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { H_PLD_START_FEET_B, H_PLD_START_LEGS_B, H_PLD_START_SHIRT_B } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.PALADIN,
	Race: RaceIDs.UNDEAD,
	EquipIdList: [2361, H_PLD_START_SHIRT_B.ID, H_PLD_START_LEGS_B.ID, H_PLD_START_FEET_B.ID],
	EquipSkills: [std.EquipSkills.Maces2H],
})
