import { std } from 'wow/wotlk';
import { FactionTemplateValues } from 'wow/wotlk/std/Faction/FactionTemplates';

// Willem to original spot near bench
std.CreatureTemplates.load(823).Spawns.getIndex(0).Position.set({map:0,x:-8930.733398,y:-138.995178,z:82.612976,o:2.621291});

// Removed disease from wolves and re-add meat quest item
std.CreatureTemplates.load(69).Models.clearAll().Models.addIds(604).Name.enGB.set("Timber Wolf")
.Auras.set(std.CreatureTemplates.load(38).Auras.get())
.NormalLoot.modRef((table) => 
{
	table.addItem(750, 100, 1, 1, true);
});
std.CreatureTemplates.load(299).Models.clearAll().Models.addIds(447).Name.enGB.set("Young Wolf")
.Auras.set(std.CreatureTemplates.load(38).Auras.get())
.NormalLoot.modRef((table) => 
{
	table.addItem(750, 100, 1, 1, true);
});
// Revert wolf quest text and item requirement
std.Quests.load(5261).PickupText.enGB.set("Eagan Peltskinner is looking for someone to hunt wolves for him.  That's good news, because we're seeing a lot more wolves in Northshire Valley lately.$B$BIf you're interested then speak with Eagan.  He's around the side of the abbey, to the left.");
std.Quests.load(33).PickupText.enGB.set("I hate those nasty timber wolves! But I sure like eating wolf steaks... Bring me tough wolf meat and I will exchange it for something you'll find useful.$B$BTough wolf meat is gathered from hunting the timber wolves and young wolves wandering the Northshire countryside.")
.ObjectiveText.enGB.set("Bring 8 Tough Wolf Meat to Eagan Peltskinner outside Northshire Abbey.")
.IncompleteText.enGB.set("Hey $N. I'm getting hungry... Did you get that tough wolf meat?")
.CompleteText.enGB.set("You've been busy! I can't wait to cook up that wolf meat...$B$BI have some things here you might want - take your pick!")
.Objectives.Item.mod(0, (value) => 
{
	value.Item.set(750);
});

// Hostile defias
std.CreatureTemplates.load(38).FactionTemplate.set(FactionTemplateValues.NEUTRAL_HOSTILE);
std.CreatureTemplates.load(103).FactionTemplate.set(FactionTemplateValues.NEUTRAL_HOSTILE);

// Hostile kobolds in mine
std.CreatureTemplates.load(80).FactionTemplate.set(FactionTemplateValues.NEUTRAL_HOSTILE);
