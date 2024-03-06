import React from 'react';
import Image from 'next/image';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

const Header = ({ text }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar
                    sx={{
                        width: '100%',
                        display: 'flex',
                    }}
                >
                    <Link href="/">
                        <Image
                            src="/images/logo.png"
                            height={40}
                            width={40}
                            alt="logo"
                        />
                    </Link>
                    <Box sx={{ width: '100%' }}>
                        <Typography variant="h5" component="h1" align="center">
                            {text}
                        </Typography>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Header;
