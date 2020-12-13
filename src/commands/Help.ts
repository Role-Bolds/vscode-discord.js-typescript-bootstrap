import { Context, Group, Describe, Commands } from 'command.ts';
import { config } from "../main";

@Group("Help")
class Help {

  @Describe({
    description: "Use these to get this list.", aliases: ["h","help"], usage: "test", defaultName:false
  })
  help(message: Context) {
    if(message.usedAlias === "h" || "help"){
    const commandsList = commandMessage(message);
    message.send(`I can only do the following, <@${message.author.id}>:\nPrefixes: \`${config.prefix}\`\n${commandsList}\n\nV:${config.version}`);}
  };
}

function commandMessage(ctx: Context){
  const output = '\`h\` or \`help\`, to display this help message.';
  return output;
}

