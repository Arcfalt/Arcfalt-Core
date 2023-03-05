import { std } from "wow/wotlk";
import { RaceMask } from "wow/wotlk/std/Race/RaceType";
import { WorldMapAreaIDs } from "../../../commonIds";
import { buildQuest } from "../../../questBuilder";
import { HUMAN_DRUID_GOLDSHIRE, HUMAN_DRUID_STORMWIND } from "./core";

// Bear form chain race mask allow
std.Quests.load(5921).RaceMask.HUMAN.set(1);
std.Quests.load(5929).RaceMask.HUMAN.set(1);
std.Quests.load(5931).RaceMask.HUMAN.set(1);
std.Quests.load(6001).RaceMask.HUMAN.set(1);

// Aquatic form chain race mask allow
std.Quests.load(26).RaceMask.HUMAN.set(1);
std.Quests.load(29).RaceMask.HUMAN.set(1);
std.Quests.load(272).RaceMask.HUMAN.set(1);
std.Quests.load(5061).RaceMask.HUMAN.set(1);

buildQuest({
    Tag: "hu-dru-bear-breadcrumb",
    CopyFrom: 5923,
    RaceMask: RaceMask.HUMAN,
    StartNpcs: [HUMAN_DRUID_GOLDSHIRE.ID, HUMAN_DRUID_STORMWIND.ID],
    EndNpc: 4217,
    AddEndPoi: true,
    PoiWorldMapArea: WorldMapAreaIDs.Darnassis,
    PickupText: "Excuse me, $n!$b$bI've been informed that Mathrengyl Bearwalker, one of our Night Elven allies from across the sea, has expressed his desire to speak with you.  It seems your training as a druid is about to take a new turn, he is interested in training you personally!  Mathrengyl is the direct assistant to the Arch Druid of the Cenarion Circle, and he's the one who first insisted to his people that we humans should be taught druidism.$b$bHe is located in the Cenarion Enclave of Darnassus, on the second floor of the building where the druids reside.  You can travel to Darnassus by boat, from the Stormwind docks!",
    CompleteText: "I'm glad you found your way here today, young $c.  The time has come for you to take a large step into a much larger world.$b$bInside each of Cenarius' children is the call to serve nature.  Animals and plants are our friends as well as our charges.  We choose to devote our lives as preservers of balance for their sakes as well as our own.  Your first step into this world will be to learn of the ways of the bear, and to learn strength of body and heart.$b$bReady yourself!",
    BreadcrumbFor: 5921,
});