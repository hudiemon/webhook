import {feishu} from "./services";

const webhookFeishu = async (text: any) => {
    return feishu({
            'msg_type': 'text',
            'content': {text}
        }
    ).then(({StatusCode, StatusMessage} )=>{
        if (StatusCode !== 0) {
            console.log(`❌【飞书机器人】${StatusMessage}`)
            return Promise.reject(StatusMessage)
        }
        console.log('🤖【飞书机器人】消息发送成功')
    })

}
export default webhookFeishu