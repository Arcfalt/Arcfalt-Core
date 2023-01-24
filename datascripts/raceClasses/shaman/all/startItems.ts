import { buildItem } from "../../../itemBuilder";

export const A_SHA_START_SHIRT = buildItem({
	Tag: 'a-sha-gear-shirt-starter',
	CopyFrom: 154, DisplayId: 10058,
	DisplayIcon: "INV_Misc_Cape_13",
	DisplayTextures: [
		{i: 0, value: "Robe_Horde_A_01Dark_Sleeve_AU"},
		{i: 3, value: "Robe_Horde_A_01Dark_Chest_TU"},
		{i: 4, value: "Robe_Horde_A_01Dark_Chest_TL"},
	]
})

export const A_SHA_START_LEGS = buildItem({
	Tag: 'a-sha-gear-legs-starter',
	CopyFrom: 153, DisplayId: 10050,
	DisplayTextures: [
		{i: 5, value: "Robe_Horde_A_01Dark_Pant_LU"},
		{i: 6, value: "Robe_Horde_A_01Dark_Pant_LL"},
	]
})