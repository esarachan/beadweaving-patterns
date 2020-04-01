# beadweaving-patterns

Quick patterns for slow crafting

## Getting started

Install:

```
npm install
```

## Print a pattern in the terminal

Compile code:

```
npx gulp
```

Run compiled script:

```
node dist/scripts/printPattern.js -p <PATTERN>
```

You can optionally pass a config file:

```
node dist/scripts/printPattern.js -p ombreBeats -c sample_ombreBeats_config.json
```

## Create patterns in a browser

```
npx webpack
```

Then you can open index.html in a browser.

## Development

This package uses [prettier](https://prettier.io/) for code formatting. To format code from the command line, run:

```
npx prettier --write src
```

Or use a prettier editor plugin.
