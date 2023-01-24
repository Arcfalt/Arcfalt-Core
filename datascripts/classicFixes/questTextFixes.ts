import { std } from "wow/wotlk";

// File to handle small fixes to quest text in trinitycore

// Fix second Gakin's Summons quest getting it's complete text mixed up with the first quest of the same name
std.Quests.load(1717).CompleteText.set(
	{enGB:"I'm glad someone was able to get a hold of you, $n. I was beginning to fear the worst. It would be a shame to lose you, after the time we've invested in you.$b$bWe can talk later, though. Your training is the only important thing now."}
);

// Fixed Hallowed Rune always saying lass instead of using gendered lad/lass terms
std.Quests.load(3110).IncompleteText.set(
	{enGB:"Ach! Ya made it, $N! Wonderful!$B$BI was gonna say, I was about to lose faith that ye'd arrive at all... get it, lose faith? It's a joke, $Glad:lass;... aww, nevermind. Ya didn't come here for me bad jokes anyway."}
);