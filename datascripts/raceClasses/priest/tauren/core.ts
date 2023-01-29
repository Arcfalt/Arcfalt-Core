import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../util/itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.PRIEST,
	Race: RaceIDs.TAUREN,
	EquipIdList: [buildItem({
		Tag: 'ta-pst-gear-chest-starter',
		CopyFrom: 6144, DisplayId: 25944,
	}).ID, 52, 35]
})
