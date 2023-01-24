import { std } from "wow/wotlk";
import { ItemTemplate } from "wow/wotlk/std/Item/ItemTemplate";
import { MODNAME } from "./datascripts";

export declare type ItemBuilder = {
	Tag: string,
	CopyFrom?: number,

	Name?: string,
	Description?: string,

	DisplayId?: number,
	DisplayTextures?: {i: number, value: string}[],
	DisplayGeosetGroup?: {i: number, value: number}[],
	DisplayIcon?: string,

	PageTextSimple?: string,
}

export function buildItem(b: ItemBuilder): ItemTemplate {
	if (!b.Tag) throw new Error("Attempted to build item without a tag!");
	let it: ItemTemplate = std.Items.create(MODNAME, b.Tag, b.CopyFrom);
	return appendItem(it, b);
}

export function appendItem(target: number | ItemTemplate, b: ItemBuilder): ItemTemplate {
	let it : ItemTemplate;
	if (typeof target === "number") {
		it = std.Items.load(target);
	}
	else {
		it = target;
	}
	if (b.Name) it.Name.enGB.set(b.Name);
	if (b.Description) it.Description.enGB.set(b.Description);
	if (b.PageTextSimple) it.PageText.setSimpleLoc({enGB: b.PageTextSimple});
	let modifyDisplay: boolean = (b.DisplayTextures != undefined || b.DisplayGeosetGroup != undefined || b.DisplayIcon != undefined);
	if (modifyDisplay) {
		let sourceDisplay: number;
		if (b.DisplayId) sourceDisplay = b.DisplayId;
		else sourceDisplay = it.DisplayInfo.get();
		let newDisplay = std.ItemDisplayInfo.create(sourceDisplay);
		if (b.DisplayIcon) newDisplay.Icon.set(b.DisplayIcon);
		if (b.DisplayTextures) {
			b.DisplayTextures.forEach(element => {
				newDisplay.Texture.setIndex(element.i, element.value);
			});
		}
		if (b.DisplayGeosetGroup) {
			b.DisplayGeosetGroup.forEach(element => {
				newDisplay.GeosetGroup.setIndex(element.i, element.value);
			});
		}
		it.DisplayInfo.set(newDisplay.ID);
	}
	else if (b.DisplayId) it.DisplayInfo.set(b.DisplayId);
	return it;
}