import type {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'PawPaw',
	description: 'Happy Pet Walk!'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<div className="flex h-[100vh] w-full max-w-[700px] flex-col justify-between bg-white">
			<header className="flex h-20 w-full flex-wrap content-center bg-orange-400 px-8 text-white">PawPaw</header>
			<div className="px-8">{children}</div>
			<nav className="border-t-2 border-orange-400">
				<ul className="flex w-full list-none justify-between px-8 py-10">
					<li>home</li>
					<li>feeding</li>
					<li>walk</li>
					<li>health</li>
				</ul>
			</nav>
		</div>
	);
}
