const Web3 = require('web3');
const ctc = require('../../ethContracts/erc721a.js');

const infura = `https://goerli.infura.io/v3/eaf55bdd847a49a6a4701f2ef30e96f8`;
const web3 = new Web3(infura);
const ethNftCtcId = '0x8d43F477F386228AC23CEcFC53B9CC9883c19BF4';

const authenticate = async(ethnft) => {
    let eventsss = null;
    let from = null
    let to = null
    let tokenId = null
    let eventId = null 
    const nftCtc = ctc.nftContract(web3, ethnft);
    await nftCtc.getPastEvents('Transfer', {
        fromBlock: 7322281,
        toBlock: 'latest'
    }, (error, events) => {
        if (error) {
            console.log(`there is an error while reading events: `, error);
        } else {
            
            eventsss = events;
            eventId = (events[events.length - 1].id)
            console.log(`the eventId is: `, eventId);
            let obsEvents = events[events.length - 1].returnValues;
            from = obsEvents.from;
            console.log(`the from is: `, from);
            to = obsEvents.to;
            console.log(`the to is: `, to);
            tokenId = obsEvents.tokenId;
            console.log(`the tokenId is: `, tokenId);
        }
        return {from, to, tokenId, eventId};
    } )
    
    return {from, to, tokenId, eventId}
}
/* const ethnftt = '0x8d43F477F386228AC23CEcFC53B9CC9883c19BF4';
const a = async() => {console.log(await authenticate(ethnftt));}
a(); */
 module.exports = {authenticate};