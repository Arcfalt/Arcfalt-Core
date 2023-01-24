import { std } from 'wow/wotlk';
import { FactionTemplateValues } from 'wow/wotlk/std/Faction/FactionTemplates';

// Undertaker Mordo to original spot outside crypt
std.CreatureTemplates.load(1568).Spawns.getIndex(0).Position.set({map:0,x:1681.500122,y:1670.460693,z:136.083893,o:3.667369});

// Ghouls back to zombies
std.CreatureTemplates.load(1502).Models.clearAll().Models.addIds(10979).Name.enGB.set("Wretched Zombie");
std.Quests.load(364).ObjectiveText.enGB.set("Shadow Priest Sarvis wants you to kill 5 Mindless Zombies and 5 Wretched Zombies.");

// Hostile scarlet crusaders
std.CreatureTemplates.load(1506).FactionTemplate.set(FactionTemplateValues.NEUTRAL_HOSTILE);
std.CreatureTemplates.load(1507).FactionTemplate.set(FactionTemplateValues.NEUTRAL_HOSTILE);
std.CreatureTemplates.load(1667).FactionTemplate.set(FactionTemplateValues.NEUTRAL_HOSTILE);

// Hostile night web spiders
std.CreatureTemplates.load(1505).FactionTemplate.set(FactionTemplateValues.NEUTRAL_HOSTILE);
