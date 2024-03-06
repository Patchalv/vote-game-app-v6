'use client';
import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { Card, Typography } from '@mui/material';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const DraggableItem = ({ game }) => {
    const { attributes, listeners, setNodeRef, transform, transition } =
        useSortable({ id: game.id });
    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className="user"
        >
            <Card
                key={game.id}
                sx={{
                    display: 'flex',
                    p: 2,
                    mb: 2,
                    gap: 2,
                }}
            >
                <DragIndicatorIcon />
                <Typography variant="body1">{game.name}</Typography>
            </Card>
        </div>
    );
};

export default DraggableItem;
