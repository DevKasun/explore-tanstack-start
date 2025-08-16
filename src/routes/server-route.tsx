import { createFileRoute } from '@tanstack/react-router';
import { createServerFileRoute } from '@tanstack/react-start/server';
import { useState } from 'react';

export const ServerRoute = createServerFileRoute('/server-route').methods({
	POST: async ({ request }) => {
		const body = await request.json();
		return new Response(
			JSON.stringify({ message: `Hello, ${body.name}!` })
		);
	},
});

export const Route = createFileRoute('/server-route')({
	component: RouteComponent,
});

function RouteComponent() {
	const [reply, setReply] = useState('');

	return (
		<div>
			<button
				onClick={() => {
					fetch('/server-route', {
						method: 'POST',
						headers: {
							'Content-Type': 'application/json',
						},
						body: JSON.stringify({ name: 'Tanner' }),
					})
						.then((res) => res.json())
						.then((data) => setReply(data.message));
				}}
			>
				Say Hello
			</button>
		</div>
	);
}
