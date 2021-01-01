import * as env from "env-var";

// tslint:disable-next-line: no-var-requires
const pkg = require("../../package.json");
export class Config {
  constructor() {
    this.apiVersion = await env.get("DISCORD_API").default(8).asIntPositive();

    this.appID = async () => {
      return env
        .get("DISCORD_APP_ID")
        .default(1111111111111111)
        .asIntPositive();
    };
    this.debug = async () => {
      return env.get("DISCORD_BOT_DEBUG").default("true").asBool();
    };
    this.logName = async () => {
      return env.get("DISCORD_BOT_LOG_NAME").default("tsbot").asString();
    };
    this.prefix = async () => {
      return env.get("DISCORD_BOT_PREFIX").default("!?").required().asString();
    };
    this.token = async () => {
      return env.get("DISCORD_BOT_USER_TOKEN").required().asString();
    };
  }
  public apiVersion: number;
  public appID: number;
  public debug: boolean;
  public logName: string;
  public node: string = process.version;
  public prefix;
  public token;
  public version: any = pkg.version;

  importEnv() {}
}