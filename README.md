# server-types

TypeScript declarations to server-side JavaScript development over the Netuno platform.

<a href="https://www.npmjs.com/package/@netuno/server-types"><img src="https://img.shields.io/npm/v/@netuno/server-types.svg?style=flat" alt="npm version"></a>

The goal is to gain auto-complete using the Netuno low-code server resources.

## Install

Inside your application, into the `server` folder, execute:

`npm install -S @netuno/server-types`

## How To Use

Adding an import instruction like this at the top of your source code server-side:

`import { _req, _db, _val, _out } from "@netuno/server-types";`

You can load any Netuno resource you want, then the auto-complete should work well.

