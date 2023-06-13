import Head from 'next/head';
// import Winners from '@/components/Winners';
import SubHeader from '@/app/components/SubHeader';
// import ResultTable from '@/components/ResultTable';
// import { globalActions } from '@/store/globalSlices';
import { useDispatch, useSelector } from 'react-redux';
// import {
// 	getLottery,
// 	getParticipants,
// 	getLotteryResult,
// } from '@/services/blockchain';
import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';

const Result = async () => {
	// console.log('params=', params);
	const searchParams = useSearchParams();
	const resultId = searchParams.get('resultId');

	// const lottery = await getLottery(resultId);
	// const participantList = await getParticipants(resultId);
	// const lotteryResult = await getLotteryResult(resultId);
	// const { setJackpot, setResult, setParticipants } =
	// 	globalActions;
	// const { participants, jackpot, result } = useSelector(
	// 	(states) => states.globalStates
	// );
	const dispatch = useDispatch();

	// useEffect(() => {
	// 	dispatch(setJackpot(lottery));
	// 	dispatch(setParticipants(participantList));
	// 	dispatch(setResult(lotteryResult));
	// }, []);

	return (
		<div>
			<Head>
				<title>Dapp Lottery - Result</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>

			<div className='min-h-screen bg-slate-100'>
				<SubHeader />
				{/* <ResultTable
					jackpot={jackpot}
					participants={participants}
					result={result}
				/>
				<Winners /> */}
			</div>
		</div>
	);
};

export default Result;
