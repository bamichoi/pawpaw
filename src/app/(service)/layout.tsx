import type {Metadata} from 'next';
import NavigationMenu from '../components/navigationMenu';
import Header from '../components/header';

export const metadata: Metadata = {
	title: 'PawPaw',
	description: 'Happy Pet Walk!'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<div className="flex h-[100vh] w-full max-w-[700px] flex-col justify-between bg-white">
			<Header />
			<div className="h-full">{children}</div>
			<NavigationMenu />
		</div>
	);
}
