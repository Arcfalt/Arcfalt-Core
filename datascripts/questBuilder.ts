import { MaskMode } from "wow/data/cell/cells/MaskCell";
import { std } from "wow/wotlk";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { Quest } from "wow/wotlk/std/Quest/Quest";
import { RaceMask } from "wow/wotlk/std/Race/RaceType";
import { MODNAME } from "./datascripts";
import { buildItem, ItemBuilder } from "./itemBuilder";

export declare type QuestBuilder = {
	Tag?: string,
	CopyFrom?: number,

    StartNpc?: number,
	StartNpcs?: number[],
	EndNpc?: number,

	Level?: {min: number, target: number, max: number},
	QuestLevel?: number,
	MinLevel?: number,
	MaxLevel?: number,
	SortId?: number,

	AddEnd?: {npc: number, area?: number},
	AddEndPoi?: boolean,
	PoiWorldMapArea?: number,
	PoiMap?: number,
	PoiFlags?: number,
	PoiFloor?: number,
	PoiPriority?: number,
	PoiObjectiveIndex?: number,

	ClassMask?: ClassMask,
	ClassMaskMode?: MaskMode,
	RaceMask?: RaceMask,
	RaceMaskMode?: MaskMode,

	Title?: string,
	PickupText?: string,
	CompleteText?: string,
	ObjectiveText?: string,
	IncompleteText?: string,
	ReplaceText?: {from: string | RegExp, to: string},

	ExclusiveGroup?: number,
	BreadcrumbFor?: number,
	PreviousQuest?: number,
	NextQuest?: number,
	RewardNextQuest?: number,

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

	if (b.AddEnd !== undefined) {
		b.EndNpc = b.AddEnd.npc;
		b.PoiWorldMapArea = b.AddEnd.area;
	}

	if (b.Title !== undefined) q.Name.set({enGB: b.Title});
	if (b.PickupText !== undefined) q.PickupText.set({enGB: b.PickupText});
	if (b.CompleteText !== undefined) q.CompleteText.set({enGB: b.CompleteText});
	if (b.ObjectiveText !== undefined) q.ObjectiveText.set({enGB: b.ObjectiveText});
	if (b.IncompleteText !== undefined) q.IncompleteText.set({enGB: b.IncompleteText});
	if (b.StartNpc !== undefined) q.Questgiver.addCreatureStarter(b.StartNpc);
	if (b.StartNpcs !== undefined) {
		b.StartNpcs.forEach(element => {
			q.Questgiver.addCreatureStarter(element);
		});
	}
	if (b.EndNpc !== undefined) q.Questgiver.addCreatureEnder(b.EndNpc, b.AddEndPoi);

	if (b.Level !== undefined) {
		q.Level.set(b.Level.min, b.Level.target, b.Level.max);
	}
	if (b.QuestLevel !== undefined) q.QuestLevel.set(b.QuestLevel);
	if (b.MinLevel !== undefined) q.MinLevel.set(b.MinLevel);
	if (b.MaxLevel !== undefined) q.MaxLevel.set(b.MaxLevel);

	if(b.SortId !== undefined) q.AreaSort.set(b.SortId);

	if (b.PoiWorldMapArea !== undefined) q.POIs.getIndex(0).WorldMapArea.set(b.PoiWorldMapArea);
	if (b.PoiMap !== undefined) q.POIs.getIndex(0).Map.set(b.PoiMap);
	if (b.PoiFlags !== undefined) q.POIs.getIndex(0).Flags.set(b.PoiFlags);
	if (b.PoiFloor !== undefined) q.POIs.getIndex(0).Floor.set(b.PoiFloor);
	if (b.PoiPriority !== undefined) q.POIs.getIndex(0).Priority.set(b.PoiPriority);
	if (b.PoiObjectiveIndex !== undefined) q.POIs.getIndex(0).ObjectiveIndex.set(b.PoiObjectiveIndex);

	if (b.ExclusiveGroup !== undefined) q.ExclusiveGroup.set(b.ExclusiveGroup);
	if (b.BreadcrumbFor !== undefined) q.BreadcrumbForQuest.set(b.BreadcrumbFor);
	if (b.PreviousQuest !== undefined) q.PrevQuest.set(b.PreviousQuest);
	if (b.NextQuest !== undefined) q.NextQuest.set(b.NextQuest);
	if (b.RewardNextQuest !== undefined) q.row.RewardNextQuest.set(b.RewardNextQuest); 

	if (b.ClearItemObjectives) q.Objectives.Item.clearAll();
	if (b.DeliveryItem !== undefined) {
		let deliveryItem = buildItem(b.DeliveryItem);
		q.StartItem.set(deliveryItem.ID);
		q.Objectives.Item.addGet().Item.set(deliveryItem.ID).Count.set(1);
	}

	if (b.ClassMask !== undefined) {
		q.ClassMask.clearAll();
		q.ClassMask.set(b.ClassMask, b.ClassMaskMode);
	}
	if (b.RaceMask !== undefined) {
		q.RaceMask.clearAll();
		q.RaceMask.set(b.RaceMask, b.RaceMaskMode);
	}

	if (b.ReplaceText !== undefined){
		if (q.Name.enGB.get().search(b.ReplaceText.from)) q.Name.enGB.set(q.Name.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
		if (q.PickupText.enGB.get().search(b.ReplaceText.from)) q.PickupText.enGB.set(q.PickupText.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
		if (q.CompleteText.enGB.get().search(b.ReplaceText.from)) q.CompleteText.enGB.set(q.CompleteText.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
		if (q.ObjectiveText.enGB.get().search(b.ReplaceText.from)) q.ObjectiveText.enGB.set(q.ObjectiveText.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
		if (q.IncompleteText.enGB.get().search(b.ReplaceText.from)) q.IncompleteText.enGB.set(q.IncompleteText.enGB.get().replace(b.ReplaceText.from, b.ReplaceText.to));
	}
	return q;
}