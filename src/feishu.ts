import {feishu} from "./services";

const webhookFeishu = async (text: any) => {
    if (!process.env.WEBHOOK_FEISHU) {
        console.log('❗【飞书机器人】未设置')
        return
    }
    const {StatusCode, StatusMessage} = await feishu({
            'msg_type': 'text',
            'content': {text}
        }
    )
    if (StatusCode !== 0) {
        console.log(`❌【飞书机器人】${StatusMessage}`)
        return
    }
    console.log('🤖【飞书机器人】消息发送成功')
}
export default webhookFeishu