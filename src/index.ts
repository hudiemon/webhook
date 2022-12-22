import webhookFeishu from "./feishu"
import webhookWeixin from "./weixin"

class Webhook {
    title?: string
    content: string[] = []

    constructor({title}: { title: string }) {
        this.title = title
    }

    private push = (text: string) => {
        console.log(text)
        this.content.push(text)
    }
    public info = (text: string) => {
        this.push(text)
    }
    public success = (text: string) => {
        this.push(`✅${text}`)
    }

    public error = (text: any) => {
        this.push(`❌${text}`)
    }

    public warning = (text: string) => {
        this.push(`❗️${text}`)
    }

    public finally = () => {
        if (this.title) this.content.unshift(this.title)
        const content = this.content.join('\n')
        this.content = []
        process.env.WEBHOOK_FEISHU && webhookFeishu(content)
        process.env.WEBHOOK_WEIXIN && webhookWeixin(content)
    }
}

export default Webhook