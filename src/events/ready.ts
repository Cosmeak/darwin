import type { EventHandlers } from "npm:@discordeno/bot";

export const ready: EventHandlers["ready"] = async function (payload) {
  console.log(payload);
};
