import { buildItem } from "../../../itemBuilder";

export const H_PLD_START_SHIRT_A = buildItem({
	Tag: 'h-pld-gear-shirt-starter-a',
	CopyFrom: 45, DisplayId: 7551,
	Name: "Initiate's Shirt",
})

export const H_PLD_START_LEGS_A = buildItem({
	Tag: 'h-pld-gear-legs-starter-a',
	CopyFrom: 44, DisplayId: 7947,
	Name: "Initiate's Pants",
})

export const H_PLD_START_FEET_A = buildItem({
	Tag: 'h-pld-gear-feet-starter-a',
	CopyFrom: 43, DisplayId: 10872,
	DisplayIcon: "INV_Boots_03",
	Name: "Initiate's Boots",
})

export const H_PLD_START_SHIRT_B = buildItem({
	Tag: 'h-pld-gear-shirt-starter-b',
	CopyFrom: 45, DisplayId: 9995,
	DisplayTextures: [
		{ i: 0, value: "Leather_Horde_A_02Black_Sleeve_AU" },
		{ i: 3, value: "Leather_Horde_A_02Black_Chest_TU" },
		{ i: 4, value: "Leather_Horde_A_02Black_Chest_TL" },
	],
	Name: "Initiate's Harness",
})

export const H_PLD_START_LEGS_B = buildItem({
	Tag: 'h-pld-gear-legs-starter-b',
	CopyFrom: 44, DisplayId: 9988,
	DisplayTextures: [
		{ i: 5, value: "Leather_Horde_A_02Black_Pant_LU" },
		{ i: 6, value: "Leather_Horde_A_02Black_Pant_LL" },
	],
	Name: "Initiate's Pants",
})

export const H_PLD_START_FEET_B = buildItem({
	Tag: 'h-pld-gear-feet-starter-b',
	CopyFrom: 43, DisplayId: 9992,
	DisplayTextures: [
		{ i: 6, value: "Leather_Horde_A_02Black_Boot_LL" },
		{ i: 7, value: "Leather_Horde_A_02Black_Boot_FO" },
	],
	Name: "Initiate's Boots",
})