import { Message } from 'discord.js';

import Command from './base/Command';

export default class SortedHat implements Command {
    public readonly TRIGGERS = ['hello'];

    public run(message: Message): void {
        message.channel.send(this.generateMessage());
    };

    private generateMessage(): string {
        return 'Hello world !';
    }
}