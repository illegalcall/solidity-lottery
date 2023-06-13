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
