export interface ILottery {
	id: number;
	name: string;
	description: string;
	image: string;
	price: number;
	date: Date;
	isPublished: boolean;
	owner: string;
	prize: string;
	ticketPrice: string;
	createdAt: Date;
	expiresIn: number;
	expiresAt: Date;
	participants: number;
	drawn: boolean;
	drawsAt: Date;
}

export const generateLotteries = (count: number) => {
	const lotteries = [];
	for (let i = 0; i < count; i++) {
		lotteries.push({
			id: i,
			name: `Lottery ${i + 1}`,
			description: `Description ${i + 1}`,
			image: `https://picsum.photos/200/300?random=${
				i + 1
			}`,
			price: 1000 + i,
			date: new Date(),
			isPublished: true,
			owner: generateRandomEthereumAddress(),
			prize: generateRandomFloat(1000, 10000).toFixed(2),
			ticketPrice: generateRandomFloat(0.01, 0.1).toFixed(
				2
			),
			createdAt: generateRandomTimestamp(
				new Date(Date.now() - 24 * 60 * 60 * 1000),
				new Date()
			),
			expiresIn: generateRandomInt(7, 100),
			expiresAt: new Date(),
			participants: generateRandomInt(0, 100),
			drawn: false,
			drawsAt: generateRandomTimestamp(
				new Date(Date.now() - 24 * 60 * 60 * 1000),
				new Date()
			),
		});
	}
	return lotteries;
};

const generateRandomEthereumAddress = () => {
	const hexChars = '0123456789abcdef';
	let address = '0x';
	for (let i = 0; i < 40; i++) {
		address += hexChars[Math.floor(Math.random() * 16)];
	}
	return address;
};

const generateRandomFloat = (min: number, max: number) => {
	return Math.random() * (max - min) + min;
};

const generateRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateRandomTimestamp = (
	start: Date,
	end: Date
) => {
	return new Date(
		start.getTime() +
			Math.random() * (end.getTime() - start.getTime())
	);
};

const generateLottery = (id: number): Lottery => {};
