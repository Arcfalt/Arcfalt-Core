import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../util/itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.MAGE,
	Race: RaceIDs.NIGHTELF,
	EquipIdList: [3661, buildItem({
		Tag: 'ne-mag-gear-chest-starter',
		CopyFrom: 56, DisplayId: 12647,
		DisplayTextures: [
			{i: 0, value: "Robe_B_05Blue_Sleeve_AU"},
			{i: 1, value: "Robe_B_05Blue_Sleeve_AL"},
			{i: 3, value: "Robe_B_05Blue_Chest_TU"},
			{i: 4, value: "Robe_B_05Blue_Chest_TL"},
			{i: 5, value: "Robe_B_05Blue_Pant_LU"},
			{i: 6, value: "Robe_B_05Blue_Pant_LL"},
		]
	}).ID, buildItem({
		Tag: 'ne-mag-gear-feet-starter',
		CopyFrom: 55, DisplayId: 9929,
		DisplayTextures: [
			{i: 6, value: "Robe_B_05Blue_Boot_LL"},
			{i: 7, value: "Robe_B_05Blue_Boot_FO"},
		]
	}).ID, 1395],
})
