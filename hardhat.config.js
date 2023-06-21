require('@nomiclabs/hardhat-waffle');
require('@nomiclabs/hardhat-ethers');
require('dotenv').config();

module.exports = {
	defaultNetwork: 'localhost',
	networks: {
		hardhat: {},
		// localhost: {
		// 	url: process.env.SMART_CONTRACT_URL,
		// },
		mumbai: {
			url: process.env.NEXT_APP_RPC_URL,
			accounts: [`0x${process.env.PRIVATE_KEY}`],
		},
	},
	solidity: {
		version: '0.8.17',
		settings: {
			optimizer: {
				enabled: true,
				runs: 200,
			},
		},
	},
	mocha: {
		timeout: 40000,
	},
};
