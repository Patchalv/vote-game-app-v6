'use client';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addVote } from '@/lib/features/votes/votesSlice';
import { useRouter, redirect } from 'next/navigation';

import {
    DndContext,
    closestCenter,
    KeyboardSensor,
    MouseSensor,
    TouchSensor,
    useSensor,
    useSensors,
} from '@dnd-kit/core';
import {
    arrayMove,
    SortableContext,
    verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { restrictToVerticalAxis } from '@dnd-kit/modifiers';

import {
    Box,
    Container,
    Button,
    Typography,
    Stack,
    Paper,
} from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import DraggableItem from '@/app/(components)/DraggableItem/DraggableItem';

const VotingPage = ({ params }) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const players = useSelector((state) => state.players);
    const initialGames = useSelector((state) => state.games);
    const [games, setGames] = useState(initialGames);
    const [isTouched, setIsTouched] = useState(false);

    // REDIRECT IF INPUT A PLAYER NUMBER THAT DOESNT EXIST
    if (
        Number(params.player) - 1 > players.length - 1 ||
        Number(params.player) - 1 < 0
    ) {
        redirect('/Players');
    }

    let playerIndex = Number(params.player) - 1;
    let currentPlayer = players[playerIndex];

    // DRAG AND DROP
    const mouseSensor = useSensor(MouseSensor);
    const touchSensor = useSensor(TouchSensor);
    const keyboardSensor = useSensor(KeyboardSensor);
    const sensors = useSensors(mouseSensor, touchSensor, keyboardSensor);

    const onDragEnd = (event) => {
        const { active, over } = event;

        if (active.id === over.id) {
            return;
        }
        setGames((games) => {
            const oldIndex = games.findIndex((game) => game.id === active.id);
            const newIndex = games.findIndex((game) => game.id === over.id);
            return arrayMove(games, oldIndex, newIndex);
        });
        setIsTouched(true);
    };

    // BACK BUTTON

    // Link text
    const backButtonLink = () => {
        if (Number(params.player) === 1) {
            return 'Select Games';
        } else {
            return `Player ${Number(params.player) - 1}`;
        }
    };
    // Route back on click
    const handleClickBack = () => {
        if (Number(params.player) === 1) {
            router.push(`/Games`);
        } else {
            router.push(`/Vote/${Number(params.player) - 1}`);
        }
    };

    // NEXT BUTTON

    // Link text
    const nextButtonLink = () => {
        if (Number(params.player) < players.length) {
            return `Player ${Number(params.player) + 1}`;
        } else {
            return 'Results';
        }
    };

    // On Next click:
    // A) Add vote to state
    // B) Route to next

    const handleClickNext = () => {
        let voteArray = [];
        let arrayLength = games.length;

        games.map((game, index) => {
            voteArray.push({
                gameId: game.id,
                name: game.name,
                points: Number(arrayLength - index),
            });
            return voteArray;
        });

        dispatch(
            addVote({
                playerIdx: params.player,
                player: currentPlayer.name,
                games: voteArray,
            })
        );

        if (Number(params.player) < players.length) {
            router.push(`/Vote/${Number(params.player) + 1}`);
        } else {
            router.push('/Results');
        }
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
                    Player {params.player}: {currentPlayer.name}
                </Typography>
                <Typography variant="body2" align="center" mb={3}>
                    Reorder the games the game you want to play most to least:
                </Typography>

                <Box
                    sx={{
                        maxWidth: '350px',
                        margin: '0 auto',
                    }}
                >
                    <DndContext
                        collisionDetection={closestCenter}
                        onDragEnd={onDragEnd}
                        sensors={sensors}
                        modifiers={[restrictToVerticalAxis]}
                        id={params.player}
                    >
                        <SortableContext
                            items={games}
                            strategy={verticalListSortingStrategy}
                        >
                            {games.map((game) => (
                                <DraggableItem key={game.id} game={game} />
                            ))}
                        </SortableContext>
                    </DndContext>
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
                        onClick={handleClickBack}
                    >
                        {backButtonLink()}
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        disabled={isTouched ? false : true}
                        onClick={handleClickNext}
                    >
                        {nextButtonLink()}
                    </Button>
                </Stack>
            </Paper>
        </>
    );
};

export default VotingPage;
