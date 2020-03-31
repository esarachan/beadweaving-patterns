import { program } from 'commander';

import patterns from '../patterns';

const availablePatterns = Object.keys(patterns);

program
  .requiredOption('-p, --pattern <string>');

program.parse(process.argv);

const patternName: string = program.pattern;
const pattern = patterns[patternName];
if (!pattern) {
  console.error(`Invalid pattern ${patternName}. Must be one of: ${Object.keys(patterns).join(', ')}`);
  process.exit(0);
}

console.log(pattern());
