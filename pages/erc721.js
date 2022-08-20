import Web3 from "web3";
import { nftContract, bridgeContract } from "../ethContracts/erc721";
//import styles from '../styles/Home.module.css'
import React from "react";
import { useState, useRef, useEffect } from "react";
import { ALGO_MyAlgoConnect as MyAlgoConnect } from "@reach-sh/stdlib";
//import 'bulma/css/bulma.css'
import loadStdlib from "@reach-sh/stdlib";
import * as backendCtc from "../reachBackend/test.main";
//import "../styles/tailwind.css";

export default function Erc721() {
  const [web3, setWeb3] = useState();
  const address = useRef("");
  const algorandAddress = useRef("");
  const ctcId = useRef("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const [modal, setModal] = useState(null);
  const [image, setImage] = useState(null);
  const [metaData, setMetaData] = useState(null);
  const [URL, setURL] = useState("");
  const wallConn = useRef(false);
  const algoCtcId = useRef("");
  const running = useRef(true);
  const animate =
    "animate-spin bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const noAnimate =
    "bg-yellow-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";
  const [bridgeButton, setBridgeButton] = useState(noAnimate);

  //useful function to getELement by id
  const getElement = (id) => {
    let theElement = document.getElementById(id);
    return theElement.value;
  };

  const connectWallet = async () => {
    setError("");
    setSuccessMsg("");
    /* ////check if MetaMask is installed */

    if (
      typeof window !== "undefined" &&
      typeof window.ethereum !== "undefined"
    ) {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        if (getElement("erc721nftId").length <= 8) {
          alert(`Please enter a valid NFT CONTRACT ID first`);
          return;
        }
        /* request wallet connection */
        await window.ethereum.request({ method: "eth_requestAccounts" });
        /* create web3 instance & set to state */
        const web3_ = new Web3(window.ethereum);

        /* set web3 instance in React state */
        setWeb3(web3_);
        if (wallConn.current == true) {
          alert(`Metamask Wallet already connected`);
        }
        /* get list of accounts */
        const accounts = await web3_.eth.getAccounts();
        /* set account 1 to React state */
        address.current = accounts[0];
        const nftCtcId = getElement("erc721nftId");
        /* create local contract copy */
        const ctc = await nftContract(web3_, nftCtcId);
        ctcId.current = ctc;
        //write a function that finds how many enteries is in an object
        const count = (obj) => {
          let count = 0;
          for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
              count++;
            }
          }
          return count;
        };
        while (wallConn.current == false) {
          if (count(ctc.methods) >= 1) {
            wallConn.current = true;
            ctcId.current = ctc;
            alert(
              `Fun fact: There are ${count(
                ctc.methods
              )} methods in the nft contract`
            );
          }
          if (wallConn.current == true) {
            alert(`Metamask Wallet connected`);
          }
        }
        /* window.ethereum.on('accountsChanged', async () => {
              const accounts = await web3.eth.getAccounts()
              console.log(accounts[0])
              addreess.current = (accounts[0])
            }) */
      } catch (err) {
        setError(err.message);
        alert(err.message);
      }
    } else {
      /* MetaMask is not installed */
      console.log("Please install MetaMask");
    }
  };

  const bridgeNFT = async () => {
    if (wallConn.current !== true) {
      alert("Let us connect your wallet...");
    }
    if (wallConn.current !== true) connectWallet();
    const tokenId = parseInt(getElement("nftUrl"));
    algorandAddress.current = getElement("algorandAddress");
    if (algorandAddress.current.length <= 0) {
      alert(`Please enter a valid Algorand address`);
      return;
    }
    setError("");
    setSuccessMsg("");
    console.log(`address of person bridging :: ${address.current}`);

    const deployToken = async () => {
      const tokenIdd = parseInt(getElement("nftUrl"));
      const ctcIdd = getElement("erc721nftId");
      let algoAddr = getElement("algorandAddress");
      algorandAddress.current = algoAddr;
      if (algorandAddress.current == "") {
        alert("Please enter your Algorand address");
        return;
      }
      try {
        const res = await fetch("api/bridgeToAlgo", {
          method: "POST",
          body: JSON.stringify({
            ethRecAddr: address.current,
            ethNftCtcId: ctcIdd,
            bridgerOnEth: address.current,
            bridgerOnAlgo: algoAddr,
            name: "",
            url: URL,
            metadataHash: "metaDataHash",
            tokenId: tokenIdd,
          }),
          headers: { "Content-Type": "application/json" },
        });
        const data = await res.json();
        if (data.contractId) setBridgeButton(animate);
        if (data.contractId)
          alert(
            `This Algorand Bridge contract now holds your NFT waiting to be claimed (write it down): ${data.contractId}`
          );
        if (data.contractId)
          alert( 
            `This is the ID of your "NFT" waiting for you to claim after opting in:  ${data.NFTid}`
          );
        if (data.contractId) {
          algoCtcId.current = data.contractId;
          alert(
            `You can now go ahead and claim your NFT on Algorand on the next prompt`
          );
          optinToNFT(data.NFTid);
          runAPI("claimNFT");
        } else {
          setBridgeButton(noAnimate);
          alert(`Server authentication failed. Please try again`);
        }
      } catch (error) {
        alert(`error: `, error);
      }
    };
    let count = 0;
    if (wallConn.current == true)
      try {
        if (isNaN(tokenId)) {
          alert(
            `Please enter a valid NFT ID. You entered this invalid value: "${getElement(
              "nftUrl"
            )}"`
          );
          return;
        }
        setBridgeButton(animate);
        ctcId.current.methods
          .transferFrom(
            address.current,
            "0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2",
            tokenId
          )
          .send({
            from: address.current,
            gas: 300000,
            gasPrice: null,
          })
          .on("error", function (error, receipt) {
            setBridgeButton(noAnimate);
            running.current = false;
            alert(`There is an error: ${JSON.stringify(error)}`);
          })
          .on("confirmation", function (confirmationNumber, receipt) {
            while (count < 1 && running.current == true) {
              getNftUri();
              deployToken();
              count++;
            }
            if (running.current == false) {
              setBridgeButton(noAnimate);
            }
          });
      } catch (err) {
        setBridgeButton(noAnimate);
        running.current = false;
        alert(err.message);
        setError(err.message);
      }
  };

  const checkNftBalance = async () => {
    if (wallConn.current !== true) {
      alert("Let us connect your wallet...");
    }
    if (wallConn.current !== true) connectWallet();
    let ctcid = ctcId.current;
    if (wallConn.current == true)
      try {
        const bal = await ctcid.methods.balanceOf(address.current).call();
        alert(`NFT balance of ${address.current} is ${bal}`);
      } catch (err) {
        alert(err.message);
        setError(err.message);
      }
  };

  const getNftUri = async () => {
    if (wallConn.current !== true) {
      alert("Let us connect your wallet...");
    }
    if (wallConn.current !== true) connectWallet();
    const tokenId = parseInt(getElement("nftUrl"));
    if (isNaN(tokenId)) {
      alert(
        `Please enter a valid NFT ID. You entered this invalid value: "${getElement(
          "nftUrl"
        )}"`
      );
      return;
    }
    if (wallConn.current == true)
      try {
        const uri = await ctcId.current.methods.tokenURI(tokenId).call();
        setURL(uri);
        const gateway = uri.replace(
          "ipfs://",
          "https://gateway.ipfscdn.io/ipfs/"
        );
        const metadata = await fetch(gateway).then((r) => r.json());
        setMetaData(metadata);
        const uri2 = "https://ipfs.io/ipfs/" + metadata.image.substring(7);
        setSuccessMsg(`The URL of the NFT with id ${tokenId} is: 
                 ${uri2}`);
        setImage(<img src={uri2}></img>);
      } catch (err) {
        alert(err.message);
        setError(err.message);
      }
  };

  //ALGORAND
  let Bool = "Bool";
  let UInt = "UInt";

  const API = (arg = { apiName: [[""]] }) => {
    return arg;
  };
  const Fun = (arg1, arg2, arg3, arg4) => {
    return [arg1, arg2, arg3, arg4];
  };
  //this is an input that needs to be provided by the smart contract developer
  const User = API({
    approveBridge: Fun([], Bool, [], `Backend Approve Bridge`),
    lockNFT: Fun([], Bool, [], `Bridger Lock NFT`),
    claimNFT: Fun([], Bool, [], `Bridger Claim NFT`),
  });

  const [algoAddress, setAlgoAddress] = useState(
    "Connect Your Wallet. Click 'connect'"
  );
  const [algoBalance, setAlgoBalance] = useState(0);
  //
  const connect = async () => {
    const reach = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(
      reach.walletFallback({
        providerEnv: "TestNet",
        MyAlgoConnect,
      })
    );
    const acc = await reach.getDefaultAccount();
    setAlgoAddress(acc.getAddress());
    setAlgoBalance(reach.formatCurrency(await reach.balanceOf(acc)), 4);
    //
  };
  const checkAlgoNftBalance = async () => {
    return algoBalance;
  };
  //API calling
  const callAPI = async (reachBackend, ctcDeployed, apiName, apiArg) => {
    const reach = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(
      reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
    );
    const acc = await reach.getDefaultAccount();
    const ctc = acc.contract(reachBackend, ctcDeployed);

    const call = async (f) => {
      let res = undefined;
      try {
        res = await f();
        if (res == `no`) {
          console.log(`"${apiName}" API is not available from Reach backend`);
          alert(`"${apiName}" API is not available from Reach backend`);
          setBridgeButton(noAnimate);
        } else {
          console.log(
            `the "${apiName}" API has successfully worked. Here is the response:`,
            res
          );
          alert(
            `the "${apiName}" API has successfully worked. Here is the response: ${res}`
          );
          setBridgeButton(noAnimate);
        }
      } catch (e) {
        res = [`err`, e];
        console.log(`there is an error while running "${apiName} API: "`, e);
        alert(`there is an error while running "${apiName} API: ${e}`);
        setBridgeButton(noAnimate);
      }
    };
    //
    const apis = ctc.a;
    call(async () => {
      let apiReturn;
      ``;
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
  };

  // this is the function that executes and call the callAPI
  const runAPI = (apiName) => {
    let arrArg = [];
    let input = User[apiName][0].map((j, index) => {
      return j == UInt
        ? parseInt(getElement(`${apiName}${j}${index + 1}`))
        : getElement(`${apiName}${j}${index + 1}`);
    });
    console.log(`this is input: `, input);
    callAPI(backendCtc, algoCtcId.current, apiName, input);
  };

  const optinToNFT = async (token) => {
    const reach = loadStdlib.loadStdlib({ REACH_CONNECTOR_MODE: "ALGO" });
    reach.setWalletFallback(
      reach.walletFallback({ providerEnv: "TestNet", MyAlgoConnect })
    );
    const acc = await reach.getDefaultAccount();
    await acc.tokenAccept(token);
  };

  const claimNft = async () => {
    runAPI("claimNFT");
  };

  const deployToken = async () => {
    const tokenIdd = parseInt(getElement("nftUrl"));
    const ctcIdd = getElement("erc721nftId");
    let algoAddr = getElement("algorandAddress");
    algorandAddress.current = algoAddr;
    if (algorandAddress.current == "") {
      alert("Please enter your Algorand address");
      return;
    }
    try {
      const res = await fetch("api/bridgeToAlgo", {
        method: "POST",
        body: JSON.stringify({
          ethRecAddr: address.current,
          ethNftCtcId: ctcIdd,
          bridgerOnEth: address.current,
          bridgerOnAlgo: algoAddr,
          name: "",
          url: URL,
          metadataHash: "metaDataHash",
          tokenId: tokenIdd,
        }),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      if (data.contractId) setBridgeButton(animate);
      if (data.contractId)
        alert(
          `This Algorand Bridge contract now holds your NFT waiting to be claimed (write it down): ${data.contractId}`
        );
      if (data.contractId)
        alert( 
          `This is the ID of your "NFT" waiting for you to claim after opting in:  ${data.NFTid}`
        );
      if (data.contractId) {
        algoCtcId.current = data.contractId;
        alert(
          `You can now go ahead and claim your NFT on Algorand on the next prompt`
        );
        optinToNFT(data.NFTid);
        runAPI("claimNFT");
      } else {
        setBridgeButton(noAnimate);
        alert(`Server authentication failed. Please try again`);
      }
    } catch (error) {
      alert(`error: `, error);
    }
  };
  

  return (
    <div className="bg-blue-500 flex flex-col">
      <nav className="navbar mt-4 mb-4">
        <div className="container mx-auto">
          <h2 font="34px">
            <strong>TESTING ETH BRIDGE</strong>
          </h2>
          <div className="navbar-end">
            <button
              onClick={connectWallet}
              className="bg-orange-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      </nav>
      <div className="mb-5">
        <p>Enter the ERC721 NFT Contract ID: </p>
        <input
          id="erc721nftId"
          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        ></input>
        <button
          className="bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={checkNftBalance}
        >
          Check your NFT Balance (ERC-721)
        </button>{" "}
        <br />
      </div>
      <div className="mb-5">
        <p>Enter the ERC721 token ID: </p>
        <input
          id="nftUrl"
          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        ></input>
        <br />
        <p>
          Enter your Algorand Wallet Address that will receive Algorand NFT:{" "}
        </p>
        <input
          id="algorandAddress"
          className="px-3 py-3 placeholder-slate-300 text-slate-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
        ></input>
        <button className={bridgeButton} onClick={bridgeNFT}>
          Bridge NFT
        </button>{" "}
        <br />
        <br />
        {/* <button className="button is-primary" onClick = {claimNft}> Claim Algorand NFT</button> */}
        <button className="button is-danger" onClick = {deployToken}>Test BackEnd</button> <br/><br/>
      </div>
      <div className="mb-5">
        <button
          className="bg-purple-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={getNftUri}
        >
          Check NFT URL
        </button>{" "}
        <br />
        <h3 style={{ color: "green" }}>{successMsg}</h3>
        {image}
      </div>
    </div>
  );
}
