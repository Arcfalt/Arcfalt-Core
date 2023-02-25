import { std } from "wow/wotlk";

// Fix Fylerian Nightwing having a reversed main hand claw in his offhand
std.CreatureTemplates.load(4219).Weapons.getIndex(0).LeftHand.set(0);