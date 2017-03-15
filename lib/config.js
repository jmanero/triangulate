'use strict';
global.Config = require('nconf');

// Load a configuration file
Config.argv({
  config: {
    alias: 'c',
    describe: 'Path to local configuration file'
  }
});

if (Config.get('config')) {
  Config.file(Path.resolve(process.cwd(), Config.get('config')));
}
