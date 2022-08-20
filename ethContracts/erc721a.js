const bridgeAbi = require ('./erc721abi.json') ;
const nftAbi = require ( './nftAbi.json') ;


const nftContract = (web3, nftCtcId ) => {
    return new web3.eth.Contract(
        nftAbi,
        nftCtcId
    )
}

const goerliNftMinter = '0xB581b6b2E3c411285f53a28FFfcBe38169C2a599'

const bridgeContract = web3 => {
    return new web3.eth.Contract(
        bridgeAbi,
        goerliNftMinter
    )
}


module.exports = {
    nftContract,
    bridgeContract,
    goerliNftMinter
}