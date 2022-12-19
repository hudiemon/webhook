import request from "./request";

export const feishu = (data: {
    msg_type: 'text',
    content: {
        text: string
    }
}): Promise<{ StatusMessage: string, StatusCode: number }> => request.post(process.env.WEBHOOK_FEISHU ?? '', data)
export const weixin = (data: {
    msgtype: "text",
    text: {
        "content": string
    }
}): Promise<{ errmsg: string, errcode: number }> => request.post(process.env.WEBHOOK_WEIXIN ?? '', data)