export type loggingOptions = {
  message: string;
  type?: "debug" | "error" | "info";
  json?: object;
  source?: string;
};

export type configSettings = {
  DISCORD_BOT_API: Number;
  DISCORD_BOT_APP_ID: Number;
  DISCORD_BOT_DEBUG: Boolean;
  DISCORD_BOT_LOG_NAME: String;
  DISCORD_BOT_PREFIX: String;
  DISCORD_BOT_USER_TOKEN: String;
};

export type envType = {
  DISCORD_API: number,
  DISCORD_APP_ID: number,
  DISCORD_BOT_DEBUG: boolean,
  DISCORD_BOT_LOG_NAME: string,
  DISCORD_BOT_PREFIX: string,
  DISCORD_BOT_USER_TOKEN: string,
}