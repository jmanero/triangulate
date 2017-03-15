'use strict';
const Winston = require('winston');

global.Log = new Winston.Logger(Config.get('log'));
Log.add(Winston.transports.Console);
