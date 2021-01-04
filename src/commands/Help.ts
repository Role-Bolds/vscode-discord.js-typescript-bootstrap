
import { config } from "../Main";
import { Command, CommandMessage } from "@typeit/discord";

export class Help {
  @Command("help")
  help(message: CommandMessage) {
    const respond = `I can only do the following, <@${
      message.author.id
    }>:\nPrefixes: \`${config.prefix}\`\n${commandMessage()}\n\nV:${
      config.version
    }`;
    message.reply(respond);
  }
}

function commandMessage(): string {
  const output = "`h` or `help`, to display this help message.";
  return output;
}
