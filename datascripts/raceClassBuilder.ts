import { EnumCon } from "wow/data/cell/cells/EnumCell";
import { std } from "wow/wotlk";
import { ClassIDs } from "wow/wotlk/std/Class/ClassIDs";
import { ClassRacePair } from "wow/wotlk/std/Class/ClassRaceData/ClassRaces";
import { StartGear } from "wow/wotlk/std/Class/ClassRaceData/ClassRaceStartGear";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { ItemInventoryType } from "wow/wotlk/std/Item/ItemInventoryType";
import { RaceIDs, RaceMask } from "wow/wotlk/std/Race/RaceType";
import { EquipSkill } from "wow/wotlk/std/SkillLines/EquipSkills";
import { MODNAME } from "./datascripts";
import { enableEquipSkillNaive } from "./enableEquipSkill";

export declare type RaceClassBuilder = {
	Class: ClassID,
	Race: RaceID,

	EquipIdList?: number[],
	EquipCopyFromRace?: RaceID,
	EquipIdDestinationList?: {item: number, slot?: EnumCon<keyof typeof ItemInventoryType>}[],
	SkipEquipHearthstone?: boolean,
	
	EquipSkills?: EquipSkill[],
}

export const ARCANE_TORRENT_RAGE = std.Spells.create(MODNAME, 'be-war-arcane-torrent-rage', 25046);
ARCANE_TORRENT_RAGE.Description.enGB.set('Silence all enemies within 8 yards for 2 sec and restores 15 of your Rage.  Non-player victim spellcasting is also interrupted for 3 sec.');
ARCANE_TORRENT_RAGE.Effects.mod(1, eff => {
	eff.Type.ENERGIZE.set().PowerType.RAGE.set().PowerBase.set(150, "EFFECTIVE");
})
ARCANE_TORRENT_RAGE.SkillLines.addGet().ClassMask.clearAll().RaceMask.add("BLOODELF").AcquireMethod.set("LEARN_ON_CREATE").SkillLine.set(756);

export const BLESSING_OF_THE_NAARU_ROGUE = std.Spells.create(MODNAME, 'dr-rog-blessing-of-the-naaru', 59543);
BLESSING_OF_THE_NAARU_ROGUE.Family.set(8);
BLESSING_OF_THE_NAARU_ROGUE.SkillLines.addGet().ClassMask.clearAll().RaceMask.add("DRAENEI").AcquireMethod.set("LEARN_ON_CREATE").SkillLine.set(760);
export const BLESSING_OF_THE_NAARU_WARLOCK = std.Spells.create(MODNAME, 'dr-wlk-blessing-of-the-naaru', 59548);
BLESSING_OF_THE_NAARU_WARLOCK.Family.set(5);
BLESSING_OF_THE_NAARU_WARLOCK.SkillLines.addGet().ClassMask.clearAll().RaceMask.add("DRAENEI").AcquireMethod.set("LEARN_ON_CREATE").SkillLine.set(760);
export const BLESSING_OF_THE_NAARU_DRUID = std.Spells.create(MODNAME, 'dr-dru-blessing-of-the-naaru', 59542);
BLESSING_OF_THE_NAARU_DRUID.Family.set(7);
BLESSING_OF_THE_NAARU_DRUID.SkillLines.addGet().ClassMask.clearAll().RaceMask.add("DRAENEI").AcquireMethod.set("LEARN_ON_CREATE").SkillLine.set(760);
export const SHADOW_RESISTANCE_ROGUE = std.Spells.create(MODNAME, 'dr-rog-shadow-resistance', 59536);
SHADOW_RESISTANCE_ROGUE.Family.set(8);
SHADOW_RESISTANCE_ROGUE.SkillLines.addGet().ClassMask.clearAll().RaceMask.add("DRAENEI").AcquireMethod.set("LEARN_ON_CREATE").SkillLine.set(760);
export const SHADOW_RESISTANCE_WARLOCK = std.Spells.create(MODNAME, 'dr-wlk-shadow-resistance', 59541);
SHADOW_RESISTANCE_WARLOCK.Family.set(5);
SHADOW_RESISTANCE_WARLOCK.SkillLines.addGet().ClassMask.clearAll().RaceMask.add("DRAENEI").AcquireMethod.set("LEARN_ON_CREATE").SkillLine.set(760);
export const SHADOW_RESISTANCE_DRUID = std.Spells.create(MODNAME, 'dr-dru-shadow-resistance', 59535);
SHADOW_RESISTANCE_DRUID.Family.set(7);
SHADOW_RESISTANCE_DRUID.SkillLines.addGet().ClassMask.clearAll().RaceMask.add("DRAENEI").AcquireMethod.set("LEARN_ON_CREATE").SkillLine.set(760);

export function buildRaceClassPair(b: RaceClassBuilder) {
	let classMask = getClassMask(b.Class);
	let raceMask = getRaceMask(b.Race);
	std.Classes.load(b.Class)
	.Races.add(raceMask)
	.Races.forEach((value, _index) =>
	{
		if (value.Race.get() != b.Race) return;
		setupStarterHotbar(value, setupSpecialRacial(value));
		if (b.EquipIdList) {
			value.Outfits.both((gear) => 
			{
				gear.Items.clearAll();
				if (b.EquipIdList) b.EquipIdList.forEach(element => {
					gear.Items.addAuto(element);
				});
				if (!b.SkipEquipHearthstone) gear.Items.addAuto(6948);
			});
		}
		else if (b.EquipIdDestinationList) {
			value.Outfits.both((gear) => 
			{
				gear.Items.clearAll();
				if (b.EquipIdDestinationList) b.EquipIdDestinationList.forEach(element => {
					gear.Items.addAuto(element.item, element.slot);
				});
				if (!b.SkipEquipHearthstone) gear.Items.addAuto(6948, "BAG");
			});
		}
		else if (b.EquipCopyFromRace) {
			let origGearM: StartGear;
			let origGearF: StartGear;
			std.Classes.load(b.Class).Races.forEach((value, _index) =>
			{
				if (value.Race.get() != b.EquipCopyFromRace) return;
				origGearM = value.Outfits.Male.get();
				origGearF = value.Outfits.Female.get();
			});
			value.Outfits.Male.mod((gear) => {
				gear.Items.clearAll();
				origGearM.Items.forEach((value, _index) => {
					if (!value.isClear() && value.Item.get() > 0) gear.Items.add(value.Item.get(), value.DisplayItem.get(), value.InventoryType.get());
				})
			})
			value.Outfits.Female.mod((gear) => {
				gear.Items.clearAll();
				origGearF.Items.forEach((value, _index) => {
					if (!value.isClear() && value.Item.get() > 0) gear.Items.add(value.Item.get(), value.DisplayItem.get(), value.InventoryType.get());
				})
			})
		}
	});
	if (b.EquipSkills) {
		b.EquipSkills.forEach(element => {
			enableEquipSkillNaive(element, classMask, raceMask);
		});
	}
}

function getClassMask(c: ClassID) : ClassMask {
	switch (c) {
		case ClassIDs.WARRIOR: return ClassMask.WARRIOR;
		case ClassIDs.PALADIN: return ClassMask.PALADIN;
		case ClassIDs.HUNTER: return ClassMask.HUNTER;
		case ClassIDs.ROGUE: return ClassMask.ROGUE;
		case ClassIDs.PRIEST: return ClassMask.PRIEST;
		case ClassIDs.DEATH_KNIGHT: return ClassMask.DEATH_KNIGHT;
		case ClassIDs.SHAMAN: return ClassMask.SHAMAN;
		case ClassIDs.MAGE: return ClassMask.MAGE;
		case ClassIDs.WARLOCK: return ClassMask.WARLOCK;
		case ClassIDs.DRUID: return ClassMask.DRUID;
		default: return ClassMask.WARRIOR;
	}
}

function getRaceMask(r: RaceID) : RaceMask {
	switch (r) {
		case RaceIDs.HUMAN: return RaceMask.HUMAN;
		case RaceIDs.ORC: return RaceMask.ORC;
		case RaceIDs.DWARF: return RaceMask.DWARF;
		case RaceIDs.NIGHTELF: return RaceMask.NIGHTELF;
		case RaceIDs.UNDEAD: return RaceMask.UNDEAD;
		case RaceIDs.TAUREN: return RaceMask.TAUREN;
		case RaceIDs.GNOME: return RaceMask.GNOME;
		case RaceIDs.TROLL: return RaceMask.TROLL;
		case RaceIDs.BLOODELF: return RaceMask.BLOODELF;
		case RaceIDs.DRAENEI: return RaceMask.DRAENEI;
		default: return RaceMask.HUMAN;
	}
}

function setupSpecialRacial(value: ClassRacePair) : number {
	let r: number = 0;
	switch (value.Race.get()) {
		case RaceIDs.ORC:
			switch (value.Class.get()) {
				case ClassIDs.MAGE:
				case ClassIDs.PRIEST:
					r = 33702;
					break;
				case ClassIDs.PALADIN:
					r = 33697;
					break;
			}
			break;
		case RaceIDs.BLOODELF:
			switch (value.Class.get()) {
				case ClassIDs.SHAMAN:
					r = 28730;
					break;
				case ClassIDs.DRUID:
					r = 28730;
					break;
				case ClassIDs.WARRIOR:
					r = ARCANE_TORRENT_RAGE.ID
					break;
			}
			break;
		case RaceIDs.DRAENEI:
			switch (value.Class.get()) {
				case ClassIDs.ROGUE:
					r = BLESSING_OF_THE_NAARU_ROGUE.ID;
					SHADOW_RESISTANCE_ROGUE.SkillLines.getIndex(0).ClassMask.add(getClassMask(value.Class.get()));
					std.Spells.load(6562).SkillLines.getIndex(0).ClassMask.add(getClassMask(value.Class.get()));
					break;
				case ClassIDs.DRUID:
					r = BLESSING_OF_THE_NAARU_DRUID.ID;
					SHADOW_RESISTANCE_DRUID.SkillLines.getIndex(0).ClassMask.add(getClassMask(value.Class.get()));
					std.Spells.load(28878).SkillLines.getIndex(0).ClassMask.add(getClassMask(value.Class.get()));
					break;
				case ClassIDs.WARLOCK:
					r = BLESSING_OF_THE_NAARU_WARLOCK.ID;
					SHADOW_RESISTANCE_WARLOCK.SkillLines.getIndex(0).ClassMask.add(getClassMask(value.Class.get()));
					std.Spells.load(28878).SkillLines.getIndex(0).ClassMask.add(getClassMask(value.Class.get()));
					break;
			}
			break;
	}
	if (r > 0) {
		std.Spells.load(r).SkillLines.getIndex(0).ClassMask.add(getClassMask(value.Class.get()));
	}
	return r;
}

function setupStarterHotbar(value: ClassRacePair, specialRacial?: number){
	let i: number = 0;
	switch (value.Class.get()) {
		case ClassIDs.WARRIOR:
			// warrior needs special stance handling but only blood elves need it added
			// so don't need to handle edge case of racial spell at end of hotbar
			value.Actions.addSpell(0, 6603);
			value.Actions.addSpell(1, 78);
			value.Actions.addSpell(72, 6603);
			value.Actions.addSpell(73, 78);
			i = 74;
			break;
		
		case ClassIDs.PALADIN:
			value.Actions.addSpell(0, 6603);
			value.Actions.addSpell(1, 21084);
			value.Actions.addSpell(2, 635);
			i = 3;
			break;
		
		case ClassIDs.HUNTER:
			value.Actions.addSpell(0, 6603);
			value.Actions.addSpell(1, 2973);
			value.Actions.addSpell(2, 75);
			i = 3;
			break;
		
		case ClassIDs.ROGUE:
			value.Actions.addSpell(0, 6603);
			value.Actions.addSpell(1, 1752);
			value.Actions.addSpell(2, 2098);
			value.Actions.addSpell(3, 2764);
			i = 4;
			break;
		
		case ClassIDs.PRIEST:
			value.Actions.addSpell(0, 585);
			value.Actions.addSpell(1, 2050);
			i = 2;
			break;
		
		case ClassIDs.DEATH_KNIGHT:
			// death knights can already be every race, ignoring
			break;
		
		case ClassIDs.SHAMAN:
			value.Actions.addSpell(0, 6603);
			value.Actions.addSpell(1, 403);
			value.Actions.addSpell(2, 331);
			i = 3;
			break;
		
		case ClassIDs.MAGE:
			value.Actions.addSpell(0, 133);
			value.Actions.addSpell(1, 168);
			i = 2;
			break;

		case ClassIDs.WARLOCK:
			value.Actions.addSpell(0, 686);
			value.Actions.addSpell(1, 687);
			i = 2;
			break;
		
		case ClassIDs.DRUID:
			value.Actions.addSpell(0, 5176);
			value.Actions.addSpell(1, 5185);
			i = 2;
			break;
		
		default:
			break;
	}
	switch (value.Race.get()) {
		case RaceIDs.HUMAN:
			value.Actions.addSpell(11, 59752);
			break;

		case RaceIDs.ORC:
			if (specialRacial) value.Actions.addSpell(i, specialRacial);
			break;

		case RaceIDs.DWARF:
			value.Actions.addSpell(i, 20594);
			value.Actions.addSpell(i + 1, 2481);
			break;

		case RaceIDs.NIGHTELF:
			value.Actions.addSpell(11, 58984);
			break;

		case RaceIDs.UNDEAD:
			value.Actions.addSpell(i, 20577)
			break;

		case RaceIDs.TAUREN:
			value.Actions.addSpell(i, 20549);
			break;

		case RaceIDs.GNOME:
			value.Actions.addSpell(11, 20589);
			break;

		case RaceIDs.TROLL:
			value.Actions.addSpell(i, 26297);
			break;

		case RaceIDs.BLOODELF:
			if (specialRacial) value.Actions.addSpell(i, specialRacial);
			break;

		case RaceIDs.DRAENEI:
			if (specialRacial) value.Actions.addSpell(i, specialRacial);
			break;
	
		default:
			break;
	}
}