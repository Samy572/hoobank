import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/navbar';
import clsx from 'clsx';

const poppins = Poppins({ weight: '400', subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'HooBank',
	description: 'The next generation payment method',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={clsx('bg-primary', poppins.className)}>{children}</body>
		</html>
	);
}
