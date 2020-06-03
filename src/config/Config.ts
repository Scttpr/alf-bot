import path from 'path';

type ConfigValue = boolean | number | string | string[];

const DEFAULT_CONFIG_PATH = path.join(process.cwd(), 'config.json');

export interface ConfigInterface {
  [key: string]: ConfigValue;

  clientId: string;
  token: string;
  prefix: string;
}

export default class Config implements ConfigInterface {
    public clientId!: string;
    public token!: string;
    public prefix!: string;

    // @todo check if there is a cleaner way to handle type inference here
    [index: string]: any;

    constructor(
        private readonly CONFIG_PATH: string = DEFAULT_CONFIG_PATH,
    ) {
      this.init();
    }

    private init() {
      const configFile = require(this.CONFIG_PATH); // JSON config file
      this.registerEnvVariables(configFile);
    }

    private registerEnvVariables(data: ConfigInterface) {
      Object.keys(data).forEach((key) => {
        this[key.toLowerCase()] = data[key];
      })
    }
}