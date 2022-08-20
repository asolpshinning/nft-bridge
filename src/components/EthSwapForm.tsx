import FormSection from "../containers/FormSection";
import Input, {
  defaultFieldDiv,
  inputFieldClass,
} from "./form-components/Inputs";
import React, { useEffect } from "react";
import Web3 from "web3";
declare let window: any;
import cn from "classnames";
import {
  connectEthWallet,
  getEthNftUri,
  getEthNftUriProps,
  shortenAddress,
} from "../utils/helpersChain";

type EthSwapFormProps = getEthNftUriProps & {
  isFrom: boolean;
  setEthWalletAddress: (uri: string) => void;
};

const EthSwapForm: React.FC<EthSwapFormProps> = ({
  isFrom,
  ethWalletAddress,
  nftToBeBridgedAddress,
  selectedNftId,
  setNftUrl,
  setMetaData,
  setNftImageUrl,
  setEthWalletAddress,
}) => {
  // const [nftBalance, setNftBalance] = useState<string>("");

  useEffect(() => {
    let web3 : any;
    if(window.ethereum) {
      web3 = new Web3(window.ethereum);
      window.ethereum.on("accountsChanged", async () => {
      const accounts = await web3.eth.getAccounts();
      setEthWalletAddress(accounts[0]);
    });} else {alert("You do not have metaMask installed yet. Please install MetaMask at https://metamask.io/download/")}
  }, [
    setEthWalletAddress,
    ethWalletAddress,
    setMetaData,
    setNftUrl,
    setNftImageUrl,
  ]);

  useEffect(() => {
    if (nftToBeBridgedAddress) {
      // checkEthNftBalance(
      //   nftToBeBridgedAddress,
      //   ethWalletAddress,
      //   setNftBalance
      // );
      if (selectedNftId) {
        getEthNftUri({
          selectedNftId,
          nftToBeBridgedAddress,
          ethWalletAddress,
          setNftImageUrl,
          setNftUrl,
          setMetaData,
        });
      }
    }
  }, [nftToBeBridgedAddress, selectedNftId]);

  return (
    <FormSection>
      <div className="flex items-center mb-5 ">
        <span className="flex items-center  text-xl font-semibold text-slate-600 dark:text-slate-400">
          {isFrom ? "From:" : "To:"}
        </span>
        <button
          className={cn(
            [
              !ethWalletAddress
                ? " text-white bg-emerald-700 dark:bg-opacity-10 dark:border-2 dark:border-slate-200 "
                : "text-emerald-700  dark:bg-opacity-10 border-2 border-emerald-700 dark:border-slate-200 ",
            ],

            "flex pl-2  ml-3 font-medium text-sm items-center  p-1 rounded-full"
          )}
          onClick={(e) => {
            e.preventDefault();
            connectEthWallet(ethWalletAddress, setEthWalletAddress);
          }}
        >
          {!ethWalletAddress ? (
            "Connect Ethereum Wallet"
          ) : (
            <div>{shortenAddress(ethWalletAddress)}</div>
          )}
          <div className="flex justify-center bg-white rounded-full p-1 h-6 w-6 ml-2">
            <img src="chain-icons/ethereum-eth-logo.svg" className="h-4" />
          </div>
        </button>
      </div>
      {!!ethWalletAddress && isFrom && (
        <div className="flex items-center ">
          <Input
            className={defaultFieldDiv}
            fieldClass={inputFieldClass}
            required
            name="nftToBeBridgedAddress"
            placeholder={`Your NFT's Ethereum address`}
            onBlur={(e: any) => {
              e.target.value = e.target.value.replaceAll(" ", "");
            }}
          />
        </div>
      )}
      {!!ethWalletAddress && nftToBeBridgedAddress && isFrom && (
        <div className="flex items-center ">
          <Input
            className={defaultFieldDiv}
            fieldClass={inputFieldClass}
            required
            name="selectedNftId"
            placeholder={`Your NFT's Id`}
            onBlur={(e: any) => {
              e.target.value = e.target.value.replaceAll(" ", "");
            }}
          />
        </div>
      )}
    </FormSection>
  );
};

export default EthSwapForm;
