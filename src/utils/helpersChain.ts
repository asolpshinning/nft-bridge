import { loadStdlib } from "@reach-sh/stdlib";
import Web3 from "web3";
import { nftContract } from "../../ethContracts/erc721";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
import * as backendCtc from "../../reachBackend/algoToEth.main.mjs";
import * as backendCtcE2A from "../../reachBackend/test.main.mjs";
import { Dispatch, SetStateAction } from "react";
import { LoadingButtonStateType } from "../components/buttons/LoadingButtonText";
declare let window: any;
let countE2A = 0 ;
let algoWalletConnected = false
let acc : any = null;

const apiPath = "/api";
// =============== WALLET CONNECTORS =====================

export const connectEthWallet = async (
  ethWalletAddress: string,
  setEthWalletAddress: (uri: string) => void
) => {
  /* ////check if MetaMask is installed */
  if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      const web3_ = new Web3(window.ethereum);
      if (ethWalletAddress) {
        alert(`Metamask Wallet already connected`);
      }
      const accounts = await web3_.eth.getAccounts();
      setEthWalletAddress(accounts[0]);
    } catch (err: any) {
      alert(err.message);
    }
  } else {
    /* MetaMask is not installed */
    alert("Please install MetaMask");
  }
};

export const connectAlgoWallet = async (
  setAlgoWalletAddress: Dispatch<SetStateAction<string>>,
  setPubKey: Dispatch<SetStateAction<string>>
) => {
  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  acc = await reach.getDefaultAccount();
  algoWalletConnected = true;

  const contractUserPubKey = acc.getAddress();
  setPubKey(contractUserPubKey);
  setAlgoWalletAddress(reach.formatAddress(contractUserPubKey));
};

export const checkAlgoNftBalance = async (
  nft: string
) => {
  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  if(algoWalletConnected == false) {
    acc = await reach.getDefaultAccount();  
  }
  let ret =  parseFloat(reach.formatCurrency(await reach.balanceOf(acc, nft), 6))*1000000;
  return ret;
}

// =============== SHARED FUNCTIONS =====================

export const shortenAddress = (address: string) => {
  return address.slice(0, 6) + "..." + address.slice(-4);
};

const runAPI = async (apiName: any, algorandBridgeId: any) => {
  let input: any = [];
  callAPI(backendCtc, algorandBridgeId, apiName, input);
};

// =============== FROM-ETH FUNCTIONS =====================

export const checkEthNftBalance = async (
  nftCtcId: string,
  ethWalletAddress: string,
  setNftBalance: (bal: string) => void
) => {
  //should I make web3 a state?
  const web3_ = new Web3(window.ethereum);
  const ctc = await nftContract(web3_, nftCtcId);
  if (!nftCtcId) {
    alert("Please enter your NFT's contract address");
  }
  if (ethWalletAddress) {
    try {
      const bal = await ctc.methods.balanceOf(ethWalletAddress).call();
      setNftBalance(bal);
    } catch (err: any) {
      alert(`checkBalance: ${err.message}`);
    }
  }
};

export type getEthNftUriProps = {
  selectedNftId: string;
  nftToBeBridgedAddress: string;
  ethWalletAddress: string;
  setNftImageUrl: Dispatch<SetStateAction<string>>;
  setNftUrl: Dispatch<SetStateAction<string>>;
  setMetaData: Dispatch<SetStateAction<undefined>>;
};
export const getEthNftUri = async ({
  selectedNftId,
  nftToBeBridgedAddress,
  ethWalletAddress,
  setNftImageUrl,
  setNftUrl,
  setMetaData,
}: getEthNftUriProps) => {
  if (isNaN(parseInt(selectedNftId))) {
    alert(
      `Please enter a valid NFT ID. You entered this invalid value: "${selectedNftId}"`
    );
    return;
  }
  if (!!ethWalletAddress)
    try {
      const web3_ = new Web3(window.ethereum);
      const ctc = await nftContract(web3_, nftToBeBridgedAddress);
      const uri = await ctc.methods
        .tokenURI(selectedNftId.replaceAll(" ", ""))
        .call();
      setNftUrl(uri);
      const gateway = uri.replace(
        "ipfs://",
        "https://gateway.ipfscdn.io/ipfs/"
      );
      const metadata = await fetch(gateway).then((r) => r.json());
      setMetaData(metadata);
      const uri2 = "https://ipfs.io/ipfs/" + metadata.image.substring(7);

      setNftImageUrl(uri2);
    } catch (err: any) {
      alert(`getUri: ${err.message}`);
    }
};

export const optInToNFT = async (token: string) => {
  if(countE2A == 1){
    countE2A++;
    let ret : boolean = false;
    const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(
      reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
    );
    if(algoWalletConnected == false){
      acc = await reach.getDefaultAccount();
    }
    console.log("acc", acc);
    acc.tokenAccept(token).then((accepted : any) =>
      {
        if(accepted) ret = true;
        alert(`You have now opted in to ${token}`)
      });
     return ret;
  } else {
    alert(`optInToNFT function was already run once`);
    return false;
  }
  
};

export const callAPI = async (
  reachBackend: any,
  ctcDeployed: any,
  apiName: any,
  apiArg: any
) => {
  let response;
  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  if(algoWalletConnected == false){
    acc = await reach.getDefaultAccount();
  }
  const ctc = acc.contract(reachBackend, ctcDeployed);

  const call = async (f: any) => {
    console.log(acc)
    let res = undefined;
    try {
      res = (countE2A == 3 && apiName == 'claimNFT') || apiName == 'lockNFT' ? await f() : 'no way';
      response = await f();
      if (res == `no`) {
        console.log(`"${apiName}" API is not available from Reach backend`);
        alert(`"${apiName}" API is not available from Reach backend`);
      } else if(res == `no way`) {
        console.log(`"${apiName}" API is not available because you are trying to run it more than 1 time`);
        alert(`countE2A is now ${countE2A}... "${apiName}" API is not available you are trying to run it more than 1 time`);
      }
      else {
        countE2A++;
        console.log(
          `the "${apiName}" API has successfully worked. Here is the response:`,
          res
        );
        alert(
          `the "${apiName}" API has successfully worked. Here is the response: ${res}`
        );
      }
    } catch (e) {
      res = [`err`, e];
      console.log(`there is an error while running "${apiName} API: "`, e);
      alert(`there is an error while running "${apiName} API: ${e}`);
    }
  };
  //
  const apis = ctc.a;
  call(async () => {
    let apiReturn;
    for (const x in apis) {
      if (x == apiName) {
        apiReturn = await apis[apiName](...apiArg);
      }
    }
    if (apiReturn == ``) {
      apiReturn = `no`;
    }
    return apiReturn;
  });
  return response;
};

type deployAlgoTokenProps = {
  algoWalletAddress: string;
  ethWalletAddress: string;
  nftUrl: string;
  selectedNftId: string;
  nftToBeBridgedAddress: string;
  algorandBridgeId: any;
  setNftClaimId: Dispatch<SetStateAction<string>>;
  setButtonStep: Dispatch<SetStateAction<LoadingButtonStateType>>;
};

const deployAlgoToken = async ({
  //@Jake -  this is running the backend like three times - may be rerendering issue
  algoWalletAddress,
  ethWalletAddress,
  nftUrl,
  selectedNftId,
  algorandBridgeId,
  nftToBeBridgedAddress,
  setNftClaimId,
  setButtonStep,
}: deployAlgoTokenProps) => {
  if (algoWalletAddress == "") {
    alert("Please enter your Algorand address");
    return;
  }
  try {
    console.log("deploying algo token");
    const res = await fetch(apiPath + "/bridgeToAlgo", {
      // @Sunday - Problem here
      method: "POST",
      body: JSON.stringify({
        ethRecAddr: ethWalletAddress,
        ethNftCtcId: nftToBeBridgedAddress,
        bridgerOnEth: ethWalletAddress,
        bridgerOnAlgo: algoWalletAddress,
        name: "",
        url: nftUrl,
        //We probably need to transfer the metadata of the NFT to the Algorand contract
        metadataHash: "metaDataHash",
        tokenId: selectedNftId,
      }),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    if (data.contractId) {
      algorandBridgeId.current = `${data.contractId}`;
      setNftClaimId(data.NFTid);
      alert(
        `This Algorand Bridge contract now holds your NFT waiting to be claimed (write it down): ${data.contractId}`
      );
      alert(
        `This is the ID of your "NFT" waiting for you to claim after opting in:  ${data.NFTid}. You will be able to claim your NFT on Algorand on the next prompt`
      );
      if(countE2A == 1) { 
        optInToNFT(data.NFTid).then((ret) => {
          setTimeout(() => {
            callAPI(backendCtcE2A, algorandBridgeId.current, "claimNFT", []) ;
          } , 5000);
        })
        countE2A++;       
       }
      setButtonStep("confirmed");
      return data.contractId;
    } else {
      setButtonStep("failed");
      alert(`Server authentication failed. Please try again`);
      return `there was an error. No ALgo Bridge contract ID deployed`;
    }
  } catch (err) {
    alert(`error: ${err}`);
    setButtonStep("failed");
    return `error: ${err}`;
  }
};

type bridgeEthToAlgoProps = deployAlgoTokenProps & {
  count: any;
  nftToBeBridgedAddress: string;
  
};

export const bridgeEthToAlgo = async ({
  algoWalletAddress,
  ethWalletAddress,
  nftUrl,
  selectedNftId,
  algorandBridgeId,
  count,
  nftToBeBridgedAddress,
  setButtonStep,
  setNftClaimId,
}: bridgeEthToAlgoProps) => {
  if (!ethWalletAddress) {
    alert("Please connect your wallet...");
  }
  if (algoWalletAddress.length <= 0) {
    alert(`Please enter a valid Algorand address`);
    return;
  }

  if (!!ethWalletAddress)
    try {
      if (isNaN(parseInt(selectedNftId))) {
        alert(
          `Please enter a valid NFT ID. You entered this invalid value: "${selectedNftId}"`
        );
        return;
      }
      setButtonStep("submitting");
      const web3_ = new Web3(window.ethereum);
      const ctc = await nftContract(
        web3_,
        nftToBeBridgedAddress.replaceAll(" ", "")
      );
      ctc.methods
        .transferFrom(
          ethWalletAddress,
          "0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2",
          selectedNftId
        )
        .send({
          from: ethWalletAddress,
          gas: 300000,
          gasPrice: null,
        })
        .on("error", function (error: any, receipt: any) {
          setButtonStep("failed");
          alert(`There is an error: ${JSON.stringify(error)}`);
        })
        .on(
          "confirmation",
          async function (confirmationNumber: any, receipt: any) {
            //this is to make sure it only runs once and not infinitely
            while (countE2A < 1) {
              countE2A++;
              deployAlgoToken({
                algoWalletAddress,
                ethWalletAddress,
                nftUrl,
                selectedNftId,
                nftToBeBridgedAddress,
                algorandBridgeId,
                setNftClaimId,
                setButtonStep,
              }).then((ret) => {
                console.log("deployAlgo", ret);
              })
            }
          }
        );
    } catch (err: any) {
      setButtonStep("failed");

      alert(`bridgeEthtoAlgo, ${err.message}`);
    }
};

// =============== FROM-ALGO FUNCTIONS =====================

export const getAlgoNftBalance = async (nftId: string) => {
  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  reach.setWalletFallback(
    reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
  );
  if(algoWalletConnected == false){
    acc = await reach.getDefaultAccount();
  }
  const bal = await reach.balanceOf(acc, nftId);
  return parseFloat(reach.formatCurrency(bal, 6));
};

export type getAlgoNftUriProps = {
  nftToBeBridgedAddress: string;
  setNftUrl: Dispatch<SetStateAction<string>>;
  setNftImageUrl: Dispatch<SetStateAction<string>>;
};

export const getAlgoNftUri = async ({
  nftToBeBridgedAddress,
  setNftUrl,
  setNftImageUrl,
}: getAlgoNftUriProps) => {
  const reach = loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
  if(algoWalletConnected == false){
    acc = await reach.getDefaultAccount();
  }
  const metadata = await acc.tokenMetadata(
    nftToBeBridgedAddress.replaceAll(" ", "")
  );
  setNftUrl(metadata.url);
  const gateway = metadata.url.replace(
    "ipfs://",
    "https://gateway.ipfscdn.io/ipfs/"
  );
  const metadataIpfs = await fetch(gateway)
    .then((r) => r.json())
    .catch((e) => {
      alert(`error: ${e.message}. Are you sure this is an NFT ID?`);
    });
  const uri2 = "https://ipfs.io/ipfs/" + metadataIpfs.image.substring(7);
  setNftImageUrl(uri2);
};

type deployAlgoLockProps = {
  algoWalletAddress: string;
  ethWalletAddress: string;
  nftToBeBridgedAddress: string;
  status: any;
  algorandBridgeId: any;
  setButtonStep: Dispatch<SetStateAction<LoadingButtonStateType>>;
};

const deployAlgoLock = async ({
  algoWalletAddress,
  nftToBeBridgedAddress,
  status,
  algorandBridgeId,
  setButtonStep,
}: deployAlgoLockProps) => {
  try {
    setButtonStep("submitting");
    const res = await fetch(apiPath + "/deployAlgoLock", {
      method: "POST",
      body: JSON.stringify({
        algoNftId: nftToBeBridgedAddress,
        bridgerOnAlgorand: algoWalletAddress,
      }),
      headers: { "Content-Type": "application/json" },
    });
    let data: any;
    res.json().then((x) => {
      alert(x.success);
      console.log(x.success);
      data = x;
      if (data.contractId) {
        status.current = "lockCtcDeployed";
        algorandBridgeId.current = `${data.contractId}`;
        alert(
          `You now need to lock your Algorand NFT in the bridge contract: ${data.contractId}`
        );
        setButtonStep("submitting");
      } else {
        setButtonStep("failed");
        alert(`There was a problem deploying the bridge contract`);
      }
    });
  } catch (err) {
    status.current = "error";
    setButtonStep("failed");
    alert(`deployAlgoLock error: ${err}`);
  }
};

type bridgeAlgoToEthProps = deployAlgoLockProps & {
  ethNftId: any;
  lockingNFT: any;
  pubKey: string;
  nftUrl: string;
};
//triggered by submit of form
export const bridgeAlgoToEth = async ({
  algorandBridgeId,
  ethNftId,
  ethWalletAddress,
  algoWalletAddress,
  nftToBeBridgedAddress,
  status,
  setButtonStep,
  nftUrl,
  pubKey,
}: bridgeAlgoToEthProps) => {
  if(await checkAlgoNftBalance(nftToBeBridgedAddress) == 0){
    alert(`You do not have enough Algorand NFT to lock. Your NFT balance is 0`);
    return;
  }
  const lockNFT = async () => {
    console.log(algorandBridgeId.current);
    const bal = 1000000 * (await getAlgoNftBalance(nftToBeBridgedAddress));
    try {
      if (bal > 0) {
        let count = 0;
        while (count == 0) {
          count++;
          await runAPI("lockNFT", algorandBridgeId.current);
          status.current = "nftLocked";
          return true;
        }
      } else {
        alert(`You do not have enough Algorand to lock this NFT. You have ${bal} NFT`);
        return false;
      }
    } catch (err) {
      status.current = "error";
      alert(`lockNFT error: ${err}`);
    }
  };
  //
  const finalBridgeStep = async () => {
    try {
      const res = await fetch(apiPath + "/finalAlgoBridgeStep", {
        method: "POST",
        body: JSON.stringify({
          algoNftId: nftToBeBridgedAddress,
          algoBridgeId: algorandBridgeId.current,
          bridgerOnAlgorand: pubKey,
          bridgerOnEth: ethWalletAddress,
          nftUri: nftUrl,
        }),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();
      if (data.success) {
        status.current = "bridged";
        ethNftId.current = `${data.ethNftId}`;
        alert(
          `${data.success} and ${data.nftContractId}`
        );
        setButtonStep("confirmed");
      } else if(data.failure) {
        setButtonStep("failed");
        alert(`${data.failure}`);
      } else if(data.error) {
        setButtonStep("failed");
        alert(`${data.error}`);
      }
    } catch (err) {
      status.current = "error"
      alert(`error: ${err}`);
      setButtonStep("failed");
    }
  };
  //run the steps now
  if (status.current == "init" && algorandBridgeId.current === "") {
    deployAlgoLock({
      algoWalletAddress,
      nftToBeBridgedAddress,
      status,
      algorandBridgeId,
      setButtonStep,
      ethWalletAddress,
    }).then(() => {
      setTimeout(() => {
        if (status.current == "lockCtcDeployed") {
          alert(`about to lock NFT now`);
          let count = 0;
          while (count == 0) {
            count++;
            lockNFT().then((x) => {
              setTimeout(() => {
                if (status.current == "nftLocked") {
                  finalBridgeStep();
                }
              }, 27000);
            });
          }
        }
      }, 2000);
    });
  } else if (status.current == "error") {
    setButtonStep("failed");
    alert(`Error message returned from backend`);
  }
};
