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
