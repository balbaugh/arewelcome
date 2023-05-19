import { NextResponse } from 'next/server';

const { events } = require('./data.json');

export async function GET(request) {
	const evnt = events.filter(
		(ev) => ev.slug === request.params.slug
	);

	const event = evnt[0];

	return NextResponse.json(event);
}
