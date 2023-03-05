import { std } from "wow/wotlk";
import { RaceMask } from "wow/wotlk/std/Race/RaceType";
import { WorldMapAreaIDs } from "../../../commonIds";
import { appendQuest, buildQuest } from "../../../questBuilder";
import { DWARF_DRUID_IRONFORGE_1, DWARF_DRUID_IRONFORGE_2, DWARF_DRUID_KHARANOS } from "./core";

// Bear form chain race mask allow
std.Quests.load(5921).RaceMask.DWARF.set(1);
std.Quests.load(5929).RaceMask.DWARF.set(1);
std.Quests.load(5931).RaceMask.DWARF.set(1);
std.Quests.load(6001).RaceMask.DWARF.set(1);

// Aquatic form chain race mask allow
std.Quests.load(26).RaceMask.DWARF.set(1);
std.Quests.load(29).RaceMask.DWARF.set(1);
std.Quests.load(272).RaceMask.DWARF.set(1);
std.Quests.load(5061).RaceMask.DWARF.set(1);

// Bear form chain starter
buildQuest({
    Tag: "dw-dru-bear-breadcrumb",
    CopyFrom: 5923,
    RaceMask: RaceMask.DWARF | RaceMask.GNOME,
    StartNpcs: [DWARF_DRUID_KHARANOS.ID, DWARF_DRUID_IRONFORGE_1.ID],
    EndNpc: 4217,
    AddEndPoi: true,
    PoiWorldMapArea: WorldMapAreaIDs.Darnassis,
    PickupText: "Hey there, $n!$b$bI've been told Mathrengyl Bearwalker, one of our elven allies from across the sea, wants to speak with you.  We Wildhammer don't do as much animal shapeshifting as the elves do, so this should be an interesting opportunity for you!  Mathrengyl is the direct assistant to the Arch Druid of the Cenarion Circle, so you should definitely go see him.$b$bHe's in the Cenarion Enclave of Darnassus, up on the second floor where the druids train there.  You'll have to take the Deeprun Tram to Stormwind, then catch a boat to Darnassus.  I'm sure the long trip will be worth it!",
    CompleteText: "I'm glad you found your way here today, young $c.  The time has come for you to take a large step into a much larger world.$b$bInside each of Cenarius' children is the call to serve nature.  Animals and plants are our friends as well as our charges.  We choose to devote our lives as preservers of balance for their sakes as well as our own.  Your first step into this world will be to learn of the ways of the bear, and to learn strength of body and heart.$b$bReady yourself!",
    BreadcrumbFor: 5921,
});

// Torwa Pathfinder starter
appendQuest(9063, {
    StartNpc: DWARF_DRUID_IRONFORGE_2.ID,
})