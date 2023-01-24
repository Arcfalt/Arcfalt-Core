import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { WorldMapAreaIDs } from "../../../commonIds";
import { appendQuest, buildQuest } from "../../../questBuilder";
import { NE_WLK_DARNASSUS_MAIN, NE_WLK_DARNASSUS_SATYR, NE_WLK_DARNASSUS_SIDEKICK, NE_WLK_TRAINER_START } from "./spawns";

// Intro Quest
buildQuest({
	Tag: 'ne-wlk-quest-starter',
	CopyFrom: 3120,
	ClassMask: ClassMask.WARLOCK,
	StartNpc: 2079,
	EndNpc: NE_WLK_TRAINER_START.ID,
	AddEndPoi: true,
	PoiWorldMapArea: WorldMapAreaIDs.Teldrassil,
	Title: "Foul Sigil",
	PickupText: "This sigil was picked up by one of the sentinels around the back of Aldrassil. It seems to be encrypted and addressed to you, perhaps a messenger dropped it?",
	IncompleteText: "I'm glad you got my sigil, $N. I was watching you fight with curiosity, but you caught my attention with that magic you were using...",
	CompleteText: "Heh. Well, in any case, your secrets are safe with me, friend. Always love watching a few more of the old arcane secrets slip back into your people's society...$B$BAs you grow more powerful, return to me and I will teach you more about our ways. And if anyone tells you to stop? ...Well, what are they gonna do about it, hey?",
	ObjectiveText: "Read the Foul Sigil and find its mystery sender in Shadowglen.",
	ClearItemObjectives: true,
	DeliveryItem: {
		Tag: 'ne-wlk-item-quest-starter',
		CopyFrom: 9580,
		Name: "Foul Sigil",
		PageTextSimple: "Not only do you go against your societal values to seek out the arcane, you delve head first into the dark arts to boot. I'd leave a tip for the guards, but then where would the fun be in that... Seek me out behind Aldrassil and I'll show you how much further you can go.$B$B- Sebrul, Warlock Trainer",
	}
});

// Voidwalker Quest
buildQuest({
	Tag: 'ne-wlk-quest-voidwalker',
	CopyFrom: 1715,
	StartNpc: NE_WLK_DARNASSUS_SIDEKICK.ID,
	EndNpc: 6122,
	AddEndPoi: true,
	PoiWorldMapArea: WorldMapAreaIDs.Stormwind,
	Title: "Summons from Beyond",
	PickupText: "I'm impressed to see such promising use of the arcane from another, here in the middle of elven lands. As much as I love your drive to seek your true destiny against the wishes of the ignorant fools that surround you, if you want to progress in your training, you'll have to seek it elsewhere.$B$BLuckily, in Stormwind we've established a formidable base of power. Look for Gakin in the basement of the Slaughtered Lamb. Once, I would have had to send you running halfway across the continent, but these days you can catch a boat straight there.",
	IncompleteText: "Sent by Veneta, were you? Always appreciated her eye for talent, and you look like you don't disappoint. Still, with all the increased traffic, we're sure to attract attention one day soon. Let's hope you're worth the trouble.",
});

// Gakin's Summons (Succubus Variant)
//std.Quests.load(1717).Questgiver.addCreatureStarter(NE_WLK_DARNASSUS_SIDEKICK.ID);
appendQuest(1717, {StartNpc: NE_WLK_DARNASSUS_SIDEKICK.ID});

// Seeking Strahad
//std.Quests.load(1798).Questgiver.addCreatureStarter(NE_WLK_DARNASSUS_SIDEKICK.ID);
appendQuest(1798, {StartNpc: NE_WLK_DARNASSUS_SIDEKICK.ID});

// In Search of Menara Voidrender
// copyBreadcrumbQuest("ne-wlk-quest-felhunter", 4736, NE_WLK_DARNASSUS_MAIN.ID, 6266, undefined, undefined,
// 	"Ah, Eraelleas sent you. Good. Then word does reach far enough to find future students. This pleases me.$b$bIt is typical of our kind, $n, to band together, regardless of race. It is especially important since those we deal with most do not discriminate in their malice if we fail to appease them or control them properly.$b$bI feel you've learned a great many things, and if you are willing, I would help you create tools to compliment your skills."
// );
buildQuest({
	Tag: 'ne-wlk-quest-felhunter',
	CopyFrom: 4736,
	StartNpc: NE_WLK_DARNASSUS_MAIN.ID,
	EndNpc: 6266,
	AddEndPoi: true,
	PoiWorldMapArea: WorldMapAreaIDs.Barrens,
	IncompleteText: "Ah, Eraelleas sent you. Good. Then word does reach far enough to find future students. This pleases me.$b$bIt is typical of our kind, $n, to band together, regardless of race. It is especially important since those we deal with most do not discriminate in their malice if we fail to appease them or control them properly.$b$bI feel you've learned a great many things, and if you are willing, I would help you create tools to compliment your skills.",
});

// Knowledge of the Orb of Orahil
//std.Quests.load(4965).Questgiver.addCreatureStarter(NE_WLK_DARNASSUS_MAIN.ID);
appendQuest(4965, {StartNpc: NE_WLK_DARNASSUS_MAIN.ID});

// An Imp's Request
//std.Quests.load(8419).Questgiver.addCreatureStarter(NE_WLK_DARNASSUS_SATYR.ID);
appendQuest(8419, {StartNpc: NE_WLK_DARNASSUS_SATYR.ID});