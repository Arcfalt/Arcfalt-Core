import { MaskMode } from "wow/data/cell/cells/MaskCell";
import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { Quest } from "wow/wotlk/std/Quest/Quest";
import { MODNAME } from "./datascripts";
import { buildItem, ItemBuilder } from "./itemBuilder";

export declare type QuestBuilder = {
	Tag?: string,
	CopyFrom?: number,

    StartNpc?: number,
	EndNpc?: number,

	AddEndPoi?: boolean,
	PoiWorldMapArea?: number,
	PoiMap?: number,
	PoiFlags?: number,
	PoiFloor?: number,
	PoiPriority?: number,
	PoiObjectiveIndex?: number,

	ClassMask?: ClassMask,
	ClassMaskMode?: MaskMode,

	Title?: string,
	PickupText?: string,
	CompleteText?: string,
	ObjectiveText?: string,
	IncompleteText?: string,
	ReplaceText?: {from: string | RegExp, to: string},

	ExclusiveGroup?: number,

	ClearItemObjectives?: boolean,
	DeliveryItem?: ItemBuilder,
};

export function buildQuest(b: QuestBuilder) : Quest {
	if (!b.Tag) throw new Error("Attempted to build quest without a tag!");
	let q = std.Quests.create(MODNAME, b.Tag, b.CopyFrom);
	return appendQuest(q, b);
}

export function appendQuest(target: number | Quest, b: QuestBuilder) : Quest {
	let q : Quest;
	if (typeof target === "number"){
		q = std.Quests.load(target);
	}
	else {
		q = target;
	}
	if (b.Title) q.Name.set({enGB: b.Title});
	if (b.PickupText) q.PickupText.set({enGB: b.PickupText});
	if (b.CompleteText) q.CompleteText.set({enGB: b.CompleteText});
	if (b.ObjectiveText) q.ObjectiveText.set({enGB: b.ObjectiveText});
	if (b.IncompleteText) q.IncompleteText.set({enGB: b.IncompleteText});
	if (b.StartNpc) q.Questgiver.addCreatureStarter(b.StartNpc);
	if (b.EndNpc) q.Questgiver.addCreatureEnder(b.EndNpc, b.AddEndPoi);

	if (b.PoiWorldMapArea) q.POIs.getIndex(0).WorldMapArea.set(b.PoiWorldMapArea);
	if (b.PoiMap) q.POIs.getIndex(0).Map.set(b.PoiMap);
	if (b.PoiFlags) q.POIs.getIndex(0).Flags.set(b.PoiFlags);
	if (b.PoiFloor) q.POIs.getIndex(0).Floor.set(b.PoiFloor);
	if (b.PoiPriority) q.POIs.getIndex(0).Priority.set(b.PoiPriority);
	if (b.PoiObjectiveIndex) q.POIs.getIndex(0).ObjectiveIndex.set(b.PoiObjectiveIndex);

	if (b.ExclusiveGroup) q.ExclusiveGroup.set(b.ExclusiveGroup);

	if (b.ClearItemObjectives) q.Objectives.Item.clearAll();
	if (b.DeliveryItem) {
		let deliveryItem = buildItem(b.DeliveryItem);
		q.StartItem.set(deliveryItem.ID);
		q.Objectives.Item.addGet().Item.set(deliveryItem.ID).Count.set(1);
	}

	if (b.ClassMask) {
		q.ClassMask.clearAll();
		q.ClassMask.set(b.ClassMask, b.ClassMaskMode);
	}

	if (b.ReplaceText){
		if (q.Name.enGB.get().search(b.ReplaceText.from)) q.Name.enGB.set(q.Name.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
		if (q.PickupText.enGB.get().search(b.ReplaceText.from)) q.PickupText.enGB.set(q.PickupText.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
		if (q.CompleteText.enGB.get().search(b.ReplaceText.from)) q.CompleteText.enGB.set(q.CompleteText.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
		if (q.ObjectiveText.enGB.get().search(b.ReplaceText.from)) q.ObjectiveText.enGB.set(q.ObjectiveText.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
		if (q.IncompleteText.enGB.get().search(b.ReplaceText.from)) q.IncompleteText.enGB.set(q.IncompleteText.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
	}
	return q;
}