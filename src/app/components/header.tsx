'use client';

import {usePathname} from 'next/navigation';
import {useEffect} from 'react';

type RoutePath = '/home' | '/feeding';

export default function Header() {
	const pathname = usePathname();

	const setHeaderTitle = (pathname: string) => {
		const titles = {
			'/home': 'Home',
			'/feeding': 'Feeding'
		};
		return titles[pathname as RoutePath];
	};

	useEffect(() => {}, []);
	return (
		<header className="flex h-20 w-full flex-wrap content-center bg-orange-400 px-8 text-white">
			<h1 className="text-[20px]">{setHeaderTitle(pathname)}</h1>
		</header>
	);
}
