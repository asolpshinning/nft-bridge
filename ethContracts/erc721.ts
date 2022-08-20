const bridgeAbi = require("./erc721abi.json");
const nftAbi = require("./nftAbi.json");

export const nftContract = (web3: any, nftCtcId: string) => {
  try {
    const nftContract = new web3.eth.Contract(
      nftAbi,
      nftCtcId
      //"0x8d43F477F386228AC23CEcFC53B9CC9883c19BF4"
    );
    return nftContract;
  } catch (err: any) {
    alert(err.message);
  }
};

export const bridgeContract = (web3: any) => {
  return new web3.eth.Contract(
    bridgeAbi["abi"],
    "0x7a403d1f0CF58EDa5D3047d856D2525cbbc993f2"
  );
};
