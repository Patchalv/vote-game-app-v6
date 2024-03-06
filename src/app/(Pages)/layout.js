import Header from '../(components)/Header/Header';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import '../globals.css';

export default function PageLayout({ children }) {
    return (
        <main className="app-pages">
            <Header text="Vote to play!" />
            {children}
        </main>
    );
}
