This is ALGO-ETH BRIDGE a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Notes

- This application is written to work only on Algorand testnet and ETH Goerli testnet

- This application only works for NFTs with metadata uploaded to IPFS. In other words, the url of either the ERC-721 NFT or Algorand NFT has to be an IPFS url.

- This app will only bridge ERC-721 NFTs with ABIs similar or the same as the Bridge Deployer's own (anyone trying to deploy this app). This means an entity or NFT Creator who would like to deploy this app would do it in such a way that it probably only works fir the entity's or the Creator's ERC-721 NFTs. 

- This app can be used to bridge any Algorand NFT (ARC)

## Definitions

Bridge Deployer - this is the entity who decides to deploy this Next.js Bridge Application discussed in this readMe

Bridger - A bridger is the front end user who is trying to bridge his or her Algo NFT into ERC-721 NFT or vice versa

Backend - The backend is mostly referred to as the account (with private key / seed phrase) which is capable of deploying and interacting with smart contracts in the server. No front end user has access to the backend.

Lock - This simply means sending an NFT to a smart contract never to be retrieved again. Some may call this burn. For ETH, the bridge contract receives the locked ERC-721 NFT. For Algorand, the deployed contract receives the Algorand NFT the backend configured it to receive/lock.

## Getting Started

The ALGO-ETH Bridge is made up of the following major parts:
- [The Backend](https://github.com/cooperativ-labs/eth-algo-NFT-bridge/tree/sunday1/pages/api)

    - bridgeToAlgo.js => this is the API called by the front end (after ERC-721 NFt has been locked) when it is time to launch Algorand NFT, deploy an Algorand contract that receives the Algroand NFT to be claimed by the bridger. The bridger would claim the NFT in the front end after first opting into the Algorand NFT 

    - authenticate.js => this is a function called by "bridgeToAlgo.js" to perform authentication (confirm that the bridger has actually locked ERC-721 NFT in the ethereum bridge contract). Three forms of authentication are being performed by this file - (1) confirm that locking of ERC-721 NFT is the latest event that happened for this NFT contract. (2) That it was the bridger's ETH wallet address who performed the locking and was sent to specific bridge contract capable of receiving ERC-721 tokens (3) that the locking took place for the specified NFT ID in the front end 

    - deployAlgoLock.ts => this is the first API called by the front end when trying to do ALGO-to-ETH bridging. It deploys an Algorand smart contract when a bridger wants to bridge an Algorand NFT to ERC-721. The smart contract deployed is for locking the Algorand NFT for the bridge to take place.

    - finalAlgoBridgeStep.ts => this is the second API called by the front end when trying to do ALGO-to-ETH bridging. This is only called after Algorand NFT has been locked by the Bridger in the front end. This API lets the backend confirm if the specific bridger has locked the specific Algorand NFT, and then mints the ERC-721 NFT, and the sends it to the bridger's ethereum address. After this, it calls the deployed Algorand smart contract to indicate that the bridge has been completed.

    - mintEthNft.js => this is a server function called by "finalAlgoBridgeStep.ts" to mint ERC-721 NFT

- [Reach Compiled Javascript Files](https://github.com/cooperativ-labs/eth-algo-NFT-bridge/tree/sunday1/reachBackend)

    - algoToEth.main.mjs (this is compiled from algoToEth.rsh). It is mainly for locking ALgorand NFT in a reach algorand smart contract, and the backend can view the contract to see whether the "bridger" has locked NFT in it before minting ERC-721 NFT. THe backend can also check this contract to see if the backend has previously noted that a specific bridge has been completed.

    - test.main.js (this is compiled from bridge.rsh). This is mainly used in the front end  the bridger can use to claim Algorand NFT from the Algorand smart contract deployed by the backend, after a bridger locks ERC-721 NFT during a bridging process.

    - test.main.mjs (this is compiled from bridge.rsh). This is the same Algorand contract as above (excpet it is a module extension). This is used by the backend to deploy an Algorand smart contract that the front end can use to claim an NFT

- [ETH ABI Contracts and Functions](https://github.com/cooperativ-labs/eth-algo-NFT-bridge/tree/sunday1/ethContracts)

    - erc721a.js => these are functions and the minter address required to launch a web3 instance in the backend using the web3.js library

    - erc721abi.json => this is the eth bridge ABI which is able to receive any ERC-721 NFT being permanently locked and also able to mint new ERC-721 NFT after an algorand NFT has been locked. 

    - nftAbi.json => this is the example ABI of the ERC-721 NFT issued by the Bridge Deployer who is offering bridging services for people to move their NFTs from Ethereum to Algorand 


## Run this Project
 - 
Explaining the architecture of the Bridge

```bash
npm run dev
# or
yarn dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.