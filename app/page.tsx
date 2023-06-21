'use client';

import Image from 'next/image';
import Jackpots from './components/Jackpots';
import { generateLotteries } from '../services/fakeData';
import Header from './components/Header';
import { Provider } from 'react-redux';
import { store } from './store';
import {
	getLotteries,
	monitorWalletConnection,
} from '@/services/blockchain';
import React, { useState, useEffect } from 'react';
// window.React = React;

export default async function Home() {
	const [hasMounted, setHasMounted] = useState(false);

	useEffect(() => {
		setHasMounted(true);
	}, []);

	if (!hasMounted) return null;

	const jackpots = JSON.parse(
		JSON.stringify(generateLotteries(7))
	);
	const lotteries = await getLotteries();
	console.log(
		'🚀 ~ file: page.tsx:12 ~ Home ~ lotteries:',
		lotteries
	);

	return (
		<>
			bye
			{/* <Provider store={store}>
					<>
						<Header />
						<Jackpots jackpots={jackpots} />
					</>
				</Provider> */}
		</>
	);
}
