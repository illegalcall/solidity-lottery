export interface ILottery {
	id: number;
	title: string;
	description: string;
	image: string;
	prize: number;
	ticketPrice: number;
	participants: number;
	winners: number;
	drawn: boolean;
	owner: string;
	createdAt: Date;
	expiresAt: Date;
}

export interface IParticipant {
	account: string;
	lotteryNumber: string;
	paid: boolean;
}

// convert LotteryResult to typescript
export interface IResult {
	id: number;
	completed: boolean;
	paidout: boolean;
	timestamp: Date;
	sharePerWinner: number;
	winners: IParticipant[];
}

export interface IStructuredLottery {
	id: number;
	title: string;
	description: string;
	owner: string;
	prize: string;
	ticketPrice: string;
	image: string;
	createdAt: string;
	drawsAt: string;
	expiresAt: number;
	winners: number;
	participants: number;
	drawn: boolean;
}

export interface IStructuredParticipant {
	account: string;
	lotteryNumber: string;
	paid: boolean;
}

export interface IStructuredResult {
	id: number;
	completed: boolean;
	paidout: boolean;
	timestamp: number;
	sharePerWinner: string;
	winners: IStructuredParticipant[];
}
