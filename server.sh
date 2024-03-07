docker run -p 8545:8545 ethereum/client-go:latest --nodiscover --nousb --ws --ws.addr 0.0.0.0 --ws.port 8545 --http --http.addr 0.0.0.0 --http.port 8545 --allow-insecure-unlock --http.api personal,web3,eth,admin,debug,txpool,net --ws.api personal,web3,eth,admin,debug,miner,txpool,net --dev