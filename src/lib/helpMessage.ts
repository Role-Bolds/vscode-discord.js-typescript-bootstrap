import type {User} from "discord.js";
import { logger } from "./logger";
import { config} from "../main";

export async function helpMessage(ping) {
  try {
    await message.channel.send(`I can only do the following:
\`${config.prefix} h\`,\`${config.prefix} help\`, <@${user.id}> to display this help message.

V:${config.version}`);
  } catch (error) {
    logger({message: error, type: "error"});
  }
}
