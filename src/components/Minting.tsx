// Minting.tsx
import {
    WalletModalProvider,
  } from "@solana/wallet-adapter-react-ui";
import React, { FC, useMemo, useState } from "react";
import Image from "next/image";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  GlowWalletAdapter,
  SlopeWalletAdapter,
  SolflareWalletAdapter,
  TorusWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { clusterApiUrl } from "@solana/web3.js";
import dynamic from "next/dynamic";

// Define your MintingNFTs component here if it's not already defined
// import { MintingNFTs } from "./MintingNFTs";

interface MintingProps {
  // Define any props if needed
}

const ButtonWrapper = dynamic(() =>
  import("@solana/wallet-adapter-react-ui",).then(
    (mod) => mod.WalletMultiButton
  )
);

const Minting: FC<MintingProps> = () => {
  const [network, setNetwork] = useState(WalletAdapterNetwork.Devnet);

  const endpoint = useMemo(() => clusterApiUrl(network), [network]);

  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new GlowWalletAdapter(),
      new SlopeWalletAdapter(),
      new SolflareWalletAdapter({ network }),
      new TorusWalletAdapter(),
    ],
    [network]
  );

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    switch (event.target.value) {
      case "devnet":
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
      case "mainnet":
        setNetwork(WalletAdapterNetwork.Mainnet);
        break;
      case "testnet":
        setNetwork(WalletAdapterNetwork.Testnet);
        break;
      default:
        setNetwork(WalletAdapterNetwork.Devnet);
        break;
    }
  };

  return (
    <div>
      <div className="md:hero mx-auto p-4">
        <div className="md:hero-content flex flex-col">
          <h1 className="text-center text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-fuchsia-500 mt-10 mb-8">
            Basics
          </h1>
          <div className="text-center">
            <div className="keystrokesContainer">
              <div className="inlineContainer">
                
                <div className="simpleContainer">
                  <div className="inlineContainer">
                    <div className="largerTitle">
                      Metaplex CandyMachine V3 UI
                    </div>
                  </div>
                  <div className="inlineContainer">
                    <div className="largerTitle">
                      Modified by <b><i>KeyStrokes</i></b>
                    </div>
                  </div>
                  <div
                  

                    className="inlineContainer divAsLink"
                    onClick={() =>
                      window.open(
                        "https://www.youtube.com/@Key_Strokes?sub_confirmation=1",
                        "_blank"
                      )
                    }
                  >
                    
                  </div>
                </div>
              </div>
            </div>
            <ConnectionProvider endpoint={endpoint}>
              <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                  <div className="App">
                    <ButtonWrapper />
                    {/* Render your MintingNFTs component here */}
                    {/* <MintingNFTs onClusterChange={handleChange} /> */}
                  </div>
                </WalletModalProvider>
              </WalletProvider>
            </ConnectionProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Minting;
