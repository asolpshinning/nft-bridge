const ethers = require ('ethers');
const Web3 = require ('web3');
const ctc = require('../../ethContracts/erc721a.js');
const mnemonic = process.env.ETH_MNEMONIC;
const privateKey = process.env.ETH_PRIVATE_KEY;
const infura = `https://goerli.infura.io/v3/eaf55bdd847a49a6a4701f2ef30e96f8`;
const web3 = new Web3(infura);

const mintNft = async (to, url) => {
    /* const mnemonicWallet = ethers.Wallet.fromMnemonic(mnemonic);
    const privateKey = mnemonicWallet.privateKey; */
    const acc = web3.eth.accounts.privateKeyToAccount(privateKey); //account object
    const address = acc.address;
    console.log(`Address making transaction:  ${address}`);
    const bridgeCtc = ctc.bridgeContract(web3, ctc.goerliNftMinter);
    const nonce = await web3.eth.getTransactionCount(address, 'latest'); //get latest nonce
    console.log(`The nonce is: ${nonce}`);
    const tx = {
        'from': address,
        'to': ctc.goerliNftMinter,
        'gas': 500000,
        'maxPriorityFeePerGas': 1999999987,
        'nonce': nonce,
        'data': bridgeCtc.methods.mint(to, url).encodeABI()
    }
    console.log(`about to sign with pk`);
    const signPromise = web3.eth.accounts.signTransaction(tx, privateKey);
    signPromise.then((signedTx) => {
        web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(err, hash) {
        if (!err) {
            console.log("The hash of your transaction is: ", hash); 
            return hash;
        } else {
            console.log("Something went wrong when submitting your transaction:", err);
            return `Something went wrong when submitting your transaction: ${err}`;
        }
        });
    }).catch((err) => {
        console.log("Promise failed:", err);
    });

}

module.exports = {mintNft};