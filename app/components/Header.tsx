import background from '../../public/images/background.png';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
	return (
		<div
			className='px-5 md:px-40'
			style={{
				background: `linear-gradient(rgba(0, 0, 0, 0.65), rgba(0, 0, 0, 0.65)), url('${background.src}') fixed no-repeat top/cover`,
			}}
		>
			<div className='flex items-center justify-between text-white py-5'>
				<div>
					<h1 className='text-xl font-bold'>DappLottery</h1>
				</div>

				<div className='hidden lg:flex items-center space-x-3 font-semibold'>
					<p>Home</p>
					<p>How To Play</p>
					<p>All Lottery</p>
					<p>Contact</p>
				</div>
			</div>

			<div className='flex items-center justify-between pb-5'>
				<div>
					<div className='text-white py-5'>
						<h2 className='text-4xl font-bold py-4 '>
							Take the chance to <br /> change your life
						</h2>

						<p className='text-xl'>
							We bring a personal and effective to every
							project we work on. <br />
							Which is why our client love why they keep
							coming back.
						</p>
					</div>
				</div>
				<div className='py-5 hidden sm:block'>
					{/* <Image
						src={networking}
						alt='network'
						className='rounded-lg w-80'
					/> */}
				</div>
			</div>

			<div className='pb-10'>
				<Link
					href={'/create'}
					className='bg-amber-500 hover:bg-rose-600 text-white rounded-md cursor-pointer font-semibold py-3 px-5'
				>
					Create Jackpot
				</Link>
			</div>
		</div>
	);
};

export default Header;
