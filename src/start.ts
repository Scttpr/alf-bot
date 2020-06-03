import Bot from './Bot';
import loadCommands from './tools/readCommandDir';
import CommandCollection from './commands/base/CommandCollection';
import Config from './config/Config';
import MessageHandler from './commands/base/MessageHandler';

export const config = new Config();


(async () => {
    const commandCollection = new CommandCollection(await loadCommands());
    const alf = new Bot(config, commandCollection, new MessageHandler(commandCollection));
    alf.start();
})();
