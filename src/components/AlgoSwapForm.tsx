import cn from "classnames";
import FormSection from "../containers/FormSection";
import Input, { inputFieldClass } from "./form-components/Inputs";
import React, { Dispatch, SetStateAction } from "react";
import {
  connectAlgoWallet,
  getAlgoNftUri,
  getAlgoNftUriProps,
  shortenAddress,
} from "../utils/helpersChain";

type AlgoSwapFormProps = getAlgoNftUriProps & {
  isFrom: boolean;
  algoWalletAddress: string;
  setAlgoWalletAddress: Dispatch<SetStateAction<string>>;
  setPubKey: Dispatch<SetStateAction<string>>;
};

const AlgoSwapForm: React.FC<AlgoSwapFormProps> = ({
  isFrom,
  algoWalletAddress,
  nftToBeBridgedAddress,
  setAlgoWalletAddress,
  setNftUrl,
  setNftImageUrl,
  setPubKey,
}) => {
  const displayAlgoNft = () => {
    if (!!nftToBeBridgedAddress && isFrom) {
      getAlgoNftUri({ nftToBeBridgedAddress, setNftUrl, setNftImageUrl });
    }
  };

  return (
    <FormSection>
      <div className="flex items-center mb-5 ">
        <span className="flex items-center  text-xl font-semibold text-slate-600 dark:text-slate-400">
          {isFrom ? "From:" : "To:"}
        </span>
        <button
          className={cn(
            [
              !algoWalletAddress
                ? " text-white bg-blue-700 dark:bg-opacity-10 dark:border-2 dark:border-slate-200 "
                : "text-blue-700  dark:bg-opacity-10 border-2 border-blue-700 dark:border-slate-200 ",
            ],

            "flex pl-2  ml-3 font-medium text-sm items-center  p-1 rounded-full"
          )}
          onClick={(e) => {
            e.preventDefault();
            connectAlgoWallet(setAlgoWalletAddress, setPubKey);
          }}
        >
          {!algoWalletAddress ? (
            "Connect Algorand Wallet"
          ) : (
            <div>{shortenAddress(algoWalletAddress)}</div>
          )}
          <div className="flex justify-center bg-white rounded-full p-1 h-6 w-6 ml-2">
            <img src="chain-icons/algorand-algo.svg" className="h-4" />
          </div>
        </button>
      </div>
      {isFrom && !!algoWalletAddress && (
        <div className="flex items-center ">
          <Input
            className="bg-opacity-0 mr-4"
            fieldClass={inputFieldClass}
            required
            name="nftToBeBridgedAddress"
            placeholder={`Your Algorand NFT's ID`}
            onBlur={(e: any) => {
              e.target.value = e.target.value.replaceAll(" ", "");
            }}
          />
          {nftToBeBridgedAddress && (
            <button
              className="text-lg font-semibold text-white dark:text-slate-300 border-2 bg-slate-800 dark:bg-white dark:bg-opacity-10 my-1 p-3  rounded-full shadow-lg w-48 focus:border-blue-900 focus:outline-none"
              onClick={(e) => {
                e.preventDefault();
                displayAlgoNft();
              }}
            >
              Connect NFT
            </button>
          )}
        </div>
      )}
    </FormSection>
  );
};

export default AlgoSwapForm;
