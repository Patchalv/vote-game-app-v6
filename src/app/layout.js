import { Karla } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Suspense } from 'react';
import Loading from './loading';

const karla = Karla({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

export const metadata = {
    title: 'Vote to Play!',
    description: 'Helping you avoid arguments by voting on the next game',
    creator: 'Patrick Alvarez',
    openGraph: {
        title: 'Vote to Play!',
        description: 'Helping you avoid arguments by voting on the next game',
        url: 'https://vote-game-five.vercel.app/',
        siteName: 'Vote to Play!',
        images: [
            {
                url: 'https://vote-game-five.vercel.app/images/social2.png', // Must be an absolute URL
                width: 800,
                height: 600,
            },
            {
                url: 'https://vote-game-five.vercel.app/images/social2.png', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'My custom alt',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },
    robots: {
        index: false,
        follow: true,
        nocache: true,
        googleBot: {
            index: true,
            follow: false,
            noimageindex: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={karla.className}>
                <Providers>
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </Providers>
            </body>
        </html>
    );
}
