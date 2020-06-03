import { Message } from 'discord.js';

import Command from './Command';

export default class CommandCollection {
    constructor(
        private readonly commands: Command[] = [],
        private readonly triggers: Map<string, Command> = new Map(),
        ) {
            this.registerCommands(commands);
    }

    public registerCommands(commands: Command[]) {
        this.commands.push(...commands);
        commands.forEach(command => this.registerTriggers(command));
      }

    public execute(message: Message) {
        const [command, ...params] = message.content.split(' ');

        if (this.triggers.has(command)) {
            this.triggers.get(command)?.run(message, params);
        }
    }

    private registerTriggers(command: Command) {
        command.TRIGGERS.forEach((trigger: string) => this.triggers.set(trigger, command));
      }
}