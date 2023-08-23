import './globals.css';
import type {Metadata} from 'next';

export const metadata: Metadata = {
	title: 'PawPaw',
	description: 'Happy Pet Walk!'
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html>
			<body className="flex  justify-center bg-slate-400" suppressHydrationWarning={true}>
				<div className="flex h-[100vh] w-full max-w-[700px] flex-col justify-between bg-white">{children}</div>
			</body>
		</html>
	);
}
