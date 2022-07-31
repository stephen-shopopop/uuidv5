[![Minimal node version](https://img.shields.io/static/v1?label=node&message=%3E=14.16&logo=node.js&color)](https://nodejs.org/about/releases/)
[![Minimal npm version](https://img.shields.io/static/v1?label=npm&message=%3E=6.14.12&logo=npm&color)](https://github.com/npm/cli/releases)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/stephen-shopopop/node-ts/graphs/commit-activity)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)

# UUIDv5 generator

## Description

Generate uuidv5 [RFC4122](https://datatracker.ietf.org/doc/html/rfc4122)

```bash
    0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                          time_low                             |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |       time_mid                |         time_hi_and_version   |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |clk_seq_hi_res |  clk_seq_low  |         node (0-1)            |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
   |                         node (2-5)                            |
   +-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+
```

### Installation

[![Minimal node version](https://img.shields.io/static/v1?label=node&message=%3E=14&logo=node.js&color)](https://nodejs.org/about/releases/)

Add .npmrc file in your repository

> @stephen-shopopop:registry=https://npm.pkg.github.com


```bash
npm install @stephen-shopopop/uuidv5@latest
```

## Usage

```ts
import uuidv5 from "uuidv5";

const data = new TextEncoder().encode("Hello World!");

// Generate a v5 UUID using a namespace and some data.
const myUUID = uuidv5.generate("6ba7b810-9dad-11d1-80b4-00c04fd430c8", data);

// Validate the v5 UUID.
const isValid = uuidv5.validate(myUUID);
```

## UUIDv4

Generate uuidv4 with nodejs > 14 [crypto.randomuuid](https://nodejs.org/docs/latest-v14.x/api/crypto.html#crypto_crypto_randomuuid_options)

```js
const crypto = require('crypto')

// typescript
// import crypto from 'crypto'

const myUUID = crypto.randomUUID()
```

## Contributing

1. npm run build -  Build library.
2. npm run test - Run test with jest.
3. npm run lint - Lint your code.
4. npm run lint:fix - Lint & fix your code.
5. npm run typecheck - Run typescript check.
6. npm run doc - Generate html doc.
7. npm run release - Release library
8. npm run fix - Fix library

### Package maintenance

A modern cli tool that keeps your deps fresh

```bash
npx taze
```

