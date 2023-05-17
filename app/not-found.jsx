import Link from 'next/link';

export default function NotFound() {
	return (
		<div>
			<h1>404</h1>
			<h2>Not Found</h2>
			<p>Could not find requested resource</p>
			<Link href='/'>Go Home</Link>
		</div>
	);
}
