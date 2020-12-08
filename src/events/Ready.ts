import { Events } from "command.ts";
import { logger } from '../lib/logger';
import { config } from "../main";
import { fileName } from "../lib/util";

@Events.Ready
class ReadyEvent
{
	logReady()
	{
    logger({ message: "Client ready", source: `${fileName(__filename)}` });
    logger({
      message: `Code base: ${config.version}`,
      type: "debug",
      source: `${fileName(__filename)}`,
    });
    logger({
      message: `Node V: ${config.node}`,
      source: `${fileName(__filename)}`,
    });
    logger({
      message: "Error test",
      type: "error",
      source: `${fileName(__filename)}`,
    });
	}
}