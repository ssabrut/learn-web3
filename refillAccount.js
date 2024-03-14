import { Web3 } from 'web3'

const test = async () => {
    const web3 = new Web3('http://127.0.0.1:8545')
    const account = await web3.eth.accounts.create()
    console.log('Address:', account.address);
    console.log('Private Key:', account.privateKey);
    console.log('Balance Before:', await web3.eth.getBalance(account.address))
    console.log('Accounts:', await web3.eth.getAccounts())
    
    const coinbase = await web3.eth.getCoinbase()
    console.log('Coinbase:', coinbase)
    console.log('Coinbase Balance:', await web3.eth.getBalance(coinbase))
    
    const tx = await web3.eth.sendTransaction({
        from: coinbase,
        to: account.address,
        value: BigInt(10e18)
    })

    console.log('Transaction:', tx)
    console.log('Balance After:', await web3.eth.getBalance(account.address))
}

test().catch(console.error)