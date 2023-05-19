import Link from 'next/link';
import Image from 'next/image';

export default function EventItem({ event }) {
	return (
		<div>
			<div>
				<Image
					src={
						event.image
							? event.image
							: '/images/event-default.png'
					}
					width={170}
					height={100}
					alt={event.name}
				/>
			</div>

			<div>
				<span>
					{event.date} at {event.time}
				</span>
				<h3>{event.name}</h3>
			</div>

			<div>
				<Link href={`/events/${event.slug}`}>
					<button className='button'>Details</button>
				</Link>
			</div>
		</div>
	);
}
