import { Config } from "./lib/config";
import { logger } from './lib/logger';
import { helpMessage } from "./lib/helpMessage";
import { Client } from 'command.ts';
export const config = new Config();

const client = new Client({prefixes: [`${config.prefix}`]});

logger({message: "Initalizing",type: "info"});

