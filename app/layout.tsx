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
    title: 'DreyerX Staking - Maximize Your Rewards',
    description:
        'Stake your tokens securely with DreyerX Staking and earn attractive rewards. Join the decentralized ecosystem today.',
    keywords: ['staking', 'DreyerX', 'blockchain', 'rewards', 'web3', 'crypto'],
    robots: 'index, follow',
    openGraph: {
        title: 'DreyerX Staking - Earn Rewards Securely',
        description:
            'Lock your tokens with DreyerX Staking to earn rewards safely and efficiently in a decentralized environment.',
        url: 'https://stake.dreyerx.com',
        siteName: 'DreyerX Staking',
        images: [
            {
                url: 'https://stake.dreyerx.com/og-image.png',
                width: 1200,
                height: 630,
                alt: 'DreyerX Staking Logo',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'DreyerX Staking - Secure Your Rewards',
        description:
            'Start staking with DreyerX today to earn rewards securely in a decentralized blockchain ecosystem.',
        images: ['https://dreyerxstaking.com/twitter-image.png'],
        site: '@dreyerx',
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
