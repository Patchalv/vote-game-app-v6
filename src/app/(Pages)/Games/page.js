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
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DeleteIcon from '@mui/icons-material/Delete';
import ExtensionOutlinedIcon from '@mui/icons-material/ExtensionOutlined';
const GamesPage = () => {
    const [name, setName] = useState('');
    const games = useSelector((state) => state.games);
    const dispatch = useDispatch();

    const handleAddPlayer = (e) => {
        e.preventDefault();
        if (name === '') return;
        if (games.length > 4) return;
        dispatch(addGame(name));
        setName('');
    };

    const handleDeleteGame = (e, id) => {
        e.preventDefault();
        dispatch(deleteGame(id));
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
                    }}
                >
                    <TextField
                        id="outlined-basic"
                        label="Game name"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                    >
                        <Link href="/Vote/1">Player 1 Vote</Link>
                    </Button>
                </Stack>
            </Paper>
        </>
    );
};

export default GamesPage;
