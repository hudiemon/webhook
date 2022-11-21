import axios from "./axios";

export const webhookFeishu = (text: any) => {
    if (!process.env.WEBHOOK_FEISHU) {
        console.log('🤖️【飞书机器人】未设置')
        return
    }
    return axios.post(
        process.env.WEBHOOK_FEISHU,
        {
            'msg_type': 'text',
            'content': {
                text
            },
        }, {
            headers: {
                'content-type': 'application/json',
            },
        }).then(({StatusMessage, StatusCode}: any) => {
        if (StatusMessage === 'success' && StatusCode === 0) console.log('🤖【飞书机器人】消息发送成功')
    })
}