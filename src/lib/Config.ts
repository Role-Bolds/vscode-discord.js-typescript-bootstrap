import * as env from 'env-var';
// tslint:disable-next-line: no-var-requires
const pkg = require("../../package.json");
export class Config {
  public apiVersion: number = env.get("DISCORD_API").default(8).asIntPositive();
  public appID: number = env
  .get("DISCORD_APP_ID")
  .default(1111111111111111)
  .asIntPositive();
  public debug: boolean = env.get("DISCORD_BOT_DEBUG").default("true").asBool();
  public logName: string = env
  .get("DISCORD_BOT_LOG_NAME")
  .default("tsbot")
  .asString();
  public node: string = process.version;
  public prefix: string[] = env.get("DISCORD_BOT_PREFIX").default("!?").asString().split(',');
  public token: string = env
  .get("DISCORD_BOT_USER_TOKEN")
  .default("************************.DEFVAL.***************************")
  .asString();
  public version: any = pkg.version;
}