
import path = require("path");
import { logger } from "./Logger";

/**
 * Wrapper function to extract filename.ext
 * @param fullPath `${fileName(__filename)}`
 */
export function fileName(fullPath: string) {
  return path.basename(fullPath);
}

/**
 * Print commands to logger
 */
export function commandsList() {
  const commandsStore = { blank: "code needs writing" };
  logger({message:'Command List', json: commandsStore, source: `${fileName(__filename)}`})
}

/**
 * Make a bot token safe to print
 * @param botToken
 */
export function tokenSanitize(botToken: string) {
  const sanitize = botToken.split('.')
  return `${sanitize[0].replace(/([^\\.!\\*\\/\\])/gi,"*")}.${sanitize[1]}.${sanitize[2].replace(/([^\\.!\\*\\/\\])/gi,"*")}`
}