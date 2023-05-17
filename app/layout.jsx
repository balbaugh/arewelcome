import './globals.css';
import { Inter } from 'next/font/google';
import Header from 'app/components/Header';
import Footer from './components/Footer';

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
			<body className={`${inter.className} bg-gray-800`}>
				<Header />
				<div className='bg-inherit'>{children}</div>
				<Footer />
			</body>
		</html>
	);
}
