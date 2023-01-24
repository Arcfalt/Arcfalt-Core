import { std } from "wow/wotlk";
import { MODNAME } from "../datascripts";
import { appendQuest } from "../questBuilder";

let korkron = std.CreatureTemplates.load(36213);
let checkSet = [79264, 79265, 79266, 79267];

//let abom = std.CreatureTemplates.load(5624);
//console.log(abom.objectify());

// console.log(abom.Gossip.getRef().ID);
// abom.Spawns.get().forEach((value, index, array) => {
// 	console.log(value.objectify());
// })

korkron.Spawns.get().forEach((value, _index, _array) => {
	if (checkSet.includes(value.ID)){
		if (value.AddonRow.exists()) value.AddonRow.get().delete();
		value.delete();
		return;
	}
	value.Template.set(5624);
	value.EquipmentID.set(0);
	value.Auras.set('12187');
	value.AddonBytes2.set(value.AddonBytes2.get() | 256);
	//console.log("-----");
	//console.log(value.ID.toString());
	//console.log(value.objectify());
});

//console.log(instances[0].objectify());
//console.log("Count: " + instances.length);

//console.log(std.Gossip.load(2822).Text.get(0).Text.Male.enGB.get());

//console.log(std.CreatureTemplates.load(36217).objectify());

let kraggosh = std.CreatureTemplates.load(36217);
kraggosh.Spawns.get().forEach((value, _index, _array) => {
	if (value.AddonRow.exists()) value.AddonRow.get().delete();
	value.delete();
});

let farnell = std.CreatureTemplates.load(2055);
let farnellTalk = std.Gossip.createStatic(MODNAME, "gos-farnell-restored");
farnellTalk.Text.add({enGB: "The Royal Apothecary Society shall heed the Dark Lady's call to uncover the New Plague and drive Arthas and his heathen Scourge Army from the world once and for all."});
farnell.Gossip.set(farnellTalk.ID);
// farnell.Gossip.modRef((gossip) => {
// 	//console.log(gossip.Text.get(0).Text.Male.enGB.get());
// 	gossip.Text.get(0).Text.set({enGB: "The Royal Apothecary Society shall heed the Dark Lady's call to uncover the New Plague and drive Arthas and his heathen Scourge Army from the world once and for all."});
// 	//console.log(gossip.Text.get(0).Text.Male.enGB.get());
// })

//std.Gossip.load(14940).Text.clearAll().Text.add({enGB: "The Royal Apothecary Society shall heed the Dark Lady's call to uncover the New Plague and drive Arthas and his heathen Scourge Army from the world once and for all."});

// Row 14940 in table `npc_text` has mismatch between text0_0 and the corresponding Text in `broadcast_text` row 36321
// todo fix this
let speeches = std.Scripts.loadCreature(2055);
speeches.forEach((value, _index, _array) => {
	//console.log(value.objectify());
	value.row.delete();
})


let aleric = std.CreatureTemplates.load(36517);
aleric.Spawns.get().forEach((value, _index, _array) => {
	if (value.AddonRow.exists()) value.AddonRow.get().delete();
	value.delete();
});

// varimathras
let braggor = std.CreatureTemplates.load(36273);
braggor.Spawns.get().forEach((value, _index, _array) => {
	value.Template.set(2425);
	value.EquipmentID.set(0);
});
std.SQL.creature_queststarter.queryAll({id: 6467}).forEach(value => {
	switch (value.quest.get()) {
		case 14418:
			value.delete();
			std.SQL.creature_queststarter.add(6467, 1978);
			break;
		case 14419:
			value.delete();
			std.SQL.creature_queststarter.add(6467, 1898);
			break;
		case 14420:
			value.delete();
			std.SQL.creature_queststarter.add(6467, 1886);
			break;
	}
});
std.SQL.creature_queststarter.queryAll({id: 6522}).forEach(value => {
	switch (value.quest.get()) {
		case 14421:
			value.delete();
			std.SQL.creature_queststarter.add(6522, 1899);
			break;
	}
});
std.SQL.creature_questender.queryAll({id: 36273}).forEach(value => {
	switch (value.quest.get()) {
		case 6144:
			value.delete();
			std.SQL.creature_questender.add(2425, 6144);
			break;
	}
});
//if (std.SQL.creature_queststarter.queryAll({id: 2425, quest: 6145}).length == 0) std.SQL.creature_queststarter.add(2425, 6145);
// 14350
std.SQL.creature_queststarter.queryAll({id: 10181}).forEach(value => {
	switch (value.quest.get()) {
		case 14350:
			value.delete();
			std.SQL.creature_queststarter.add(2425, 14350);
			break;
	}
});
appendQuest(14350, {
	PickupText: "Just as the body cannot survive without the head, the head cannot survive without the body.  The defenses of the Scarlet Crusade's command inside Stratholme are almost impenetrable.  We must, instead, cut the body out from under the head.$b$bMy Deathstalkers have been collecting data on the activity of the Crusade outside of Stratholme.  Each day, a report is sent from their central command to Tyr's Hand.  This report is the key, $r!  Find the Crimson Courier and recover that report.  Return it to Nathanos.",
})
std.Items.load(49205).StartQuest.set(std.Items.load(17008).StartQuest.get());
appendQuest(6521, {
	ReplaceText: {from:/Bragor Bloodfist/gi, to: "Varimathras"},
})
appendQuest(6522, {
	ReplaceText: {from:/Bragor Bloodfist/gi, to: "Varimathras"},
})
appendQuest(6144, {
	ReplaceText: {from:/Bragor Bloodfist/gi, to: "Varimathras"},
})
let variTalk = std.Gossip.createStatic(MODNAME, "gos-varimath-restored");
variTalk.Text.add({enGB: "Do not presume to speak to me as though you are my equal, $c.  Sylvanas is my queen, and I will do as she bids.$b$bIf you do not show the proper respect, I assure you, we can find a more than suitable place for you in the Nether.$b$bBut there is no reason we cannot have words if you wish to aid the Dark Lady..."});
std.CreatureTemplates.load(2425).Gossip.set(variTalk.ID);
//console.log(std.Quests.load(6145).objectify())
