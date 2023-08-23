'use client';

import {useRouter} from 'next/navigation';

export default function NavigationMenu() {
	const router = useRouter();

	const handleHomeClick = () => router.push('/home');
	const handleFeedingClick = () => router.push('/feeding');
	return (
		<nav className="border-t-2 border-orange-400">
			<ul className="flex w-full list-none justify-between px-8 py-10">
				<li onClick={handleHomeClick}>home</li>
				<li onClick={handleFeedingClick}>feeding</li>
				<li>walk</li>
				<li>analysys</li>
				<li>health</li>
			</ul>
		</nav>
	);
}
