import React from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import abi from "../../utilits/secure.json"
import { useEffect,useState } from "react";
import { ethers } from "ethers";
import { useAddress, useMetamask, useContract } from '@thirdweb-dev/react';

import './nft.css'



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
	  const [isName, setIsName] = useState("");
	   const [isAbout, setIsAbout] = useState("");
	   const [isDescription, setIsDescription] = useState("");
	   const [isName1, setIsName1] = useState("");
	   const [isAbout1, setIsAbout1] = useState("");
	   const [isDescription1, setIsDescription1] = useState("");
	   const [hasVoted, sethasVoted] = useState(true);
	

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


	const vote = async (index)=>{
		let count = await wavePortalContract.addvote(index);
		console.log("Minning",count.hash);
		
		count.wait();
		console.log("minted",count.hash);
		window.alert("vote sucessful");
		sethasVoted(false);
		console.log(hasVoted);

	}
	
		// If they don't have an connected wallet, exit!
		const calldata =async()=>{
		
			let count = await wavePortalContract.getvotes(0);
			console.log("Retrieved total wave count...", count.toNumber());
			let name = await wavePortalContract.getdataname(0);
            console.log( name.toString());
			let about = await wavePortalContract.getdataabout(0);
        console.log(about.toString());
        let description = await wavePortalContract.getdatadescribe(0);
        console.log(description.toString());


		let name1 = await wavePortalContract.getdataname(1);
             console.log( name1.toString());
	 	let about1 = await wavePortalContract.getdataabout(1);
         console.log(about1.toString());
         let description1 = await wavePortalContract.getdatadescribe(1);
         console.log(description1.toString());
		setIsName(name);
			setIsAbout(about);
			setIsDescription(description);
			setIsName1(name1);
			setIsAbout1(about1);
			setIsDescription1(description1);
			console.log(isName);
		
	}
	
		
	useEffect(() => {
		calldata();
	  },[])
	
	
		
		
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
						
							<PricingCard >
								<PricingCardInfo>
									<PricingCardPlan>{isName}</PricingCardPlan>
									<PricingCardCost>{isAbout}</PricingCardCost>
									<PricingCardText>{isDescription}</PricingCardText>
									
									
     
									<Button onClick={()=>vote(0)}>
									
										Vote Here
										
										</Button>
	
    								
								</PricingCardInfo>
							</PricingCard>
							<PricingCard >
								<PricingCardInfo>
									<PricingCardPlan>{isName1}</PricingCardPlan>
									<PricingCardCost>{isAbout1}</PricingCardCost>
									<PricingCardText>{isDescription1}</PricingCardText>
									
									
     
									<Button onClick={()=>vote(1)}>
									
										Vote Here
										
										</Button>
	
    								
								</PricingCardInfo>
							</PricingCard>
							
					</PricingContainer>
					<button class="btn-17" disabled={hasVoted}
        onClick={mintNft}>
            
            <span class="text-container">
                <span class="text">{isClaiming? "minting...": "mint your NFT"}</span>
            </span>
        </button>
				</PricingWrapper>
			</PricingSection>
		</IconContext.Provider>
		
	);
}
export default Pricing;
