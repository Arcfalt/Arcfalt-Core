import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../util/itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.SHAMAN,
	Race: RaceIDs.UNDEAD,
	EquipIdList: [buildItem({
		Tag: 'ud-sha-gear-chest-starter',
		CopyFrom: 154, DisplayId: 10077,
		Name: "Primitive Jacket",
	}).ID, buildItem({
		Tag: 'ud-sha-gear-legs-starter',
		CopyFrom: 153, DisplayId: 10079,
		Name: "Primitive Pants",
	}).ID, buildItem({
		Tag: 'ud-sha-gear-feet-starter',
		CopyFrom: 55, DisplayId: 16802,
		Name: "Primitive Boots",
	}).ID, 36, 2362]
})
