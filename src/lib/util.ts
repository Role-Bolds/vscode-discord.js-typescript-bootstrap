import { Commands } from "command.ts";
import path = require("path");
import { logger } from "./logger";

/**
 * Wrapper function to extract filename.ext from '`${fileName(__filename)}`'
 * @param fullPath `${fileName(__filename)}`
 */
export function fileName(fullPath: string) {
  return path.basename(fullPath);
}

export function commandsList() {
  const commandsStore = Commands.store;
  logger({message:'Command List', json: commandsStore, source: `${fileName(__filename)}`})
}