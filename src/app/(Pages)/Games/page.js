'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addGame, deleteGame } from '@/lib/features/games/gamesSlice';

import {
    Box,
    Card,
    Container,
    Button,
    TextField,
    Typography,
    Stack,
    Paper,
    IconButton,
} from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
const GamesPage = () => {
    const router = useRouter();
    const [title, setTitle] = useState('');
    const games = useSelector((state) => state.games);
    const players = useSelector((state) => state.players);

    const dispatch = useDispatch();

    const handleAddPlayer = (e) => {
        e.preventDefault();
        if (title === '') return;
        if (games.length > 4) return;
        dispatch(addGame(title));
        setTitle('');
    };

    const handleDeleteGame = (e, id) => {
        e.preventDefault();
        dispatch(deleteGame(id));
    };

    const handleClickNext = () => {
        router.push('/Vote/1');
    };

    return (
        <>
            <Container>
                <Typography
                    variant="h5"
                    component="h1"
                    gutterBottom
                    align="center"
                    mt={2}
                    mb={2}
                >
                    What games will we choose from?
                </Typography>

                <Box
                    component="form"
                    onSubmit={(e) => handleAddPlayer(e)}
                    sx={{
                        maxWidth: '350px',
                        margin: '0 auto',
                        paddingBottom: '100px',
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Game name"
                        helperText="3 - 5 games"
                        variant="outlined"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        fullWidth
                        sx={{ mb: '20px' }}
                    />

                    {games.map((game) => (
                        <Card
                            key={game.id}
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                p: 2,
                                mb: 2,
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    gap: 2,
                                    alignItems: 'center',
                                }}
                            >
                                <ExtensionOutlinedIcon color="disabled" />
                                <Typography variant="body1">
                                    {game.name}
                                </Typography>
                            </Box>
                            <IconButton
                                aria-label="delete"
                                onClick={(e) => handleDeleteGame(e, game.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Card>
                    ))}
                </Box>
            </Container>
            <Paper
                sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }}
                elevation={3}
            >
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="center"
                    alignItems="center"
                    pt={1}
                    pb={1}
                >
                    <Button
                        variant="contained"
                        startIcon={<ArrowBackIosIcon />}
                    >
                        <Link href="/Players">Choose players</Link>
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        disabled={games.length > 2 ? false : true}
                        onClick={handleClickNext}
                    >
                        {players[0].name}
                    </Button>
                </Stack>
            </Paper>
        </>
    );
};

export default GamesPage;
