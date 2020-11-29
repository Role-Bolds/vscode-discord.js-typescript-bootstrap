import { Context, Commands } from 'command.ts';
import { config } from "../main";

@Commands.Group("Help commands")
class Help {

  @Commands.Describe({
    aliases: ["h", "help"], prefix: "optional"
  })
  help(ctx: Context) {
    if (ctx.usedAlias === "h" || "help") {
      ctx.send(`I can only do the following, <@${ctx.author.id}>:\n\`${config.prefix}h\`,\`${config.prefix}help\`, to display this help message.\n\nV:${config.version}`);
    }
  }
}