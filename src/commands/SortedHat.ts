import { Message } from 'discord.js';

import Command from './base/Command';

export default class SortedHat implements Command {
    public readonly TRIGGERS = ['choixpeau'];
    private readonly HOUSES = ['Gryffondor', 'Serpentard', 'Serdaigle', 'Poufsouffle'];
    private readonly ANSWER_PREFIXES = ['Tu iras à', 'Plutôt', 'Ce sera', 'J\'hésite...', 'Tu seras la catine de'];

    public run(message: Message): void {
        message.channel.send(this.generateMessage());
    };

    private generateMessage(): string {
        return `${this.ANSWER_PREFIXES[this.getRandomIndex(this.ANSWER_PREFIXES)]} ${this.HOUSES[this.getRandomIndex(this.HOUSES)]} !`;
    }

    private getRandomIndex(array: any[]): number {
        return Math.floor(Math.random() * Math.floor(array.length - 1));
    }
}