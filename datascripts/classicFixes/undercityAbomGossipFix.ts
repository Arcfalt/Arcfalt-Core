import { std } from "wow/wotlk";
import { GossipIcon } from "wow/wotlk/std/Gossip/GossipIcon";
import { buildGossip, logCreatureGossip } from "../gossipBuilder";

// Fix Undercity Abominations having their gossip replaced by Kor'kron gossip, even though there's still two left in the undercity sewers that were not replaced
// Also exports them so that they can be used in class expansion
export const ABOM_GOSSIP_AUCTION_HOUSE = buildGossip({SimpleText: "We have auction house in central ring."});
export const ABOM_GOSSIP_BANK = buildGossip({SimpleText: "We have one eye and see better than you!  Bank in center of Undercity!"});
export const ABOM_GOSSIP_BARBER = buildGossip({SimpleText: "Barber?  That is Naznik!  He on top floor of Trade Quarter, near bank."});
export const ABOM_GOSSIP_BAT_HANDLER = buildGossip({Texts: [{Texts: [
	{Text: "Michael Garrett on upper ring in Trade Quarter.", Probability: 1}, 
	{Text: "Bat man on upper level of Trade Quarter.", Probability: 1},
]}]});
export const ABOM_GOSSIP_BATTLEMASTER = buildGossip({SimpleText: "You go to Royal Quarter.  They all there, in circle around room."});
export const ABOM_GOSSIP_GUILD = buildGossip({Texts: [{Texts: [
	{Text: "Yep, you looking for Christopher Drakul in Trade Quarter.  He on eastern platform.", Probability: 1}, 
	{Text: "We join guild?  No?  Ok, you find Guild Master on east platform in Trade Quarter.", Probability: 1},
]}]});
export const ABOM_GOSSIP_INN = buildGossip({SimpleText: "Inkeeper Normal on upper ring of Trade Quarter is one to talk to."});
export const ABOM_GOSSIP_LOCKSMITH = buildGossip({SimpleText: "Him Walter Soref.  Work in Rogue District.  He make keys."});
export const ABOM_GOSSIP_MAILBOX = buildGossip({SimpleText: "Mailbox in middle of city, Trade Quarter, upper ring... next to inn."});
export const ABOM_GOSSIP_STABLE = buildGossip({Texts: [{Texts: [
	{Text: "Us want lots of pets.  Anya Maulray help you take care of them.  You find her at inn, upper ring of Trade Quarter.", Probability: 1}, 
	{Text: "Anya Maulray at inn on upper ring of Trade Quarter.", Probability: 1},
]}]});
export const ABOM_GOSSIP_WEAPONMASTER = buildGossip({SimpleText: "Archibald who you look for.  He outside weapon merchant shop on inner ring of War Quarter."});
export const ABOM_GOSSIP_ZEPPELIN = buildGossip({Texts: [{Texts: [
	{Text: "Little goblin on top of building north of Ruins of Lordaeron.  Leave Undercity and you go there.", Probability: 1}, 
	{Text: "Us see balloon north of ruins up above.  It take you to far off places.", Probability: 1},
]}]});
export const ABOM_GOSSIP_CLASS_TRAINERS = buildGossip({
	SimpleText: "Which trainer do you seek?",
	Options: [{
		SimpleText: "Mage", POI: 331, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Us know where they are!  Skull building in Magic Quarter on outer ring of city."}
	}, {
		SimpleText: "Paladin", POI: 330, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Us no like paladins.  Elf lady come to city, stay in Royal Quarter.  Her paladin.  You talk, learn paladin things."}
	}, {
		SimpleText: "Priest", POI: 332, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Priest trainer?  You go to outer ring of War Quarter and look for them there."}
	}, {
		SimpleText: "Rogue", POI: 333, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Rogues in building on outer ring of Rogues' Quarter."}
	}, {
		SimpleText: "Warlock", POI: 334, Icon: GossipIcon.CHAT,
		GossipLink: {Texts: [{Texts: [
			{Text: "Us want felhound for pet.  We feed it and treat it good and teach it plat fetch.  You find Warlocks in Magic Quarter on outer ring of city.", Probability: 1}, 
			{Text: "Warlock trainers in Magic Quarter in building on outer ring with Mages.", Probability: 1},
		]}]}
	}, {
		SimpleText: "Warrior", POI: 335, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "In building of War Quarter on outer ring of city."}
	}]
});
export const ABOM_GOSSIP_PROFESSION_TRAINERS = buildGossip({
	SimpleText: "Which profession?",
	Options: [{
		SimpleText: "Alchemy", POI: 336, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "You look in The Apothecarium.  That where Doctor Herbert Halsey and Doctor Marsh practice."}
	}, {
		SimpleText: "Blacksmithing", POI: 337, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "James Van Brunt in War Quarter on inner ring."}
	}, {
		SimpleText: "Cooking", POI: 338, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "That Eunice Burch in Trade Quarter."}
	}, {
		SimpleText: "Enchanting", POI: 339, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Lady teach you make magic items.  She at inner ring of The Apothecarium."}
	}, {
		SimpleText: "Engineering", POI: 340, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Franklin Lloyd in Rogues' Quarter on outer ring of Undercity."}
	}, {
		SimpleText: "First Aid", POI: 341, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Us know her good.  She Mary Edras at inner ring of Rogues' Quarter."}
	}, {
		SimpleText: "Fishing", POI: 342, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "You not miss Armand Cromwell in Magic Quarter.  He stand on dock."}
	}, {
		SimpleText: "Herbalism", POI: 343, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "You look for Martha Alliestar.  She on inner ring of The Apothecarium."}
	}, {
		SimpleText: "Inscription", POI: 344, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "You go find Margaux Parchley.  She pretty lady in The Apothecarium."}
	}, {
		SimpleText: "Leatherworking", POI: 345, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Him's at inner ring of Rogues' Quarter."}
	}, {
		SimpleText: "Mining", POI: 347, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Go to inner ring of War Quarter.  Brom Killian there."}
	}, {
		SimpleText: "Skinning", POI: 346, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "Us have skinning hook.  We get it from Killian Hagey who teach us how to skin kills.  You have nice skin.  You find him on inner ring of Rogues' Quarter."}
	}, {
		SimpleText: "Tailoring", POI: 348, Icon: GossipIcon.CHAT,
		GossipLink: {SimpleText: "You look for Josef Gregorian.  He in Magic Quarter on inner ring side of green canal."}
	}]
});

var ag = std.Gossip.load(2849);
ag.Options.getIndex(0).Gossip.set(ABOM_GOSSIP_AUCTION_HOUSE);
ag.Options.getIndex(1).Gossip.set(ABOM_GOSSIP_BANK);
ag.Options.getIndex(2).Gossip.set(ABOM_GOSSIP_BARBER);
ag.Options.getIndex(3).Gossip.set(ABOM_GOSSIP_BAT_HANDLER);
ag.Options.getIndex(4).Gossip.set(ABOM_GOSSIP_BATTLEMASTER);
ag.Options.getIndex(5).Gossip.set(ABOM_GOSSIP_GUILD);
ag.Options.getIndex(6).Gossip.set(ABOM_GOSSIP_INN);
ag.Options.getIndex(7).Gossip.set(ABOM_GOSSIP_LOCKSMITH);
ag.Options.getIndex(8).Gossip.set(ABOM_GOSSIP_MAILBOX);
ag.Options.getIndex(9).Gossip.set(ABOM_GOSSIP_STABLE);
ag.Options.getIndex(10).Gossip.set(ABOM_GOSSIP_WEAPONMASTER);
ag.Options.getIndex(11).Gossip.set(ABOM_GOSSIP_ZEPPELIN);
ag.Options.getIndex(12).Gossip.set(ABOM_GOSSIP_CLASS_TRAINERS);
ag.Options.getIndex(13).Gossip.set(ABOM_GOSSIP_PROFESSION_TRAINERS);
