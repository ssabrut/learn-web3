import { Web3 } from 'web3'
import { config } from 'dotenv'

config()
const apiKey = process.env.INFURA_API_KEY
const web3 = new Web3(apiKey)

async function main() {
    const blockNumber = await web3.eth.getBlockNumber()
    console.log(blockNumber)
}

main()