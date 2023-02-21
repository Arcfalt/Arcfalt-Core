import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs, AddonBytes2IDs, AddonBytes1IDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";
import { H_WLK_START_CHEST } from "../all/startItems";

buildRaceClassPair({
	Class: ClassIDs.WARLOCK,
	Race: RaceIDs.TAUREN,
	EquipIdList: [H_WLK_START_CHEST.ID, 1396, 35]
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.WARLOCK,
	ClassText: "Look what we have here, another study in the dark arts.  Always good to see a like-minded individual...  What can I do for you?",
	NotClassText: "Leave me be, $c!",
}});

buildNpc({
	Tag: 'ta-wlk-trainer-start',
	CopyFrom: 2126,

	Name: 'Banhwothioh Clawshadow',
	Subname: 'Warlock Trainer',
	Spawn: {map:1,x:-2850.767334,y:-262.234283,z:54.388565,o:2.884652},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.WarlockLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taWlkStart",
	BakedNpcSound: NpcSoundIDs.TaurenMaleWarrior,
	EquipMainHand: 880,
});

buildNpc({
	Tag: 'ta-wlk-trainer-mid',
	CopyFrom: 2127,

	Name: 'Hemaa Darktotem',
	Subname: 'Warlock Trainer',
	Spawn: {map:1,x:-2384.920898,y:-345.601776,z:-8.956914,o:0.001923},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Warlock,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3329,
	GuardGossipOption: 'Warlock',
	GuardGossipPoiName: 'Hemaa Darktotem',
	GuardGossipText: "You won't find much support around here for that kind of dark magic...  Hmph!  There's a Grimtotem called Hemaa Darktotem hiding away in the back of the inn, on the western side of Bloodhoof Village.",

	BakedNpc: "taWlkMid",
	BakedNpcSound: NpcSoundIDs.TaurenMaleElder,
	EquipMainHand: 7714,
	EquipOffHand: 4836,
});

buildNpc({
	Tag: 'ta-wlk-trainer-main',
	CopyFrom: 4563,

	Name: 'Bodaway Flametail',
	Subname: 'Warlock Trainer',
	Spawn: {map:1,x:-1060.867065,y:-204.079910,z:159.030304,o:5.611282},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Warlock,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 740,
	GuardGossipOption: 'Warlock',
	GuardGossipPoiName: 'Grimtotem Camp',
	GuardGossipText: "Dark magic has no place in this sacred place!  If you truly want to seek a practitioner, go find the Grimtotem camp on the Elder Rise, some of their number practice such things and refuse to leave.",

	BakedNpc: "taWlk1",
	BakedNpcSound: NpcSoundIDs.TaurenMaleElder,
	EquipMainHand: 9477,
});

buildNpc({
	Tag: 'ta-wlk-trainer-0',
	CopyFrom: 4564,

	Name: 'Enola Heavybreath',
	Subname: 'Warlock Trainer',
	Spawn: {map:1,x:-1057.287842,y:-207.371872,z:159.031464,o:2.289040},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Warlock,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taWlk2",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleStandard,
	EquipMainHand: 7714,
	EquipOffHand: 4836,
});

buildNpc({
	Tag: 'ta-wlk-trainer-1',
	CopyFrom: 4565,

	Name: 'Tennoottua Firecreek',
	Subname: 'Warlock Trainer',
	Spawn: {map:1,x:-1073.144897,y:-208.737610,z:159.028946,o:2.836207},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Warlock,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taWlk3",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleOfficial,
	EquipMainHand: 3277,
	AddonBytes1: AddonBytes1IDs.Sitting,
	AddonBytes2: AddonBytes2IDs.UNARMED,
});
