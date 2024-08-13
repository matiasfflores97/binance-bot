const CONFIG = {
    APP: {
        PORT: Number(process.env.BACKEND_PORT) || Number(process.env.PORT) || 3000,
    },
    BINANCE: {
        API_KEY: process.env.API_KEY_SANDBOX,
        SECRET_KEY: process.env.SECRET_KEY_SANDBOX,
        API_URL: 'https://testnet.binance.vision',
        FUTURES_API_URL: 'https://testnet.binancefuture.com',
    },
    TELEGRAM: {
        URL: process.env.TELEGRAM_URL,
        CHAT_ID: process.env.TELEGRAM_CHAT_ID,
    },
}

export default CONFIG