import React from 'react';
import { Button, Container, Section } from '../../globalStyles';
import {
	FeatureText,
	FeatureTitle,
	FeatureWrapper,
	FeatureColumn,
	FeatureImageWrapper,
	FeatureName,
	FeatureTextWrapper,
	FeatureButton,
} from './FeaturesStyles';
import { featuresData } from '../../data/FeaturesData';
import { ButtonWrapper, HeroButton } from '../Hero/HeroStyles';
import { Link } from 'react-router-dom';
import './ButtonVote.css';

const Features = () => {
	const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

	return (
		<Section smPadding="50px 10px" position="relative" inverse id="about">
			<Container>
				<FeatureTextWrapper>
					<FeatureTitle>What We Offer</FeatureTitle>
				</FeatureTextWrapper>
				<FeatureWrapper>
					{featuresData.map((el, index) => (
						<FeatureColumn
							initial={initial}
							animate={animate}
							transition={{ duration: 0.5 + index * 0.1 }}
							key={index}
						>
							<FeatureImageWrapper className={el.imgClass} >
								{el.icon}
							</FeatureImageWrapper>
							<FeatureName id="voteButton">{el.name}</FeatureName>
							<FeatureText>{el.description}</FeatureText>
						</FeatureColumn>
					))}
					
				</FeatureWrapper>
				<br/>
				<br/>
				<br/>
				<center>
				<button class="btn-29" >
					
					<span class="text-container">
					<span class="text">Hey! Voting is Live, Click Here to Vote</span>
					</span>
					
				</button>
				</center>

			</Container>
		</Section>
	);
};

export default Features;
