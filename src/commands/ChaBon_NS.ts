import { Command, CommandMessage } from '@typeit/discord';
import { NsApi } from 'nsapi';
import { logger } from '../lib/Logger';




class NationState {

  @Command('ns')
  ns(message: CommandMessage) {
    const nationState = new NsApi('charisma_bonus');
    nationState.nationRequest('charisma_bonus', ['fullname'])
    .then( (data) => {
      logger({message: `${data.fullname}`});
    })
    .then( () => {
      nationState.cleanup();
    });
  }
}