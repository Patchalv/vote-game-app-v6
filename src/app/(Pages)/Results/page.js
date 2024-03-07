'use client';

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import {
    Box,
    Button,
    Container,
    Stack,
    Typography,
    Paper,
} from '@mui/material';
import DownloadingIcon from '@mui/icons-material/Downloading';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const ResultsPage = () => {
    const router = useRouter();
    const votes = useSelector((state) => state.votes);
    const [total, setTotal] = useState({});

    const calculateTotal = () => {
        const newTotal = {};
        for (let i = 0; i < votes.length; i++) {
            let gameArray = votes[i].games;
            gameArray.forEach((game) => {
                if (!newTotal.hasOwnProperty(game.name)) {
                    newTotal[game.name] = game.points;
                } else {
                    newTotal[game.name] += game.points;
                }
            });
        }

        //Sort Object
        const sorted = Object.entries(newTotal)
            .sort((a, b) => b[1] - a[1])
            .reduce(
                (_sortedObj, [k, v]) => ({
                    ..._sortedObj,
                    [k]: v,
                }),
                {}
            );

        setTotal(sorted);
    };

    return (
        <>
            <Container>
                <Box mb={5}>
                    <Typography
                        variant="h4"
                        component="h1"
                        gutterBottom
                        align="center"
                        mt={2}
                        mb={2}
                    >
                        And the winners are....
                    </Typography>
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
                            endIcon={<DownloadingIcon />}
                            onClick={calculateTotal}
                        >
                            Calculate
                        </Button>
                    </Stack>
                </Box>
                <Box
                    sx={{
                        maxWidth: '350px',
                        margin: '0 auto',
                    }}
                >
                    <div className="resultBox">
                        <ul>
                            {Object.entries(total).map(([key, value]) => {
                                return (
                                    <li key={key}>
                                        <span className="result-item">
                                            {key}
                                        </span>
                                        : {value} pts
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
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
                        onClick={() => router.back()}
                    >
                        Back
                    </Button>
                    <Button
                        variant="contained"
                        endIcon={<ArrowForwardIosIcon />}
                        onClick={() => {
                            router.push('/');
                        }}
                    >
                        Start Again
                    </Button>
                </Stack>
            </Paper>
        </>
    );
};

export default ResultsPage;
