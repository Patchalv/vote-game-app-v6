import Header from '../(components)/Header/Header';
import Loading from '../(components)/Loading/loading';
import '../globals.css';
import { Suspense } from 'react';

export default function PageLayout({ children }) {
    return (
        <main className="app-pages">
            <Header text="Vote to play!" />
            <Suspense fallback={<Loading />}>{children}</Suspense>
        </main>
    );
}
