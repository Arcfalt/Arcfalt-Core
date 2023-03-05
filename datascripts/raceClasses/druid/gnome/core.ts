import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { A_DRU_START_CHEST, A_DRU_START_SHIRT } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.GNOME,
	EquipIdList: [35, A_DRU_START_CHEST.ID, A_DRU_START_SHIRT.ID, 6124],
})

// Bear form chain race mask allow (starter in dwarf file)
std.Quests.load(5921).RaceMask.GNOME.set(1);
std.Quests.load(5929).RaceMask.GNOME.set(1);
std.Quests.load(5931).RaceMask.GNOME.set(1);
std.Quests.load(6001).RaceMask.GNOME.set(1);

// Aquatic form chain race mask allow (starter in dwarf file)
std.Quests.load(26).RaceMask.GNOME.set(1);
std.Quests.load(29).RaceMask.GNOME.set(1);
std.Quests.load(272).RaceMask.GNOME.set(1);
std.Quests.load(5061).RaceMask.GNOME.set(1);
