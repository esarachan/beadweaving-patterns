import fs from 'fs';
import { program } from 'commander';

import patternGenerators from '../patterns/generators';
import { patternToAsciiArt } from '../patterns/asciiArt';

program
  .requiredOption('-p, --pattern <string>')
  .option('-c, --config <string>');

program.parse(process.argv);

const patternName: string = program.pattern;
const patternGenerator = patternGenerators[patternName];
if (!patternGenerator) {
  console.error(`Invalid pattern ${patternName}. Must be one of: ${Object.keys(patternGenerators).join(', ')}`);
  process.exit(0);
}

const configPath = program.config;
const config = configPath ? JSON.parse(fs.readFileSync(configPath, 'UTF8')) : {};

console.log(patternToAsciiArt(patternGenerator(config), true));
