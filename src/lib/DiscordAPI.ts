import { config } from "../Main";
import { request } from "https";
let apiURL = `https://discord.com/api/v${config.apiVersion}/applications/${config.appID}/`;

/**
 * Direct interaction with
 */
export class DiscordAPI {
  /**
   * commands
   */
  public commands() {
    const commandJson = {
      name: "ns",
      description: "Nation States",
    };
    const auth = {
      Authorization: config.appID,
    };
  }
}
