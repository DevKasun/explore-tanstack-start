/// <reference types="vite/client" />
import React, { type ReactNode } from 'react';
import {
	Outlet,
	createRootRoute,
	HeadContent,
	Scripts,
} from '@tanstack/react-router';
import appCSS from '../styles/app.css?url';
import MainLayout from '~/layout/main-layout';
import NotFoundPage from './not-found-page';

export const Route = createRootRoute({
	head: () => ({
		title: 'Exploring TanStack Start',
		meta: [
			{ charSet: 'utf-8' },
			{
				name: 'viewport',
				content: 'width=device-width, initial-scale=1',
			},
		],
		links: [{ rel: 'stylesheet', href: appCSS }],
	}),
	component: RootComponent,
	notFoundComponent: NotFoundPage,
});

function RootComponent() {
	return (
		<RootDocument>
			<Outlet />
		</RootDocument>
	);
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
	return (
		<html>
			<head>
				<HeadContent />
			</head>
			<body className='bg-gradient-to-l from-orange-500 to-yellow-500'>
				<MainLayout>{children}</MainLayout>
				<Scripts />
			</body>
		</html>
	);
}
