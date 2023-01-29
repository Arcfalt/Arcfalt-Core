import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../util/itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.ROGUE,
	Race: RaceIDs.DRAENEI,
	EquipIdList: [buildItem({
		Tag: 'dr-rog-gear-chest-starter',
		CopyFrom: 49, DisplayId: 36133,
	}).ID, buildItem({
		Tag: 'dr-rog-gear-legs-starter',
		CopyFrom: 48, DisplayId: 36134,
	}).ID, buildItem({
		Tag: 'dr-rog-gear-feet-starter',
		CopyFrom: 47, DisplayId: 36135,
	}).ID, 28979, 2092, 50055],
	EquipSkills: [std.EquipSkills.Daggers],
})
