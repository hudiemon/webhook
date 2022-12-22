# webhook

[![NPM version](https://img.shields.io/npm/v/webhook.svg?style=flat)](https://npmjs.org/package/@hudiemon/webhook)
[![NPM downloads](http://img.shields.io/npm/dm/webhook.svg?style=flat)](https://npmjs.org/package/@hudiemon/webhook)

## 安装

```bash
$ pnpm i @hudiemon/webhook
```
## 配置
```javascript
process.env.WEBHOOK_FEISHU
process.env.WEBHOOK_WEIXIN
```
## 使用
```javascript
import Webhook from "@hudiemon/webhook";

const webhook = new Webhook({title: "test"})

webhook.info('info')
webhook.success('success')
webhook.warning('warning')
webhook.error('error')
webhook.finally()
```
## 结果
```
test
info
✅success
❗️warning
❌error
```
## LICENSE

MIT
