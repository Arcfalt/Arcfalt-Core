import { SQL, std } from "wow/wotlk";
import { Condition } from "wow/wotlk/std/Conditions/Condition";
import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";
import { Gossip } from "wow/wotlk/std/Gossip/Gossip";
import { GossipIcon } from "wow/wotlk/std/Gossip/GossipIcon";
import { MODNAME } from "./datascripts";
import { getGenericTrainingText } from "./npcBuilder";

export declare type TextEntryBuilder = {
    Text?: string,
    Probability?: number,
    Lang?: number,
    Emote?: number,
    EmoteDelay?: number,
}

export declare type NpcTextBuilder = {
    Texts?: TextEntryBuilder[],
    ClassConditions?: ClassConditionBuilder[],
}

export declare type BroadcastTextBuilder = {
    Text?: string,
}

export declare type ClassConditionBuilder = {
    ClassMask: number,
    Negate?: boolean,
}

export declare type OptionBuilder = {
    Text?: number,
    Menu?: number,
    Icon?: number,
    Type?: number,
    Flag?: number,
    POI?: number,
    ClassConditions?: ClassConditionBuilder[],

    SimpleText?: string,
    UseTrainingText?: number,
    GossipLink?: number | GossipBuilder,
    POIIndex?: number,
}

export declare type GossipBuilder = {
    Tag?: string,
    Texts?: NpcTextBuilder[],
    Options?: OptionBuilder[],

    SimpleText?: string,
    SimpleClassText?: {ClassMask: number, ClassText: string, NotClassText: string},

    AddClassTrainer?: {ClassMask: number},
}

export function buildGossip(g: GossipBuilder, pois?: number[]): number {
    let id : number;
    if (g.Tag !== undefined) id = std.IDs.gossip_menu.id(MODNAME, g.Tag);
    else id = std.IDs.gossip_menu.dynamicId();

    if (g.Texts === undefined) g.Texts = [];
    if (g.Options === undefined) g.Options = [];
    if (g.SimpleText !== undefined) g.Texts.push({
        Texts: [{Text: g.SimpleText}],
    });
    if (g.SimpleClassText !== undefined) {
        g.Texts.push({
            Texts: [{Text: g.SimpleClassText.ClassText}],
            ClassConditions: [{ClassMask: g.SimpleClassText.ClassMask}],
        });
        g.Texts.push({
            Texts: [{Text: g.SimpleClassText.NotClassText}],
            ClassConditions: [{ClassMask: g.SimpleClassText.ClassMask, Negate: true}],
        });
    }
    if (g.AddClassTrainer !== undefined) {
        g.Options.push({
            Icon: 3, Type: 5, Flag: 16, Menu: 0,
            UseTrainingText: g.AddClassTrainer.ClassMask,
            ClassConditions: [{ClassMask: g.AddClassTrainer.ClassMask}],
        });
        g.Options.push({
            Icon: 0, Text: 8271, Type: 16, Flag: 16, Menu: 4461,
            ClassConditions: [{ClassMask: g.AddClassTrainer.ClassMask}],
        });
        g.Options.push({
            Icon: 0, Text: 33762, Type: 20, Flag: 1, Menu: 10371,
            ClassConditions: [{ClassMask: g.AddClassTrainer.ClassMask}],
        });
    }

    g.Texts.forEach((value, index) => {
        let text = std.NPCText.create(MODNAME, "gossipText-" + id + "-" + index);
        if (value.Texts !== undefined) value.Texts.forEach(value => {
            let entry = text.addGet();
            if (value.Text !== undefined) entry.Text.set({enGB: value.Text});
            if (value.Probability !== undefined) entry.Probability.set(value.Probability);
            if (value.Lang !== undefined) entry.Lang.set(value.Lang);
            if (value.Emote !== undefined) entry.Emote.set(value.Emote);
            if (value.EmoteDelay !== undefined) entry.EmoteDelay.set(value.EmoteDelay);
        })
        SQL.gossip_menu.add(id, text.ID);
        if (value.ClassConditions !== undefined) value.ClassConditions.forEach(value => {
            if (value.Negate) std.SQL.conditions.add(14, id, text.ID, 0, 0, 15, 0, value.ClassMask, 0, 0, {NegativeCondition: 1});
            else std.SQL.conditions.add(14, id, text.ID, 0, 0, 15, 0, value.ClassMask, 0, 0);
        })
    });

    g.Options.forEach((value, index) => {
        if (value.SimpleText !== undefined) {
            let text = std.BroadcastTexts.create(MODNAME, "broadcastText-" + id + "-" + index);
            text.Text.set({enGB: value.SimpleText});
            value.Text = text.ID;
        }
        let useTextId : number = 0;
        if (value.Text !== undefined) useTextId = value.Text;
        if (value.UseTrainingText !== undefined) useTextId = getGenericTrainingText(value.UseTrainingText);
        if (value.GossipLink !== undefined) {
            let link : number;
            if (typeof value.GossipLink === "number") link = value.GossipLink;
	        else link = buildGossip(value.GossipLink, pois);
            value.Menu = link;
            value.Type = 1;
            value.Flag = 1;
        }
        if (value.POIIndex !== undefined && pois !== undefined) {
            if (pois.length > value.POIIndex) value.POI = pois[value.POIIndex];
        }
        if (value.Icon === undefined) value.Icon = GossipIcon.CHAT;
        std.SQL.gossip_menu_option.add(id, index, {
            OptionIcon: value.Icon,
            OptionBroadcastTextID: useTextId, 
            OptionType: value.Type, 
            OptionNpcFlag: value.Flag,
            ActionMenuID: value.Menu,
            ActionPoiID: value.POI,
        });
        if (value.ClassConditions !== undefined) value.ClassConditions.forEach(value => {
            if (value.Negate) std.SQL.conditions.add(15, id, index, 0, 0, 15, 0, value.ClassMask, 0, 0, {NegativeCondition: 1});
            else std.SQL.conditions.add(15, id, index, 0, 0, 15, 0, value.ClassMask, 0, 0);
        })
    });

    return id;
}

export function logCreatureGossip(target: number | CreatureTemplate) {
    let npc : CreatureTemplate;
	if (typeof target === "number") npc = std.CreatureTemplates.load(target);
	else npc = target;
    logGossip(npc.Gossip.get());
}

export function logGossip(target: number | Gossip, level?:number) {
    let gossip : Gossip;
	if (typeof target === "number") gossip = std.Gossip.load(target);
	else gossip = target;
    let lvl = 0;
    if (level !== undefined) lvl = level;
    let c = `\u001b[${92+lvl}m`;
    let cb = `\u001b[${92+lvl};1m`;
    let nc = "\u001b[0m";

    console.log(`${c}|- Gossip ID [${gossip.ID}]`);
    let allGossips = SQL.gossip_menu.queryAll({MenuID: gossip.ID});
    allGossips.forEach(value => {
        console.log(`${c}-- Text ID [${value.TextID.get()}]`);
        let condition = new Condition(gossip, 14, value.MenuID.get(), value.TextID.get(), 0);
        condition.forEach((value, index) => {
            console.log(` - Condition Type [${value.Type.get()}] - Value1 [${value.ConditionValue1}] - Value2 [${value.ConditionValue2}] - Value3 [${value.ConditionValue3}] - Negative [${value.IsNegative.get()}]`);
        })
        let text = std.NPCText.load(value.TextID.get());
        text.forEach((value, index) => {
            let same : boolean = value.Text.Male.enGB.get() === value.Text.Female.enGB.get();
            console.log(`${c} - Text Index [${index}] - Probability [${value.Probability.get()}] - Lang [${value.Lang.get()}] - Emote [${value.Emote.get()}] - Emote Delay [${value.EmoteDelay.get()}]`)
            if (!same) console.log(nc + c + "Male:");
            console.log(cb + value.Text.Male.enGB.get() + nc);
            if (!same) {
                console.log(nc + c + "Female:");
                console.log(cb + value.Text.Female.enGB.get() + nc);
            }
        });
    })
    gossip.Options.forEach((value, index) => {
        console.log(`${c}-- Option Index [${index}] - OptionID [${value.OptionID}] - Action [${value.Action.get()}] - Icon [${value.Icon.get()}] - POI [${value.POI.get()}] - Text [${value.Text.get()}] - Gossip [${value.Gossip.get()}]`);
        value.Condition.forEach((value, index) => {
            console.log(` - Condition Type [${value.Type.get()}] - Value1 [${value.ConditionValue1}] - Value2 [${value.ConditionValue2}] - Value3 [${value.ConditionValue3}] - Negative [${value.IsNegative.get()}]`);
        })
        let bt = value.Text.getRef();
        let same : boolean = bt.Text.Male.enGB.get() === bt.Text.Female.enGB.get();
        console.log(`${c} - Option Text ID [${bt.ID}] - Flags [${bt.Flags.get()}]`);
        if (!same) console.log(nc + c + "Male:");
        console.log(cb + bt.Text.Male.enGB.get());
        if (!same) {
            console.log(nc + c + "Female:");
            console.log(cb + bt.Text.Female.enGB.get());
        }
        console.log(nc + c + "-> [" + value.Gossip.get() + "]" + nc);
        if (value.Gossip.get() !== 0) {
            logGossip(value.Gossip.get(), lvl + 1);
        }
    })
}

// to quick test:
//logCreatureGossip(5595);
//logCreatureGossip(5145);