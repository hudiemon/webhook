import {weixin} from './services'

const webhookWeixin = async (content: any) => {
    return weixin({
        msgtype: 'text',
        text: {content},
    }).then(({errcode, errmsg}) => {
        if (errcode !== 0) {
            console.log(`❌【企业微信机器人】${errmsg}`)
            return Promise.reject(errmsg)
        }
        console.log('🤖【企业微信机器人】消息发送成功')
    })

}
export default webhookWeixin