import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.HUNTER,
	Race: RaceIDs.UNDEAD,
	EquipIdList: [buildItem({
		Tag: 'ud-hnt-gear-chest-starter',
		CopyFrom: 127,
		DisplayId: 8635,
	}).ID, buildItem({
		Tag: 'ud-hnt-gear-feet-starter',
		CopyFrom: 6127,
		DisplayId: 10362,
	}).ID, buildItem({
		Tag: 'ud-hnt-gear-legs-starter',
		CopyFrom: 6126,
		DisplayId: 10534,
		DisplayIcon: "INV_Pants_02",
	}).ID, 12282, 23347, 2101, 2512],
	EquipSkills: [std.EquipSkills.Axes2H, std.EquipSkills.Crossbows],
})
