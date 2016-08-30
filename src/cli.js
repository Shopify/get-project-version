#!/usr/bin/env node

import minimist from 'minimist'; // eslint-disable-line node/shebang
import getProjectVersion from './index'; 

const args = minimist(process.argv.slice(2));

process.stdout.write(getProjectVersion(args));
