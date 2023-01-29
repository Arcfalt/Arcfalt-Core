import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs, AddonBytes1IDs, AddonBytes2IDs } from "../../../commonIds";
import { buildItem } from "../../../util/itemBuilder";
import { appendNpc, buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.DRUID,
	Race: RaceIDs.BLOODELF,
	EquipIdList: [buildItem({
		Tag: 'be-dru-gear-chest-starter',
		CopyFrom: 20897,
		DisplayId: 37925,
		Name: "Naturalist's Tunic",
	}).ID,
	buildItem({
		Tag: 'be-dru-gear-legs-starter',
		CopyFrom: 20896,
		DisplayId: 37928,
		Name: "Naturalist's Pants",
	}).ID,
	buildItem({
		Tag: 'be-dru-gear-feet-starter',
		CopyFrom: 20898,
		DisplayId: 40720,
		Name: "Naturalist's Shoes",
	}).ID,
	20978]
})

buildNpc({
	Tag: 'be-dru-trainer-start',
	CopyFrom: 3060,

	Name: "It'thema Everrest",
	Subname: 'Druid Trainer',
	Spawn: {map:530,x:10383.441406,y:-6419.398926,z:38.532345,o:2.898974},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, $g brother : sister;.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.  The past still has many lessons to teach us.",
	TrainerGossipNotClass: "We work to preserve the balance of nature, $c.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.",
	
	BakedNpc: "beDruStart",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleStandard,
	EquipMainHand: 20836,
	EquipOffHand: 3419,
});

buildNpc({
	Tag: 'be-dru-trainer-mid',
	CopyFrom: 3064,

	Name: 'Camthan Rosegift',
	Subname: 'Druid Trainer',
	Spawn: {map:530,x:9488.136719,y:-6895.868652,z:28.347197,o:0.757580},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, $g brother : sister;.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.  The past still has many lessons to teach us.",
	TrainerGossipNotClass: "We work to preserve the balance of nature, $c.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.",
	
	GuardGossipOrigin: 8196,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Falconwing Square, Druid Trainer',
	GuardGossipText: "You'll find Camthan Rosegift on the second floor of Delaniel's inn.  He helps the herbs in the kitchen grow faster.  Is that what you're looking for?",

	BakedNpc: "beDruMid",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleStandard,
	EquipMainHand: 20839,
});

buildNpc({
	Tag: 'be-dru-trainer-s1',
	CopyFrom: 3036,

	Name: 'Camnian Glowshade',
	Subname: 'Druid Trainer',
	Spawn: {map:530,x:9696.825195,y:-7252.784180,z:15.008853,o:3.720949},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, $g brother : sister;.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.  The past still has many lessons to teach us.",
	TrainerGossipNotClass: "We work to preserve the balance of nature, $c.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.",
	
	BakedNpc: "beDru1",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleNoble,
	EquipMainHand: 25232,
	AddonBytes2: AddonBytes2IDs.UNARMED,
});

buildNpc({
	Tag: 'be-dru-trainer-s2',
	CopyFrom: 3033,

	Name: 'Fisia Sharpflow',
	Subname: 'Druid Trainer',
	Spawn: {map:530,x:9705.045898,y:-7274.342285,z:16.355202,o:2.837368},
	Faction: FactionTemplateValues.SILVERMOON,

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, $g brother : sister;.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.  The past still has many lessons to teach us.",
	TrainerGossipNotClass: "We work to preserve the balance of nature, $c.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.",
	
	BakedNpc: "beDru2",
	BakedNpcSound: NpcSoundIDs.BloodElfFemaleStandard,
	EquipMainHand: 25232,
	AddonBytes2: AddonBytes2IDs.UNARMED,
});

appendNpc(16655, {
	Tag: 'be-dru-trainer-replacer',
	Name: 'Kraetheol Sparkfeather',
	Subname: 'Druid Trainer',

	TrainerClassMask: ClassMask.DRUID,
	TrainerID: TrainerID.Druid,
	TrainerGossipClass: "Welcome, $g brother : sister;.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.  The past still has many lessons to teach us.",
	TrainerGossipNotClass: "We work to preserve the balance of nature, $c.  Though many here dissaprove in recent times, it is my belief that we should not forget the ways of old.",
	
	GuardGossipOrigin: 7649,
	GuardGossipOption: 'Druid',
	GuardGossipPoiName: 'Silvermoon City, Druid Trainer',
	GuardGossipText: "Oh.  One of... those.  If you're looking to waste your time with that useless remnant of the past and play pretend with nature or whatever it is druids do, you can find Kraetheol Sparkfeather on the north end of the Walk of Elders.  You can't miss him, unfortunately.",
	AppendExistingSpawn: true,

	BakedNpc: "beDruMain",
	BakedNpcSound: NpcSoundIDs.BloodElfMaleStandard,
	EquipMainHand: 30010,
	AddonBytes2: AddonBytes2IDs.UNARMED,
});
