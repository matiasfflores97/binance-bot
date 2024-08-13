import Axios from '../utils/Axios';
import CONFIG from '../config'

class TelegramProvider {
    constructor() {}

    public async getMe() {
        return Axios.get(CONFIG.TELEGRAM.URL, 'getMe');
    }

    public async sendMessage(chatId: number, text: string) {
        return Axios.post(CONFIG.TELEGRAM.URL, 'sendMessage', {
            chat_id: chatId,
            text
        });
    }
}

export default new TelegramProvider();