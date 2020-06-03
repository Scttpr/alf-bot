import { Message } from 'discord.js';

export default interface Command {
    readonly TRIGGERS: string[];

    run(message: Message, params?: string[]): void;
}