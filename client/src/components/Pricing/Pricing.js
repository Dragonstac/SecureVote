import React from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
<<<<<<< Updated upstream

import { useAddress, useMetamask, useEditionDrop } from '@thirdweb-dev/react';
=======
import abi from "../../utilits/secure.json"
import { useEffect,useState } from "react";
import { ethers } from "ethers";
import { useAddress, useMetamask, useContract } from '@thirdweb-dev/react';
>>>>>>> Stashed changes




import {
	PricingSection,
	PricingWrapper,
	PricingContainer,
	PricingCardInfo,
	PricingCardPlan,
	PricingCardCost,
	PricingCardFeatures,
	PricingCardText,
	PricingCardFeature,
	PricingCard,
} from './PricingStyles';
import { pricingData } from '../../data/PricingData';
import Particle2 from '../Particle2';
import Timmer from './timmer';
const getEthereumObject = () => window.ethereum;
function sayHello() {
    alert('Vote successful!');
  }

function Pricing() {

	const address = useAddress();
	console.log(address);
	const { ethereum } = window;
	const contractAddress = "0x9E3F72e647302fe1B95A5021Bf825c1A43516034";
	const contractABI = abi.abi;
	//const editionDrop = useEditionDrop("0x846EE7F5C27345340505b53fCaF931b2A075A10a");
	const editionDrop = useContract("0x846EE7F5C27345340505b53fCaF931b2A075A10a", "edition-drop").contract;
	  // State variable for us to know if user has our NFT.
	  const [hasClaimedNFT, setHasClaimedNFT] = useState(false);
	  // isClaiming lets us easily keep a loading state while the NFT is minting.
	  const [isClaiming, setIsClaiming] = useState(false);
	//   const [isName, setIsName] = useState("");
	//   const [isAbout, setIsAbout] = useState("");
	//   const [isDescription, setIsDescription] = useState("");

	  const provider = new ethers.providers.Web3Provider(ethereum);
	  const signer = provider.getSigner();
	  const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
	  useEffect(() => {
		// If they don't have an connected wallet, exit!

		if (!address) {
		  return;
		}
	
		const checkBalance = async () => {
		  try {
			const balance = await editionDrop.balanceOf(address, 0);
			if (balance.gt(0)) {
			  setHasClaimedNFT(true);
			  console.log("🌟 this user has a membership NFT!");
			} else {
			  setHasClaimedNFT(false);
			  console.log("😭 this user doesn't have a membership NFT.");
			}
		  } catch (error) {
			setHasClaimedNFT(false);
			console.error("Failed to get balance", error);
		  }
		};
		checkBalance();
	  }, [address, editionDrop]);


	  const mintNft = async () => {
		try {
		  setIsClaiming(true);
		  await editionDrop.claim("0", 1);
		  console.log(`🌊 Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/${editionDrop.getAddress()}/0`);
		  setHasClaimedNFT(true);
		} catch (error) {
		  setHasClaimedNFT(false);
		  console.error("Failed to mint NFT", error);
		} finally {
		  setIsClaiming(false);
		}
	  };


	const vote = async ()=>{



	}
	
	
		const etf=async ()=>{
			let count = await wavePortalContract.getvotes(0);
			console.log("Retrieved total wave count...", count.toNumber());
			let name = await wavePortalContract.getdataname(0);
            console.log( name.toString());
			let about = await wavePortalContract.getdataabout(0);
        console.log(about.toString());
        let description = await wavePortalContract.getdatadescribe(0);
        console.log(description.toString());
		}
		
		
	return (
		
		<IconContext.Provider value={{ color: '#a9b3c1', size: '1rem' }}>
			<Particle2/>
			<PricingSection id="pricing">
			
				<PricingWrapper>
					<Heading >Make a choice!</Heading>
					<br/>
					
					<Timmer/>
					<br/>
					<PricingContainer>
						{pricingData.map((card, index) => (
							<PricingCard key={index}>
								<PricingCardInfo>
									<PricingCardPlan>{card.title}</PricingCardPlan>
									<PricingCardCost>{card.price}</PricingCardCost>
									<PricingCardText>{card.description}</PricingCardText>
									<PricingCardFeatures>
										{card.features}
									</PricingCardFeatures>
									
     
									<Button onClick={sayHello}>
									
										Vote Here
										
										</Button>
	
    								
								</PricingCardInfo>
							</PricingCard>
						))}
					</PricingContainer>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
	);
}
export default Pricing;
