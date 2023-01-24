import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.PALADIN,
	Race: RaceIDs.NIGHTELF,
	EquipIdList: [12282, buildItem({
		Tag: 'ne-pld-gear-shirt-starter',
		CopyFrom: 45, DisplayId: 4482,
	}).ID, buildItem({
		Tag: 'ne-pld-gear-legs-starter',
		CopyFrom: 44, DisplayId: 4481,
	}).ID, buildItem({
		Tag: 'ne-pld-gear-feet-starter',
		CopyFrom: 43, DisplayId: 4472,
	}).ID],
	EquipSkills: [std.EquipSkills.Axes2H],
})
