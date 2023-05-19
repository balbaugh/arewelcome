import { NextResponse } from 'next/server';

const { events } = require('./data.json');

export async function GET(request) {
	return NextResponse.json(events);
}
