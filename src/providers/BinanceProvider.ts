import Binance from 'binance-api-node'
import CONFIG from '../config'

import { LimitNewFuturesOrder } from 'binance-api-node'

interface BinanceProvider {
    default: ({}) => void
}

class BinanceProvider {
    private apiKey: string
    private secretKey: string
    private apiUrl: string
    private futuresApiUrl: string
    private client: any

    constructor() {
        this.apiKey = CONFIG.BINANCE.API_KEY
        this.secretKey = CONFIG.BINANCE.SECRET_KEY
        this.apiUrl = CONFIG.BINANCE.API_URL
        this.futuresApiUrl = CONFIG.BINANCE.FUTURES_API_URL

        this.setup()
    }

    private setup() {
        this.client = (Binance as unknown as BinanceProvider).default({
            apiKey: this.apiKey,
            apiSecret: this.secretKey,
            httpBase: this.apiUrl,
            httpFutures: this.futuresApiUrl
        })
    }

    public async createFuturesOrder(params: LimitNewFuturesOrder) {
        const { symbol, side, type, quantity, price } = params

        const futuresOrder = await this.client.futuresOrder({
            symbol,
            side,
            type,
            quantity,
            price
        })

        return futuresOrder
    }

    public async futuresTrades(symbol: string) {
        const trades = await this.client.futuresTrades({ symbol })

        return trades
    }

    public async futuresPrices(symbol: string) {
        const prices = await this.client.futuresPrices({ symbol })

        return prices
    }
    
    public async futuresMarkPrice(symbol: string) {
        const prices = await this.client.futuresMarkPrice({ symbol })

        return prices
    }

    public async futuresGetOrder(symbol: string, orderId: number) {
        const order = await this.client.futuresGetOrder({ symbol, orderId })

        return order
    }

    public async futuresAccountBalance() {
        const balance = await this.client.futuresAccountBalance()

        return balance
    }

    public async monitorPrice(symbol: string) {
        const client = await this.client.futuresPrices()
        const price = parseFloat(client[symbol]);

        return price
    }
}

const binanceProvider = new BinanceProvider()
export default binanceProvider