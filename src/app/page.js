'use client';

import Image from 'next/image';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { resetGames } from '@/lib/features/games/gamesSlice';
import { resetVotes } from '@/lib/features/votes/votesSlice';
import { resetPlayers } from '@/lib/features/players/playersSlice';
import { Typography } from '@mui/material';

export default function Home() {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleButtonClick = () => {
        dispatch(resetGames());
        dispatch(resetVotes());
        dispatch(resetPlayers());
        router.push('/Players');
    };
    const today = new Date();
    const year = today.getFullYear();

    return (
        <main className="homebg">
            <Image src="/images/logo.png" height={150} width={150} alt="logo" />
            <h1>Vote to Play!</h1>
            <Button
                variant="filled"
                size="large"
                sx={{ backgroundColor: '#eef1f3' }}
                onClick={() => handleButtonClick()}
            >
                Lets Vote..
            </Button>
            <Typography
                variant="body2"
                gutterBottom
                align="center"
                sx={{ color: 'white', position: 'absolute', bottom: '10px' }}
            >
                By Patrick Alvarez © {year}
            </Typography>
        </main>
    );
}
