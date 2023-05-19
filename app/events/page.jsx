import Image from 'next/image';
import Link from 'next/link';
import Showcase from '../components/Showcase';
import EventItem from '../components/EventItem';

// METADATA
// THIS IS LOCATED IN layout.jsx, BUT CAN BE INDIVIDUAL TO EACH PAGE AS WELL
//
// export const metadata = {
// 	title: 'Home',
// 	description: 'AreWelcome Home Page',
// 	keywords: 'welcome, home, page',
// };

async function getEvents() {
	const res = await fetch('http://localhost:3000/events/api');

	if (!res.ok) {
		throw new Error('Something went wrong');
	}

	return res.json();
}

export default async function EventsPage() {
	const events = await getEvents();

	return (
		<div className='bg-gray-800'>
			<Showcase />
			<h1>AreWelcome</h1>
			<h1>Events</h1>
			{events.length === 0 && <h3>No events to show</h3>}

			{events.map((event) => (
				<EventItem
					key={event.id}
					event={event}
				/>
			))}
		</div>
	);
}
