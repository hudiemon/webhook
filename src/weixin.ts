import {weixin} from './services'

const webhookWeixin = async (content: any) => {
    if (!process.env.WEBHOOK_WEIXIN) {
        console.log('❗【企业微信机器人】未设置')
        return
    }
    const {errcode, errmsg} = await weixin({
        msgtype: 'text',
        text: {content},
    })
    if (errcode !== 0) {
        console.log(`❌【企业微信机器人】${errmsg}`)
        return
    }
    console.log('🤖【企业微信机器人】消息发送成功')
}
export default webhookWeixin