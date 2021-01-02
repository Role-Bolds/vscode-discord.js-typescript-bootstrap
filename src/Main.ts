import { Config } from './lib/Config';
import { logger } from './lib/Logger';
import { Client } from '@typeit/discord';
import { fileName, tokenSanitize } from './lib/Util';
export const config = new Config();

class Main{

	private static _client: Client;
	static get Client(): Client {
		return this._client
	}

	static startBot() {
		this._client = new Client({
			classes: [
				`${__dirname}/commands/*.js`,
				`${__dirname}/events/*.js`
			],
			variablesChar: ':'
		});
		logger({ message: 'Starting bot', source: `Main` });
		logger({message: `Loading commands and events:`});
		this._client.login(`${config.token}`);
	}

	static initializeBot() {
		logger({ message: 'Initalizing', source: `Main` });
		logger({message: `Current token:\n${tokenSanitize(config.token)}`, source:'Main'});
	}
}

Main.initializeBot();
Main.startBot();

//commandsList();6