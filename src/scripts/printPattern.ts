import { program } from 'commander';

import patternGenerators from '../patterns/generators';

program
  .requiredOption('-p, --pattern <string>');

program.parse(process.argv);

const patternName: string = program.pattern;
const patternGenerator = patternGenerators[patternName];
if (!patternGenerator) {
  console.error(`Invalid pattern ${patternName}. Must be one of: ${Object.keys(patternGenerators).join(', ')}`);
  process.exit(0);
}

console.log(patternGenerator());
