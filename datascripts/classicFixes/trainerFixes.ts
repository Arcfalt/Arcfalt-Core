import { std } from "wow/wotlk";

// Fix blood elf paladin trainers missing their trainer option
std.SQL.gossip_menu_option.query({ MenuID: 6647, OptionType: 5, ActionMenuID: 7938 }).ActionMenuID.set(0);

// Fix undercity herbalism trainer
std.SQL.gossip_menu_option.query({ MenuID: 7691, OptionType: 5, ActionMenuID: 6647 }).ActionMenuID.set(0);