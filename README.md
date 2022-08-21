This is ALGO-ETH BRIDGE developed on Algorand using smart contracts developed with [Reach](reach.sh) and solidity. It is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

**Developed by**: [Sunday Akinbowale](https://github.com/asolpshinning), [Jake ChaseBuilt](https://github.com/jchaselubitz), and powered by [Cooperativ.io](https://github.com/cooperativ-labs)

We will continue to develop this project after hackathon submission at this [Cooperativ's Github Repo](https://github.com/cooperativ-labs/eth-algo-NFT-bridge)


## Video Demo
[Here](https://vimeo.com/741640670/a1e41c5e9f)


## Live App 
[Here](https://nft-bridge.sundayakins.repl.co/)


## Definitions

**Bridge Deployer** - this is the entity who decides to deploy this Next.js Bridge Application discussed in this readMe

**Bridger** - A bridger is the front end user who is trying to bridge his or her Algo NFT into ERC-721 NFT or vice versa

**Backend** - The backend is mostly referred to as the account (with private key / seed phrase) which is capable of deploying and interacting with smart contracts in the server. No front end user has access to the backend.

**Lock** - This simply means sending an NFT to a smart contract never to be retrieved again. Some may call this burn. For ETH, the bridge contract receives the locked ERC-721 NFT. For Algorand, the deployed contract receives the Algorand NFT the backend configured it to receive/lock.


## Notes

- This application is written to work only on Algorand testnet and ETH Goerli testnet

- If you like to test the live version of this app ([located here](https://nft-bridge.sundayakins.repl.co/)), you can mint your ERC-721 NFT using a deployable version of our NFT that we released via thirdWeb through [this link](https://thirdweb.com/0xFc63bAd66fB4f454378C404ae792CeE147b67AEf/ERC721), and then bridge into an Algorand NFT.

- This application's front end only works for NFTs with metadata uploaded to IPFS. In other words, the url of either the ERC-721 NFT or Algorand NFT has to be an IPFS url. 

- This application will only bridge ERC-721 NFTs with ABIs similar to the Bridge Deployer's own. This means an entity or NFT Creator who would like to deploy this app would do it in such a way that it probably only works for the entity's or the Creator's ERC-721 NFTs. 

- It is assumed that the bridge deployer who wants people to bridge NFTs from Algorand to Ethereum has a particular ERC-721 NFT contract that mints the ethereum NFT for clients, after locking Algorand NFT. For this app, the ethereum contract is referred to as **goerliMinter** and thirdWeb made it easy for us to compile the solidity code, and share our deployable contract link with you. If you like to easily deploy the same contract for your bridge, you can use this [link](https://thirdweb.com/contracts/deploy/QmfDwN1uX8Bztdyo4p65ApiCahA37UTpf5hPLnUgaDa5iZ).

- According to ERC-721 standards, all NFTs minted by our **goerliMinter** (which we used to demonstrate this bridge) would have the same contract address but different token IDs (e.g 1,2,3 etc...)

- This application can be used to bridge any Algorand NFT into ERC-721 NFT. However, our front end demonstrated in this repo would only show (ARC-3 standard) images derived from the metadata url. We need to later further improve the app to eventually be able to show image url for Algorand NFTs with ARC-69 standard

- If you like to deploy this, you would need seed phrases and private keys in your `.env` file. YOu can find example file in `dotenv`


## Limitations

- The only limitation currently faced for this bridge has to do with myAlgo wallet. When claiming NFT on Algorand or locking NFT on Alogrand during a bridging process, the pop up shows up two times instead of one time when calling a contract function


## Getting Started

The ALGO-ETH Bridge is made up of the following major parts:
- [The Backend](https://github.com/asolpshinning/nft-bridge/tree/main/pages/api)

    - `bridgeToAlgo.js` => this is the API called by the front end (after ERC-721 NFt has been locked) when it is time to launch Algorand NFT, deploy an Algorand contract that receives the Algroand NFT to be claimed by the bridger. The bridger would claim the NFT in the front end after first opting into the Algorand NFT 

    - `authenticate.js` => this is a function called by "bridgeToAlgo.js" to perform authentication (confirm that the bridger has actually locked ERC-721 NFT in the ethereum bridge contract). Three forms of authentication are being performed by this file - (1) confirm that locking of ERC-721 NFT is the latest event that happened for this NFT contract. (2) That it was the bridger's ETH wallet address who performed the locking and was sent to specific bridge contract capable of receiving ERC-721 tokens (3) that the locking took place for the specified NFT ID in the front end 

    - `deployAlgoLock.ts` => this is the first API called by the front end when trying to do ALGO-to-ETH bridging. It deploys an Algorand smart contract when a bridger wants to bridge an Algorand NFT to ERC-721. The smart contract deployed is for locking the Algorand NFT for the bridge to take place.

    - `finalAlgoBridgeStep.ts` => this is the second API called by the front end when trying to do ALGO-to-ETH bridging. This is only called after Algorand NFT has been locked by the Bridger in the front end. This API lets the backend confirm if the specific bridger has locked the specific Algorand NFT, and then mints the ERC-721 NFT, and the sends it to the bridger's ethereum address. After this, it calls the deployed Algorand smart contract to indicate that the bridge has been completed.

    - `mintEthNft.js` => this is a server function called by "finalAlgoBridgeStep.ts" to mint ERC-721 NFT

- [Reach Compiled Javascript Files](https://github.com/asolpshinning/nft-bridge/tree/main/reachBackend)

    - `algoToEth.main.mjs` (this is compiled from algoToEth.rsh). It is mainly for locking ALgorand NFT in a reach algorand smart contract, and the backend can view the contract to see whether the "bridger" has locked NFT in it before minting ERC-721 NFT. THe backend can also check this contract to see if the backend has previously noted that a specific bridge has been completed.

    - `test.main.js` (this is compiled from test.rsh). This is mainly used in the front end  the bridger can use to claim Algorand NFT from the Algorand smart contract deployed by the backend, after a bridger locks ERC-721 NFT during a bridging process.

    - `test.main.mjs` (this is compiled from test.rsh). This is the same Algorand contract as above (excpet it is a module extension). This is used by the backend to deploy an Algorand smart contract that the front end can use to claim an NFT

- [ETH ABI Contracts and Functions](https://github.com/asolpshinning/nft-bridge/tree/main/ethContracts)

    - `erc721a.js` => these are functions and the minter address required to launch a web3 instance in the backend using the web3.js library

    - `erc721abi.json` => this is the eth bridge ABI which is able to receive any ERC-721 NFT being permanently locked and also able to mint new ERC-721 NFT after an algorand NFT has been locked. 

    - `nftAbi.json` => this is the example ABI of the ERC-721 NFT issued by the Bridge Deployer who is offering bridging services for people to move their NFTs from Ethereum to Algorand 

    - `erc721.sol` => this is the solidity code for the ERC=721 NFT contract


- [Reach Smart Contracts](https://github.com/asolpshinning/nft-bridge/tree/main/reachContracts)

    - `test.rsh` => this is the reach smart contract that allows the bridger to claim Algorand NFT when bridging from Ethereum to Algorand

    - `algoToEth.main.rsh` => this is the reach smart contract that lets the bridger locks Algorand NFT and the backend confirms this before minting ERC-721 NFT for the bridger.

## Run this Project
 Use
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
