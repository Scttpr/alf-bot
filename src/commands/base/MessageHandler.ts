import { Message } from 'discord.js';

import CommandCollection from './CommandCollection';
import { config } from '../../start';

export default class MessageHandler {
  constructor(private readonly commands: CommandCollection) {
    
  }

  public handle(message: Message) {
    if (message.content.startsWith(config.prefix)) {
        const messageToHandle = message;
        messageToHandle.content = message.content.substring(config.prefix.length);
        this.commands.execute(message);
    };
  }
}
