async function getEventSlug() {
	const res = await fetch(
		`http://localhost:3000/events/api/${slug}`
	);
	const data = await res.json();
	return data;
}

export default function EventPage({ event }) {
	const slugs = getEventSlug();
	const eventSlug = slugs.filter(
		(ev) => ev.slug === request.params.slug
	);

	console.log(slugs);

	return (
		<div>
			<h1>{event.name}</h1>
		</div>
	);
}
