import { ArgsOf, Client, CommandMessage, CommandNotFound, Discord, On } from "@typeit/discord";
import { join } from "path";
import { logger } from './lib/Logger';
import { config } from './Main';

@Discord(config.prefix[0], {
  import: [join(__dirname, "commands", "*.js")],
})
export class BotCommands {

  @CommandNotFound()
  notFound(command: CommandMessage) {
    command.reply("Command not found;");
  }
}
