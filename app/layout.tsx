import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { headers } from 'next/headers';
import { Suspense } from 'react';
import './globals.css';
import AppProviders from './providers';

const inter = Inter({
    subsets: ['latin'],
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
    title: 'DreyerX Name Service - Secure Your Unique Name',
    description:
        'Claim and manage your unique blockchain-based names securely with DreyerX Name Service.',
    keywords: ['blockchain', 'ENS', 'name service', 'DreyerX', 'web3'],
    robots: 'index, follow',
    openGraph: {
        title: 'DreyerX Name Service - Claim Your Unique Name',
        description:
            'Easily claim and manage your unique names on the blockchain with DreyerX Name Service.',
        url: 'https://dreyerxns.com',
        siteName: 'DreyerX Name Service',
        images: [
            {
                url: 'https://dreyerxns.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'DreyerX Name Service Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DreyerX Name Service - Claim Your Unique Blockchain Name',
        description:
            'Secure your place on the blockchain with DreyerX Name Service. Easy, fast, and decentralized.',
        images: ['https://dreyerxns.com/twitter-image.png'],
        site: '@dreyerxns',
    },
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const headersObj = await headers();
    const cookies = headersObj.get('cookie');

    return (
        <html lang='en'>
            <body className={`${inter.className} antialiased`}>
                <Suspense>
                    <AppProviders cookies={cookies}>{children}</AppProviders>
                </Suspense>
            </body>
        </html>
    );
}
