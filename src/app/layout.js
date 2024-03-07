import { Karla } from 'next/font/google';
import './globals.css';
import { Providers } from './providers';
import { Suspense } from 'react';
import Loading from './(components)/Loading/loading';

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
                url: 'https://vote-game-five.vercel.app/images/socials.jpg', // Must be an absolute URL
                width: 800,
                height: 600,
                alt: 'Photo by Aksel Fristrup on Unsplash',
            },
            {
                url: 'https://vote-game-five.vercel.app/images/socials.jpg', // Must be an absolute URL
                width: 1800,
                height: 1600,
                alt: 'Photo by Aksel Fristrup on Unsplash',
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
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="144x144"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/favicon//safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />
            </head>
            <body className={karla.className}>
                <Providers>
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </Providers>
            </body>
        </html>
    );
}
