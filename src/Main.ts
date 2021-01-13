import { Config } from './lib/Config';
import { logger } from './lib/Logger';
import { Client } from '@typeit/discord';
import { fileName, tokenSanitize } from './lib/Util';

export const config = new Config();
const clientPerams = new Client({
	classes: [
		`${__dirname}/BotCommands.js`,
		`${__dirname}/BotEvents.js`
	],
	variablesChar: ':'
});

export class Main{

	// tslint:disable-next-line: variable-name
	private static _client: Client;

	static get Client(): Client {
		return this._client;
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	static startBot() {
		this._client = clientPerams;
		logger({ message: 'Starting bot', source: `Main` });
		logger({message: `Loading commands and events:`, source:`Main`});
		this._client.login(`${config.token}`);
	}

	// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
	static initializeBot() {
		logger({ message: 'Initalizing', source: `Main` });
		logger({message: `Current token:\n${tokenSanitize(config.token)}`, source:'Main'});
	}
}

Main.initializeBot();
Main.startBot();