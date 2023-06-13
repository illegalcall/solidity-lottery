import Image from 'next/image';
import Jackpots from './components/Jackpots';
import { generateLotteries } from '../services/fakeData';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store';
import { getLotteries } from '@/services/blockchain';

export default async function Home() {
	const jackpots = generateLotteries(7);
	const lotteries = await getLotteries();
	console.log(
		'🚀 ~ file: page.tsx:12 ~ Home ~ lotteries:',
		lotteries
	);
	return (
		<Provider store={store}>
			<Header />
			<Jackpots jackpots={jackpots} />
		</Provider>
	);
}
