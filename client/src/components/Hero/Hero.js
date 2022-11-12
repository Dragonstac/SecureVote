import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton } from './HeroStyles';
// import Popup2 from '../popup/popup2';
import { useAddress, useMetamask, useEditionDrop } from '@thirdweb-dev/react';
import { useState, useEffect } from 'react';

const Hero = () => {
	const [hasConnected, setHasConnected] = useState(false);
	const address = useAddress();
	const connectWithMetamask = useMetamask();
	console.log("👋 Address:", address);
	useEffect(()=>{
		if(address){
			setHasConnected(true);
		}

	},[address]);
	
	return (
		<HeroSection>
			<HeroVideo src="./assets/hero_bg.mov" autoPlay loop muted />
			<Container>
				<MainHeading><h3 class="cursive" > <em id="font1" style={{color: '#3784f8'}}>S</em>ecure<em style={{color: '#3784f8'}} id="font2">V</em>ote</h3></MainHeading>
				
				<HeroText>
				<h5>Secure &#9679; Simplified &#9679; sex</h5>
				<br />
				 A platform where you can vote without any discrepancy and corruption.
				 <br />
				<br/>
				
				 
				</HeroText>
				<ButtonWrapper>
					<Link to="signup">
						<Button>Sign Up</Button>
					</Link>
					<HeroButton onClick={connectWithMetamask}> {hasConnected ? "Connected" : "Connect your wallet"}</HeroButton>
				</ButtonWrapper>
				{/* <Popup2/> */}
			</Container>
		</HeroSection>
	);
};

export default Hero;
