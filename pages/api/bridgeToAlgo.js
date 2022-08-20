const loadStdlib = require("@reach-sh/stdlib");
import * as backendCtc from "../../reachBackend/test.main.mjs";
const Web3 = require("web3");
const { authenticate } = require("./authenticate.js");
// import { nftContract } from '../../ethContracts/erc721.';
const private_key = process.env.PRIVATE_KEY;
const infura = `https://goerli.infura.io/v3/eaf55bdd847a49a6a4701f2ef30e96f8`;
const web3 = new Web3(infura);

const handler = async (request, res) => {
  let req = request.body;
  let ctcId = `deployment pending`;
  let nft = `not deployed yet`;

  const deploySmartContract = async () => {
    //connect wallet
    const stdlib = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    const accCreator = await stdlib.newAccountFromMnemonic(private_key);
    stdlib.setProviderByName("TestNet");
    console.log(`TestNet has been set as the provider`);

    const deployToken = async () => {
      //Launch tokens
      const bT = await stdlib.launchToken(
        accCreator,
        req.tokenName,
        req.tokenSymbol,
        {
          decimals: 0,
          supply: 3,
          url: req.url /* metadataHash: req.metadataHash */,
        }
      );
      console.log("This is the ID of the NFT: ", bT.id._hex);
      console.log(
        "Algorand NFT ID in plain number: ",
        stdlib.bigNumberToNumber(bT.id._hex)
      );
      return String(stdlib.bigNumberToNumber(bT.id._hex));
    };
    //connect to backend
    const ctcCreator = accCreator.contract(backendCtc);
    console.log(`...backend now connected`);

    await Promise.all([
      deployToken().then((nftId) => {
        nft = nftId;
        backendCtc
          .Creator(ctcCreator, {
            getParams: (msg) => {
              console.log(
                `${stdlib.formatAddress(
                  accCreator
                )} about to set "NFTid" and "Bridger address" as parameters of central Contract`
              );
              ctcCreator.getInfo().then((id) => {
                ctcId = id;
                console.log(
                  `SUCCESS: this is the deployed contract id: ${id} and ${msg}`
                );
              });
              return { NFT: nftId, Bridger: req.bridgerOnAlgo };
            },
            iDeployed: async (msg) => {
              console.log(msg + ` and ${ctcId} is the contract ID`);
            },
          })
          .then(() => {})
          .catch((err) => {
            console.log(
              `ERROR: central contract has not been fully deployed`,
              err
            );
          });
      }),
    ]);
    return [ctcId, nft];
  };
  try {
    authenticate(req.ethNftCtcId)
      .then(async (auth) => {
        console.log(`req.tokenId is: ${req.tokenId} AND auth.tokenId is: ${auth.tokenId}`);
        console.log(`authenticating tokenId`, auth.tokenId == req.tokenId );
        if (
          auth.from == req.bridgerOnEth &&
          auth.to == `0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2` &&
          auth.tokenId == req.tokenId &&
          auth.eventId !== `none`
        ) {
          //for greater security, we should check the eventId is not any saved in databse before
          console.log(`authentication success`);
          deploySmartContract().then((a) => {
            //set timeout
            setTimeout(() => {
              res
                .status(200)
                .json({
                  success: `Contract deployed successfully with Contract id: ${ctcId}`,
                  NFTid: a[1],
                  contractId: `${ctcId}`,
                });
            }, 25000);
          });
        } else {
          console.log(`authentication failed`);
          res
            .status(500)
            .json({
              error: `authentication failed: Could not confirm locking of your NFT for bridging`,
            });
        }
      })
      .catch((error) => {
        console.log(`there is an error while authenticating: `, error);
      });
  } catch (err) {
    console.log(`error: `, err);
    res.status(500).json({ error: err });
  }
};
export default handler;