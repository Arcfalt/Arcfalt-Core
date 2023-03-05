import { std } from "wow/wotlk";

// File to handle small fixes to quest text in trinitycore

// Fix second Gakin's Summons quest getting it's complete text mixed up with the first quest of the same name
std.Quests.load(1717).CompleteText.set(
	{enGB:"I'm glad someone was able to get a hold of you, $n.  I was beginning to fear the worst.  It would be a shame to lose you, after the time we've invested in you.$b$bWe can talk later, though.  Your training is the only important thing now."}
);

// Fixed Hallowed Rune always saying lass instead of using gendered lad/lass terms
std.Quests.load(3110).IncompleteText.set(
	{enGB:"Ach!  Ya made it, $N!  Wonderful!$B$BI was gonna say, I was about to lose faith that ye'd arrive at all... get it, lose faith?  It's a joke, $Glad:lass;... aww, nevermind.  Ya didn't come here for me bad jokes anyway."}
);

// Fixed Kor'kron Overseers having a 50% chance of saying old abomination gossip text when asked where the skinning trainer is by a female player character
std.NPCText.load(14923).get(1).Text.Female.enGB.set(std.NPCText.load(14923).get(1).Text.Male.enGB.get());

// Fixed "Heeding the Call" not correctly being flagged as a breadcrumb for "Moonglade" despite the latter being acceptable without the former
std.Quests.load(5923).BreadcrumbForQuest.set(5921);

// Fix Body and Heart missing progress text
std.Quests.load(6001).IncompleteText.set({enGB:"When you have faced the challenge that lies before you, your understanding of strength of body and strength of heart will be fully realized.  Until that time, I cannot help you further."});