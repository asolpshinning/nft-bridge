const loadStdlib = require("@reach-sh/stdlib");
import * as backendCtc from "../../reachBackend/algoToEth.main.mjs";
// import { nftContract } from '../../ethContracts/erc721.';
const private_key = process.env.PRIVATE_KEY;

const handler = async (request: any, res: any) => {
  let req = request.body;

  let ctcId = `deployment pending`;
  //connect wallet
  const stdlib = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  console.log(private_key);
  const accCreator = await stdlib.newAccountFromMnemonic(private_key);
  stdlib.setProviderByName("TestNet");
  console.log(`TestNet has been set as the provider`);
  //connect to backend
  const ctcCreator = accCreator.contract(backendCtc);
  console.log(`...backend now connected`);

  await Promise.all([
    backendCtc
      .Creator(ctcCreator, {
        getParams: (msg: string) => {
          console.log(
            `${stdlib.formatAddress(
              accCreator
            )} about to set "NFTid" and "Bridger address" as parameters of central Contract`
          );
          ctcCreator.getInfo().then((id: string) => {
            ctcId = id;
            console.log(
              `SUCCESS: this is the deployed contract id: ${id} and ${msg}`
            );
          });
          return { NFT: req.algoNftId, Bridger: req.bridgerOnAlgorand };
        },
        iDeployed: async (msg: string) => {
          console.log(msg + ` and ${ctcId} is the contract ID`);
          try {
            console.log(`let us see what happens here`);
            res.status(200).json({
              success: `Contract deployed successfully with Contract id: ${ctcId}`,
              NFTid: req.algoNftId,
              contractId: `${ctcId}`,
            });
          } catch (err) {
            console.log(err);
            res.status(500).json({ error: err });
          }
        },
      })
      .catch((err) => {
        console.log(`ERROR: Bridge contract failed during deployment`, err);
      }),
  ]);
  return [ctcId, req.algoNftId];
};
export default handler;
