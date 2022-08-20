import AlgoSwapForm from "./AlgoSwapForm";
import cn from "classnames";
import EthSwapForm from "./EthSwapForm";
import FormButton from "./buttons/FormButton";
import ImageSection from "../containers/ImageSection";
import LoadingButtonText, {
  LoadingButtonStateType,
} from "./buttons/LoadingButtonText";
import React, { FC, useRef, useState } from "react";
import { bridgeAlgoToEth, bridgeEthToAlgo } from "../utils/helpersChain";
import { Form, Formik } from "formik";

const SwapForm: FC = () => {
  const [buttonStep, setButtonStep] = useState<LoadingButtonStateType>("idle");
  const [ethToAlgo, setBridgeDirection] = useState<boolean>(true);
  const [ethWalletAddress, setEthWalletAddress] = useState<string>("");
  const [algoWalletAddress, setAlgoWalletAddress] = useState<string>("");
  const [nftUrl, setNftUrl] = useState<string>("");
  const [nftImageUri, setNftImageUrl] = useState<string>("");
  const [metaData, setMetaData] = useState<any>("");
  const [nftClaimId, setNftClaimId] = useState<string>("");
  const [pubKey, setPubKey] = useState<string>("");
  const algorandBridgeId = useRef<string>("");
  const count = useRef<number>(0);
  const ethNftId = useRef<string>("");
  const status = useRef<string>("init");
  const lockingNFT = useRef<boolean>(false);
  const formikRef = useRef<any>();

  const handleBridgeDirectionChange = () => {
    setBridgeDirection(!ethToAlgo);
    setNftUrl("");
    setNftImageUrl("");
    setMetaData("");
    setNftClaimId("");
    count.current = 0;
    ethNftId.current = "";
    status.current = "init";
    formikRef.current.resetForm();
  };

  //triggered by submit of form
  const bridgeDirectionButton = (
    <button
      className="p-5 flex w-36 justify-between items-center rounded-full shadow-2xl"
      onClick={(e) => {
        e.preventDefault();
        handleBridgeDirectionChange();
      }}
    >
      {ethToAlgo ? (
        <>
          <img src="chain-icons/ethereum-eth-logo.svg" className="h-8" /> to
          <img src="chain-icons/algorand-algo.svg" className="h-8" />
        </>
      ) : (
        <>
          <img src="chain-icons/algorand-algo.svg" className="h-8" />
          to <img src="chain-icons/ethereum-eth-logo.svg" className="h-8" />
        </>
      )}
    </button>
  );

  const shortenAddress = (address: string) => {
    return address.slice(0, 6) + "..." + address.slice(-4);
  };
  //
  return (
    <>
      <div className="flex justify-center mb-6">{bridgeDirectionButton}</div>
      {nftImageUri && (
        <ImageSection>
          <div className="flex justify-center">
            <img src={nftImageUri} alt="NFT-image" />
          </div>
        </ImageSection>
      )}
      <Formik
        innerRef={formikRef}
        initialValues={{
          fromChain: "",
          nftToBeBridgedAddress: "",
          toChain: "",
          toWalletAddress: "",
          selectedNftId: "",
        }}
        validate={(values) => {
          const errors: any = {}; /** @TODO : Shape */
          // if (!values.fromChain) {
          //   errors.fromChain = "Required";
          // }
          // if (!values.nftToBeBridgedAddress) {
          //   errors.nftToBeBridgedAddress = "Required";
          // }
          // if (!values.toChain) {
          //   errors.toChain = "Required";
          // }
          // if (!values.toWalletAddress) {
          //   errors.toWalletAddress = "Required";
          // }
          // if (!values.selectedNftId) {
          //   errors.selectedNftId = "Required";
          // }
          return errors;
        }}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const { selectedNftId, nftToBeBridgedAddress } = values;

          ethToAlgo
            ? bridgeEthToAlgo({
                algoWalletAddress,
                ethWalletAddress,
                nftUrl,
                selectedNftId,
                algorandBridgeId,
                count,
                nftToBeBridgedAddress,
                setButtonStep,
                setNftImageUrl,
                setNftUrl,
                setMetaData,
                setNftClaimId,
              })
            : bridgeAlgoToEth({
                algorandBridgeId,
                ethNftId,
                ethWalletAddress,
                algoWalletAddress,
                nftToBeBridgedAddress,
                status,
                setButtonStep,
                lockingNFT,
                pubKey,
                nftUrl,
              });
          setSubmitting(false);
        }}
      >
        {({ isSubmitting, values }) => (
          <Form className="">
            <div
              className={cn(
                [ethToAlgo ? "flex-col" : "flex-col-reverse"],
                "flex "
              )}
            >
              <EthSwapForm
                isFrom={ethToAlgo}
                nftToBeBridgedAddress={values.nftToBeBridgedAddress}
                selectedNftId={values.selectedNftId}
                setNftImageUrl={setNftImageUrl}
                ethWalletAddress={ethWalletAddress}
                setEthWalletAddress={setEthWalletAddress}
                setNftUrl={setNftUrl}
                setMetaData={setMetaData}
              />

              <AlgoSwapForm
                isFrom={!ethToAlgo}
                algoWalletAddress={algoWalletAddress}
                setAlgoWalletAddress={setAlgoWalletAddress}
                nftToBeBridgedAddress={values.nftToBeBridgedAddress}
                setNftUrl={setNftUrl}
                setNftImageUrl={setNftImageUrl}
                setPubKey={setPubKey}
              />
            </div>
            <FormButton
              type="submit"
              disabled={isSubmitting}
              className="bg-cDarkBlue hover:bg-cYellow text-white hover:text-cDarkBlue font-bold uppercase mt-8 rounded-full p-4 w-full"
            >
              <LoadingButtonText
                state={buttonStep}
                idleText={`Bridge ${
                  values.nftToBeBridgedAddress
                    ? shortenAddress(values.nftToBeBridgedAddress)
                    : ""
                } ${
                  values.toWalletAddress
                    ? `to ${shortenAddress(values.toWalletAddress)}`
                    : ""
                }`}
                submittingText={`Bridging ${
                  values.nftToBeBridgedAddress
                    ? shortenAddress(values.nftToBeBridgedAddress)
                    : ""
                } ${
                  values.toWalletAddress
                    ? `to ${shortenAddress(values.toWalletAddress)}`
                    : ""
                }`}
                confirmedText="Bridged!"
                failedText="Oops. Something went wrong"
              />
            </FormButton>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default SwapForm;
