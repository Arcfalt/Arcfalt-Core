import { std } from "wow/wotlk";

// Fix blood elf paladin trainers missing their trainer option
//std.CreatureTemplates.load(15280).Gossip.getRef().Options.getIndex(0).Gossip.set(0);
//std.CreatureTemplates.load(16275).Gossip.getRef().Options.getIndex(0).Gossip.set(0);
//std.CreatureTemplates.load(16679).Gossip.getRef().Options.getIndex(0).Gossip.set(0);
//std.CreatureTemplates.load(16680).Gossip.getRef().Options.getIndex(0).Gossip.set(0);
//std.CreatureTemplates.load(16681).Gossip.getRef().Options.getIndex(0).Gossip.set(0);
//std.CreatureTemplates.load(23128).Gossip.getRef().Options.getIndex(0).Gossip.set(0);
std.SQL.gossip_menu_option.query({ MenuID: 6647, OptionType: 5, ActionMenuID: 7938 }).ActionMenuID.set(0);