import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.DRAENEI,
	EquipIdList: [buildItem({
		Tag: 'dr-dru-gear-chest-starter',
		CopyFrom: 6123,
		DisplayId: 36127,
	}).ID,
	buildItem({
		Tag: 'dr-dru-gear-legs-starter',
		CopyFrom: 6124,
		DisplayId: 36128,
	}).ID,
	buildItem({
		Tag: 'dr-dru-gear-feet-starter',
		CopyFrom: 55,
		DisplayId: 36129,
		Name: "Novice's Boots",
	}).ID,
	3661],
})