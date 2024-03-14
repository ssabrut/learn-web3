import { Web3 } from 'web3'
import { config } from 'dotenv'

config()
const apiKey = process.env.INFURA_API_KEY
const privateAddress = process.env.PRIVATE_ADDRESS
const web3 = new Web3(apiKey)

const createAccount = async () => {
    return await web3.eth.accounts.create()
}

const createPrivateAccount = async () => {
    return await web3.eth.accounts.privateKeyToAccount(privateAddress)
}

async function main() {
    const blockNumber = await web3.eth.getBlockNumber()
    console.log(blockNumber)
}

console.log(createPrivateAccount());