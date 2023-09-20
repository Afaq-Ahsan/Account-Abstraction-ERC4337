import { ConnectWallet, Web3Button } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import Image from "next/image";
import { NextPage } from "next";


const Home: NextPage = () => {
  return (
    <main className={styles.main}>

<h1>Claim NFT Without Gas Fee</h1>
      <div className={styles.container} style={{display:"flex", marginLeft:"550px", marginTop:"250px" , }}>
        
       

       <ConnectWallet style={{marginRight:"20px"}} />
       
       <Web3Button 
       contractAddress="0xbb120c1468a31130a82E5D8dB1c45775eB3cca8F" //ERC115 Drop Contract address
       action={(contract)=> contract.erc1155.claim(0, 1)} //id = 0 amount 1
       >Claim NFT 🔥</Web3Button>
       
      </div>
    </main>
  );
};

export default Home;
