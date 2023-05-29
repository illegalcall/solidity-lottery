import Image from 'next/image';
import Jackpots from './components/Jackpots';
import { generateLotteries } from './services/fakeData';

export default function Home() {
	const data = generateLotteries(10);
	return (
		<div className=''>
			<Jackpots jackpots={data} />
		</div>
	);
}
