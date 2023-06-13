import Link from 'next/link';
import background from '../../public/images/background.png';
import { useSelector } from 'react-redux';

const SubHeader = () => {
	return (
		<div
			style={{
				background: `url('${background.src}') fixed no-repeat top/cover`,
			}}
			className='flex items-center justify-between text-white px-10 py-5'
		>
			<div>
				<Link href='/' className='text-xl font-bold'>
					DappLottery
				</Link>
			</div>

			<div className='hidden lg:flex items-center space-x-6 font-semibold'>
				<p>Home</p>
				<p>How To Play</p>
				<p>All Lottery</p>
				<p>Contact</p>
			</div>
		</div>
	);
};

export default SubHeader;
