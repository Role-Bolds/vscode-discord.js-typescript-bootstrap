import { Group, Describe, Context } from 'command.ts';
import { config } from "./main";


@Group("Help commands")
class Help {

  @Describe({
    aliases: ["h", "help"]
  })
  help(ctx: Context) {
    if (ctx.usedAlias === "h" || "help") {
      ctx.send(`I can only do the following:
\`${config.prefix} h\`,\`${config.prefix} help\`, <@${ctx.author.username}> to display this help message.\n
V:${config.version}`);
    }
  }
}