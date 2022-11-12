import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Chatting room',
		description: 'aree bahoot accha hai bahoot hi accha hai ab kya hi batauu i am in love with codelar',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Project collaboration',
		description: 'aree bahoot accha hai bahoot hi accha hai ab kya hi batauu i am in love with codelar',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Learn in public',
		description: 'aree bahoot accha hai bahoot hi accha hai ab kya hi batauu i am in love with codelar',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Mentor support',
		description: 'aree bahoot accha hai bahoot hi accha hai ab kya hi batauu i am in love with codelar',
		icon: iconStyle(BiSupport),
		imgClass: 'four',
	},
	{
		name: 'Coming soon',
		description: 'aree bahoot accha hai bahoot hi accha hai ab kya hi batauu i am in love with codelar',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},
	{
		name: 'Coming soon',
		description:
			'aree bahoot accha hai bahoot hi accha hai ab kya hi batauu i am in love with codelar',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'six',
	},
];
