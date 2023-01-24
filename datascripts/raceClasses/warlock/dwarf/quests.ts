import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { WorldMapAreaIDs } from "../../../commonIds";
import { buildQuest } from "../../../questBuilder";

// Intro Quest
buildQuest({
	Tag: 'dw-wlk-quest-starter',
	CopyFrom: 3106,
	ClassMask: ClassMask.WARLOCK,
	StartNpc: 658,
	EndNpc: 460,
	AddEndPoi: true,
	PoiWorldMapArea: WorldMapAreaIDs.DunMorogh,
	Title: "Tainted Rune",
	PickupText: "While you were helping me out, this rune was given to me to pass on to you. Take some time to read it when you have a chance. I'm thinkin' it came from the warlock trainer Alamar. Take a gander at it and go find him inside Anvilmar when you've a chance.$B$BAnd watch yerself, $N, your kind ain't too trusted 'round these parts.",
	IncompleteText: "Wonderful! You got my memorandum, obviously.$B$BIgnore the fools around you, $N. The Holy Light?! The sword and shield?! These aren't paths for ones as open minded as us. Look at what \"normal\" magic did to my home. Coupled with those damned tinkerers, my race almost became extinct, and we had to rely on your people to survive. Now people like you and I take up learning new powers to protect what's ours, and we're treated like second-class citizens! Have you seen the way they look at us?",
	CompleteText: "But none of that matters. What matters is that you've seen your own Holy Light! You know where power truly comes from. You realize that having our own allies is much more... prudent. Special allies. Allies that, no matter the task, will obey till their last breath.$B$BAnd that's where I come in, $N. I can train you in the beginnings of those special powers. Seek me out often and I will do what I can to teach you more spells.",
	ObjectiveText: "Read the Tainted Rune and speak to Alamar Grimm inside Anvilmar above Coldridge Valley.",
	ClearItemObjectives: true,
	DeliveryItem: {
		Tag: 'dw-wlk-item-quest-starter',
		CopyFrom: 9543,
		Name: "Tainted Rune",
		PageTextSimple: "ATTENTION:$B$BRemain Silent! Don't look around at anyone! Someone could be watching you this very moment.$B$BMy name is Alamar Grimm, $N. I train those willing to seek knowledge and greater power from... worlds beyond. I've been asked to get in touch with you discretely and inform you that I can train you further in a real form of magic.$B$BWhen you can, come find me in the back of Anvilmar.$B$B-Alamar Grimm, Warlock Trainer",
	}
});