import { Client, Message } from 'discord.js';

import Config from './config/Config';
import CommandCollection from './commands/base/CommandCollection';
import MessageHandler from './commands/base/MessageHandler';

export default class Bot extends Client {
    constructor(
        private readonly config: Config,
        private readonly commands: CommandCollection,
        private readonly messageHandler: MessageHandler,
    ) {
        super();
        this.addEventListeners();
    }

    public start() {
        this.login(this.config.token);
    }

    private addEventListeners() {
        this.on('ready', this.onReady);
        this.on('message', this.onMessage);
    }

    private onReady() {
        console.log('Bot is ready');
    }

    private onMessage(message: Message) {
        this.messageHandler.handle(message);
    }
}

