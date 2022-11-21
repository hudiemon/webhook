import {webhookFeishu} from './feishu'

export class Message {
    title?: string
    content: string[] = []

    constructor({title}: { title: string }) {
        this.title = title
    }

    info = (text: string) => {
        const tempText = `${text}`
        console.log(tempText)
        this.content.push(tempText)
    }
    success = (text: string) => {
        const tempText = `✅${text}`
        console.log(tempText)
        this.content.push(tempText)
    }

    error=(text: string)=> {
        const tempText = `❌${text}`
        console.log(tempText)
        this.content.push(tempText)
    }

    warning=(text: string)=> {
        const tempText = `❗️${text}`
        console.log(tempText)
        this.content.push(tempText)
    }

    finally=()=> {
        if (this.title) this.content.unshift(this.title)
        webhookFeishu(this.content)
    }
}