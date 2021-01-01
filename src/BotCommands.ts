import { CommandMessage, CommandNotFound, Discord } from "@typeit/discord";
import { join } from "path";

@Discord("!?", {
  import: [join(__dirname, "commands", "*.js")],
})
export abstract class BotCommands {
  @CommandNotFound()
  notFoundA(command: CommandMessage) {
    command.reply("Command not found;");
  }
}
