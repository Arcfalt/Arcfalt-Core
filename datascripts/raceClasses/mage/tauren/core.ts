import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { FactionTemplateValues } from "wow/wotlk/std/Faction/FactionTemplates";
import { RaceIDs } from "wow/wotlk/std/Race/RaceType";
import { TrainerID, NpcSoundIDs } from "../../../commonIds";
import { buildGossip } from "../../../gossipBuilder";
import { buildItem } from "../../../itemBuilder";
import { buildNpc } from "../../../npcBuilder";
import { buildRaceClassPair } from "../../../raceClassBuilder";

buildRaceClassPair({
	Class: ClassIDs.MAGE,
	Race: RaceIDs.TAUREN,
	EquipIdList: [buildItem({
		Tag: 'ta-mag-gear-chest-starter',
		CopyFrom: 6140,
		DisplayId: 19110,
	}).ID, 1359, 35]
});

const DEFAULT_GOSSIP = buildGossip({AddClassTrainer: {ClassMask: ClassMask.MAGE,
	ClassText: "The path of a mystic is only for those who are ready to never waver in their focus.  The arcane is a dangerous force of the world, but through careful study and rigorous training, it can be just as safe as any other magic in the right hands.",
	NotClassText: "May you find understanding in this world, $c.",
}});

buildNpc({
	Tag: 'ta-mag-trainer-start',
	CopyFrom: 5884,

	Name: 'Galilahi Cloudwater',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:-2887.170410,y:-206.943466,z:54.820854,o:5.063198},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.MageLow,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taMagStart",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleStandard,
	EquipMainHand: 1155,
});

buildNpc({
	Tag: 'ta-mag-trainer-mid',
	CopyFrom: 5880,

	Name: 'Sahale Runetalon',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:-2315.873047,y:-441.794647,z:-5.438362,o:6.140603},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Mage,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 3329,
	GuardGossipOption: 'Mage',
	GuardGossipPoiName: 'Sahale Runetalon',
	GuardGossipText: "The arcane ways are rare here, but if it is one of our mystics that you seek, you will find Sahale Runetalon in the large tent on the east side of Bloodhoof Village.",

	BakedNpc: "taMagMid",
	BakedNpcSound: NpcSoundIDs.TaurenMaleElder,
	EquipMainHand: 9477,
});

std.CreatureTemplates.load(3064).Spawns.getIndex(0).Position.set({map:1,x:-2316.292725,y:-444.718628,z:-5.438362,o:6.005514});

buildNpc({
	Tag: 'ta-mag-trainer-main',
	CopyFrom: 5882,

	Name: 'Shaiqilu Flamewind',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:-1032.434082,y:223.677765,z:135.574265,o:0.201435},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Mage,
	Gossip: DEFAULT_GOSSIP,

	GuardGossipOrigin: 740,
	GuardGossipOption: 'Mage',
	GuardGossipPoiName: 'Mystic Encampment',
	GuardGossipText: "A follower of the arcane are you?  It is not a widespread profession in our lands, but you can find our mystics on the Spirits Rise, in a modest tent just outside the Hall of Spirits.",

	BakedNpc: "taMag1",
	BakedNpcSound: NpcSoundIDs.TaurenMaleElder,
	EquipMainHand: 15854,
});

buildNpc({
	Tag: 'ta-mag-trainer-0',
	CopyFrom: 5883,

	Name: 'Opa Fullbinder',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:-1036.212402,y:213.293228,z:135.892548,o:1.355963},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Mage,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taMag2",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleStandard,
	EquipMainHand: 20654,
});

buildNpc({
	Tag: 'ta-mag-trainer-1',
	CopyFrom: 5885,

	Name: 'Omtata Summergust',
	Subname: 'Mage Trainer',
	Spawn: {map:1,x:-1038.687866,y:221.656403,z:136.129196,o:5.225363},
	Faction: FactionTemplateValues.THUNDER_BLUFF,

	TrainerID: TrainerID.Mage,
	Gossip: DEFAULT_GOSSIP,

	BakedNpc: "taMag3",
	BakedNpcSound: NpcSoundIDs.TaurenFemaleOfficial,
	EquipMainHand: 20654,
});
