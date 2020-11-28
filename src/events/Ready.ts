import { Events } from "command.ts";
import { logger } from '../lib/Logger';
import { config } from "../main";

@Events.Ready
class ReadyEvent
{
	logReady()
	{
    logger({message:'Client ready', source:__filename})
    logger({message: `Code base: ${config.version}`, type: "debug", source:__filename});
    logger({message: `Node V: ${config.node}`, source:__filename});
    logger({message: "Error test", type: 'error', source:__filename});
	}
}