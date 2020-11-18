import Discord = require("discord.js");
import { Config } from "./lib/config";
import { logger } from "./lib/logger";
import { helpMessage } from "./lib/helpMessage";
export const client = new Discord.Client();
export const config = new Config();

client.once("ready", () => {
  logger({message: "Ready!", type: 'info'});
  logger({message: `Code base: ${config.version}`, type: "debug"});
  logger({message: `Node V: ${config.node}`});
  logger({message: "Error test", type: 'error'});
  logger({message: "Error test 2", type: 'error'});
});

client.on("message", async (message) => {
  // Ignore messages from bot
  if (message.author.bot) return;
  // mention bot Help message
  if (
    message.mentions.has(client.user.id)
  ) {
    await helpMessage(message);
  }
  // Ignore anything else without proper prefix
  if(!message.content.startsWith(config.prefix))return;
  const args = message.content.slice(config.prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  switch (command) {
    case 'h' || 'help':
      await helpMessage(message);
      break;
    default:
      await helpMessage(message);
      break;
  }
});

client.login(config.token);
