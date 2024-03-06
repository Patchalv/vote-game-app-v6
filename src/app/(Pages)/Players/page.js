'use client';
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useSelector, useDispatch } from 'react-redux';
import { addPlayer, deletePlayer } from '@/lib/features/players/playersSlice';

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
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';

const PlayersPage = () => {
    const router = useRouter();
    const [name, setName] = useState('');
    const players = useSelector((state) => state.players);
    const dispatch = useDispatch();

    const handleAddPlayer = (e) => {
        e.preventDefault();
        if (name === '') return;
        if (players.length > 8) return;
        dispatch(addPlayer(name));
        setName('');
    };

    const handleDeletePlayer = (e, id) => {
        e.preventDefault();
        dispatch(deletePlayer(id));
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
                    Who is playing?
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
                        label="Player"
                        variant="outlined"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        fullWidth
                        sx={{ mb: '20px' }}
                    />
                    {players.map((player) => (
                        <Card
                            key={player.id}
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
                                <AccountCircleOutlinedIcon color="disabled" />
                                <Typography variant="body1">
                                    {player.name}
                                </Typography>
                            </Box>

                            <IconButton
                                aria-label="delete"
                                onClick={(e) =>
                                    handleDeletePlayer(e, player.id)
                                }
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
                        endIcon={<ArrowForwardIosIcon />}
                        disabled={players.length > 1 ? false : true}
                        onClick={() => router.push('/Games')}
                    >
                        Add Games
                    </Button>
                </Stack>
            </Paper>
        </>
    );
};

export default PlayersPage;
