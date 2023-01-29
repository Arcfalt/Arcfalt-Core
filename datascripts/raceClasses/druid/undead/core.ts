import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.UNDEAD,
	EquipIdList: [35, buildItem({
		Tag: 'ud-dru-gear-chest-starter',
		CopyFrom: 6123,
		DisplayId: 9669,
		Name: "Novice's Jacket",
	}).ID,
	buildItem({
		Tag: 'ud-dru-gear-legs-starter',
		CopyFrom: 6124,
		DisplayId: 7533,
	}).ID,
	buildItem({
		Tag: 'ud-dru-gear-feet-starter',
		CopyFrom: 55,
		DisplayId: 25871,
		Name: "Novice's Boots",
	}).ID]
})