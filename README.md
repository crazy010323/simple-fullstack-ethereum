# Simple-fullstack-ethereum
token creation, send/receive token, check balance

# What we will be building

- We'll be building, deploying, and connecting to a couple of basic smart contracts:

    A contract for creating and updating a message on the Ethereum blockchain
    A contract for minting tokens, then allowing the owner of the contract to send tokens to others and to read the token balances, and for owners of the new tokens to also send them to others.

- We will also build out a React front end that will allow a user to:

    Read the greeting from the contract deployed to the blockchain
    Update the greeting
    Send the newly minted tokens from their address to another address
    Once someone has received tokens, allow them to also send their tokens to someone else
    Read the token balance from the contract deployed to the blockchain

- Prerequisites

    Node.js installed on your local machine
    MetaMask Chrome extension installed in your browser

# How to run
- First, run the local hardhat environment
    ```shell
    npx hardhat node --network hardhat
    ```
- Then, deploy the smart contract on the running hardhat network
    ```shell
    npx hardhat run scripts/deploy.js --network localhost
    ```
- Finally, launch react project
    ```shell
    run npm start
    ```