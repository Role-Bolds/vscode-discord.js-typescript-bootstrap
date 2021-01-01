
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
export async function tokenSanitize(botToken: string|(Promise<string>)) {
  const sanitize = await botToken.split('.')
  return `************************.${sanitize[1]}.***************************`
}