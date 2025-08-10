import * as fs from 'node:fs';
import React from 'react';
import { createFileRoute, useRouter } from '@tanstack/react-router';
import HomePage from '../pages/home-page';
import MainLayout from '~/layout/main-layout';

export const Route = createFileRoute('/')({
	component: Home,
});

function Home() {
	const router = useRouter();
	const state = Route.useLoaderData();

	return (
		<MainLayout>
			<HomePage />
		</MainLayout>
	);
}
