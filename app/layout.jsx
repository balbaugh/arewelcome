import './globals.css';
import { Inter } from 'next/font/google';
import Header from 'app/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'AreWelcome',
	description: 'Helsinki Metro area concert listings',
	keywords:
		'music, concerts, helsinki, finland, metro, events, listings',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Header />
				<div className='container mx-auto'>{children}</div>
			</body>
		</html>
	);
}
