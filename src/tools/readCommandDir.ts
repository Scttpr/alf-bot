import { readdir } from 'fs';
import { promisify } from 'util';
import path from 'path';

import CommandInterface from '../commands/base/Command';

const COMMANDS_FOLDER_PATH = path.join(process.cwd(), 'dist', 'commands', '/');
const readdirAsync = promisify(readdir);

export default async (): Promise<CommandInterface[]> => {
    const files = await readdirAsync(COMMANDS_FOLDER_PATH);
    const commands: CommandInterface[] = [];

    files.forEach((file) => {
        if (!file.endsWith('.js')) return;

        const { default: Command} = require(`${COMMANDS_FOLDER_PATH}${file}`);
        commands.push(new Command());
    })

    return commands;
}