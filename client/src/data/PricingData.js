import { ethers } from "ethers";
import abi from "../utilits/secure.json"
import React from 'react';
import { useAddress, useMetamask, useContract } from '@thirdweb-dev/react';
async function carddata(){
	
	const { ethereum } = window;
	const contractAddress = "0x9E3F72e647302fe1B95A5021Bf825c1A43516034";
	const contractABI = abi.abi;
	const provider = new ethers.providers.Web3Provider(ethereum);
	const signer = provider.getSigner();
	const wavePortalContract = new ethers.Contract(contractAddress, contractABI, signer);
	
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

}


carddata()


export const pricingData = [

	{
		title: 'Bubbe ke bubbe',
		price: '$18.99 user/month after offer period',
		numAcc: '50-500 accounts',
		features:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
	},
	{
		title: 'sion ki chut',
		price: '$32.50 user/month after offer period',
		numAcc: '50-1000 accounts',
		features:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.'
		
	},


];
