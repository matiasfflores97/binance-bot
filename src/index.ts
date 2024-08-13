import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import CONFIG from './config'

import { Server as HttpServer } from 'http'

import BinanceProvider from './providers/BinanceProvider';

class Server {
    public PORT: number
    public app: express.Application
    public server: HttpServer

    constructor() {
        this.setup()
    }

    private setup() {
        this.PORT = CONFIG.APP.PORT
        this.app = express()
        this.app.set('port', this.PORT)
        this.app.use(cors())

        // this.testOrder()
    }

    private async testOrder() {
        try {
            const order = await BinanceProvider.createFuturesOrder({
                type: 'LIMIT',
                symbol: 'BTCUSDT',
                side: 'BUY',
                timeInForce: 'GTC',
                quantity: '0.004',
                price: '50000'
            })
            console.log(order)
        } catch (error) {
            console.error(error)
            return error
        }
    }

    public listen() {
        this.app.listen(this.PORT, () => {
            console.log(`Server running on port ${this.PORT}`)
        })
    }
}

const server = new Server()
server.listen()

export default server