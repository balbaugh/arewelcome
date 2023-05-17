import Image from 'next/image';
import Link from 'next/link';

// METADATA
// THIS IS LOCATED IN layout.jsx, BUT CAN BE INDIVIDUAL TO EACH PAGE AS WELL
//
// export const metadata = {
// 	title: 'Home',
// 	description: 'AreWelcome Home Page',
// 	keywords: 'welcome, home, page',
// };

export default function HomePage() {
	return (
		<div className='bg-gray-800'>
			<h1>AreWelcome</h1>
		</div>
	);
}
