import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildItem } from "../../../util/itemBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.SHAMAN,
	Race: RaceIDs.NIGHTELF,
	EquipIdList: [36, 2362, buildItem({
		Tag: 'ne-sha-gear-shirt-starter',
		CopyFrom: 154, DisplayId: 10058,
		DisplayIcon: "INV_Chest_Cloth_34",
		DisplayTextures: [
			{i: 0, value: "Robe_A_05Gray_Sleeve_AU"},
			{i: 3, value: "Robe_A_05Gray_Chest_TU"},
			{i: 4, value: "Robe_A_05Gray_Chest_TL"},
		],
	}).ID, buildItem({
		Tag: 'ne-sha-gear-legs-starter',
		CopyFrom: 153, DisplayId: 10050,
		DisplayTextures: [
			{i: 5, value: "Robe_A_05Gray_Pant_LU"},
			{i: 6, value: "Robe_A_05Gray_Pant_LL"},
		],
	}).ID],
})
