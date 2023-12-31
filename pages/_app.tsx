import type { AppProps } from "next/app";
import { ThirdwebProvider, paperWallet, smartWallet } from "@thirdweb-dev/react";
import "../styles/globals.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
const activeChain = "mumbai";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThirdwebProvider
      clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets = {[
        smartWallet({
          factoryAddress:"0x7b15Ee4f3156c7d68Bc6F941eB0745465A3A599C", //Account factory address
          gasless:true,
          personalWallets:[
            paperWallet({
              paperClientId:"2f4b9934-aaa3-436c-ab02-d1eaa6f1c238" //paper wallet id
            })
          ]
        })
      ]}
    >
      <Component {...pageProps} />
    </ThirdwebProvider>
  );
}

export default MyApp;
