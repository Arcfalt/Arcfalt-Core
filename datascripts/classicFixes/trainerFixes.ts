import { std } from "wow/wotlk";

// Fix blood elf paladin trainers missing their trainer option
//std.CreatureTemplates.load(15280).Gossip.getRef().Options.getIndex(0).Gossip.set(0);
std.SQL.gossip_menu_option.query({ MenuID: 6647, OptionType: 5, ActionMenuID: 7938 }).ActionMenuID.set(0);

// todo - fix undercity herbalism trainer
// GOSSIP_OPTION_TRAINER:: Player Sdfsde GUID Full: 0x0000000000000001 Type: Player Low: 1 requested wrong gossip menu: 7691 at Creature: Martha Alliestar (Entry: 4614)