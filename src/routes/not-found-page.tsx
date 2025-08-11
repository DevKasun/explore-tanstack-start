import { useRouter } from '@tanstack/react-router';

function NotFoundPage() {
	const router = useRouter();
	return (
		<div>
			<h1>404 - Page Not Found</h1>
			<p>Sorry, the page you are looking for does not exist.</p>
			<button onClick={() => router.history.back()}>Go Back</button>
		</div>
	);
}

export default NotFoundPage;
