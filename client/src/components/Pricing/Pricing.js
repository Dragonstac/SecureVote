import React from 'react';
import { Button, Heading, TextWrapper } from '../../globalStyles';
import { IconContext } from 'react-icons/lib';
import abi from "../../utilits/secure.json"
import { useEffect,useState } from "react";
import { ethers } from "ethers";
import { useAddress, useMetamask, useEditionDrop } from '@thirdweb-dev/react';




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

function sayHello() {
    alert('Vote successful!');
  }

function Pricing() {

	const address = useAddress();
	console.log(address);




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
