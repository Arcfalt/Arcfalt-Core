import { SQL, std } from "wow/wotlk";
import { Condition } from "wow/wotlk/std/Conditions/Condition";
import { CreatureTemplate } from "wow/wotlk/std/Creature/CreatureTemplate";
import { Gossip } from "wow/wotlk/std/Gossip/Gossip";

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
            //console.log(nc);
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
        //console.log(nc);
    })
}

logCreatureGossip(5595);//5145