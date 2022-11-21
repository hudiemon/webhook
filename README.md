# webhook

[![NPM version](https://img.shields.io/npm/v/webhook.svg?style=flat)](https://npmjs.org/package/@hudiemon/webhook)
[![NPM downloads](http://img.shields.io/npm/dm/webhook.svg?style=flat)](https://npmjs.org/package/@hudiemon/webhook)

## Install

```bash
$ pnpm i @hudiemon/webhook
```

```typescript
import {Message} from '@hudiemon/webhook'

const message = new Message({title: "test"})

message.info('info')
message.success('success')
message.warning('warning')
message.error('error')
message.finally()

// test
// info
// ✅success
// ❗️warning
// ❌error
```

## LICENSE

MIT
