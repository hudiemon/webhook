import axios from "./axios";

export const webhookFeishu = (text: any, WEBHOOK_FEISHU: string | undefined) => {
    if (!WEBHOOK_FEISHU) {
        console.log('🤖️【飞书机器人】未设置')
        return
    }
    return axios.post(
        WEBHOOK_FEISHU,
        {
            'msg_type': 'text',
            'content': {
                'text': text.join('\n'),
            },
        }, {
            headers: {
                'content-type': 'application/json',
            },
        }).then(({StatusMessage, StatusCode}: any) => {
        if (StatusMessage === 'success' && StatusCode === 0) console.log('🤖【飞书机器人】消息发送成功')
    })
}