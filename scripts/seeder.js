// import { ethers } from 'hardhat';
const { ethers } = require('hardhat');
// import { faker } from '@faker-js/faker';
const faker = require('@faker-js/faker');
// import fs from 'fs';
const fs = require('fs');

const toWei = (num) =>
	ethers.utils.parseEther(num.toString());

const shuffleArray = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};

const addMinutes = (minutes) => {
	const currentDate = new Date();
	const millisecondsPerMinute = 60 * 1000;
	const newTimestamp =
		currentDate.getTime() + minutes * millisecondsPerMinute;
	return newTimestamp;
};

const getParams = (iteration) => {
	const imagesUrls = [
		'https://img.icons8.com/external-microdots-premium-microdot-graphic/512/external-lottery-lifestyle-entertainment-vol3-microdots-premium-microdot-graphic.png',
		'https://img.icons8.com/external-flaticons-lineal-color-flat-icons/512/external-lottery-casino-flaticons-lineal-color-flat-icons-2.png',
		'https://img.icons8.com/emoji/512/crossed-fingers-medium-dark-skin-tone.png',
		'https://img.icons8.com/ios-filled/512/atlantic-lottery-corp.png',
		'https://img.icons8.com/officel/512/win.png',
		'https://img.icons8.com/color/512/lotto.png',
	];

	// make an array of random meaningful titles, and pick one
	const titles = [
		'housing lottery',
		'car lottery',
		'travel lottery',
		'money lottery',
		'food lottery',
		'clothing lottery',
	];
	const title = titles[Math.floor(Math.random() * 6)];

	// make an array of random meaningful descriptions, and pick one
	const descriptions = [
		'Win a house in the center of the city',
		'Win a car of your choice',
		'Win a trip to the country of your choice',
		'Win a million dollars',
		'Win a year of free food',
		'Win a year of free clothing',
	];
	const description =
		descriptions[Math.floor(Math.random() * 6)];

	const prize = toWei(Math.floor(Math.random() * 8) + 8);
	const ticketPrice = toWei(
		// Generate a random number between 0.01, 0.05
		Math.floor((Math.random() * 5) / 100) + 0.01
	);
	const expiresAt = addMinutes(5 * iteration);
	const image = shuffleArray(imagesUrls)[0];

	return {
		title,
		description,
		prize,
		ticketPrice,
		expiresAt,
		image,
	};
};

async function main() {
	const servicePercent = 7;
	const Contract = await ethers.getContractFactory(
		'Lottery'
	);
	const contract = await Contract.deploy(servicePercent);
	await contract.deployed();

	const iteration = 6;
	let tx, result;

	const createLottery = async ({
		title,
		description,
		image,
		prize,
		ticketPrice,
		expiresAt,
	}) => {
		tx = await contract.functions.createLottery(
			title,
			description,
			image,
			prize,
			ticketPrice,
			expiresAt
		);
		await tx.wait();
	};

	for (let i = 1; i <= iteration; i++) {
		await createLottery(getParams(i));
	}

	result = await contract.getLotteries();
	console.log(result);

	const address = JSON.stringify(
		{ address: contract.address },
		null,
		4
	);

	fs.writeFile(
		'./artifacts/contractAddress.json',
		address,
		'utf8',
		(error) => {
			if (error) {
				console.log(error);
				return;
			}
			console.log(
				'Deployed contract address: ',
				contract.address
			);
		}
	);
}

main().catch((error) => {
	console.log(error);
	process.exitCode = 1;
});
