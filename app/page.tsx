import Image from 'next/image';
import Jackpots from './components/Jackpots';
import { generateLotteries } from './services/fakeData';
import Header from './components/Header';

export default function Home() {
	const data = generateLotteries(10);
	return (
		<div className=''>
			<Header />
			<Jackpots jackpots={data} />
		</div>
	);
}
