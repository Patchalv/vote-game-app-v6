import { Container } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
    return (
        <Container
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <CircularProgress />
        </Container>
    );
}
