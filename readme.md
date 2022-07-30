<p align="center">
    <img src="./shopopop.png"
        height="130">
</p>

[![Minimal node version](https://img.shields.io/static/v1?label=node&message=%3E=14.16&logo=node.js&color)](https://nodejs.org/about/releases/)
[![Minimal npm version](https://img.shields.io/static/v1?label=npm&message=%3E=6.14.12&logo=npm&color)](https://github.com/npm/cli/releases)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/stephen-shopopop/node-ts/graphs/commit-activity)
[![Linux](https://svgshare.com/i/Zhy.svg)](https://svgshare.com/i/Zhy.svg)
[![macOS](https://svgshare.com/i/ZjP.svg)](https://svgshare.com/i/ZjP.svg)
[![Visual Studio Code](https://img.shields.io/badge/--007ACC?logo=visual%20studio%20code&logoColor=ffffff)](https://code.visualstudio.com/)

# UUIDv5 generator

## Description

Generate uuidv5

## Usage

```
const data = new TextEncoder().encode("Hello World!");

// Generate a v5 UUID using a namespace and some data.
const myUUID = UUIDv5.generate("6ba7b810-9dad-11d1-80b4-00c04fd430c8", data);

// Validate the v5 UUID.
const isValid = UUIDv5.validate(myUUID);
```

## Contributing

1. npm run build -  Build library.
2. npm run start - start project
3. npm run test - Run test with jest.
4. npm run lint - Lint your code.
5. npm run lint:fix - Lint & fix your code.
6. npm run typecheck - Run typescript check.
7. npm run doc - Generate html doc.
8. npm run release - Release library
9. npm run fix - Fix library

### Package maintenance

A modern cli tool that keeps your deps fresh

```bash
npx taze
```

