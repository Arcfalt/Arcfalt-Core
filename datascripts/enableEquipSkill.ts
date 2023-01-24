import { MaskCell32, MaskCon } from "wow/data/cell/cells/MaskCell";
import { ClassMask } from "wow/wotlk/std/Class/ClassRegistry";
import { RaceMask } from "wow/wotlk/std/Race/RaceType";
import { EquipSkill } from "wow/wotlk/std/SkillLines/EquipSkills";

export function enableEquipSkillNaive(skill: EquipSkill, cls?: MaskCon<keyof typeof ClassMask>, race: MaskCon<keyof typeof RaceMask> = MaskCell32.AllBits, rank: number = 0) {
    if(skill.Skill.get().RaceClassInfos.length === 0) {
        skill.Skill.get().enableAutolearn(cls,race)
    } else {
        skill.Skill.get().RaceClassInfos.forEach(x=>x.ClassMask.add(cls).RaceMask.add(race))
        skill.Skill.get().Autolearn.addGet(cls,race).Rank.set(rank);
    }
}