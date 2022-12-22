const Webhook = require('../dist/cjs').default

test('webhook', async () => {
	const webhook = new Webhook({title: 'test'})
	webhook.info('info')
	webhook.success('success')
	webhook.warning('warning')
	webhook.error('error')
	webhook.finally()
	return true
})
