import { Config } from "./lib/config";
import { logger } from './lib/logger';
import { Client } from 'command.ts';
import { join } from "path";
import { fileName } from './lib/util';
export const config = new Config();

logger({ message: "Initalizing", source: `${fileName(__filename)}` });

export const client = new Client({
	loadDirs: [
		join(__dirname, "commands"),
		join(__dirname, "events")
	],
  autoHandleCommands: false,
  prefixes: config.prefix
});

client.login(config.token);