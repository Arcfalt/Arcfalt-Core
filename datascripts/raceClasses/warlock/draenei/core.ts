import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../util/itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.WARLOCK,
	Race: RaceIDs.DRAENEI,
	EquipIdList: [buildItem({
		Tag: 'dr-wlk-gear-chest-starter',
		CopyFrom: 57, DisplayId: 40441,
		DisplayIcon: "INV_Chest_Cloth_24",
		DisplayGeosetGroup: [
			{i: 0, value: 2},
			{i: 2, value: 1}
		],
		DisplayTextures: [
			{i: 5, value: "Robe_A_07Orange_Robe_LU"},
			{i: 6, value: "Robe_A_07Orange_Robe_LL"}
		]
	}).ID, 6097, 1396, 3661],
})
