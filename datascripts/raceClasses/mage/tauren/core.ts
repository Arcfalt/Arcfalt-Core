import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.MAGE,
	Race: RaceIDs.TAUREN,
	EquipIdList: [buildItem({
		Tag: 'ta-mag-gear-chest-starter',
		CopyFrom: 6140,
		DisplayId: 19110,
	}).ID, 1359, 35]
})