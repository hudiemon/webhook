import {webhookFeishu} from './feishu'

export class Message {
    title?: string
    content: string[] = []

    constructor({title}: { title: string }) {
        this.title = title
    }

    info = (text: string) => {
        this.content.push(text)
    }
    success = (text: string) => {
        this.content.push(`✅${text}`)
    }

    error=(text: string)=> {
        this.content.push(`❌${text}`)
    }

    warning=(text: string)=> {
        this.content.push(`❗️${text}`)
    }

    finally=()=> {
        if (this.title) this.content.unshift(this.title)
        const content = this.content.join('\n')
        console.log(content)
        webhookFeishu(content)
    }
}