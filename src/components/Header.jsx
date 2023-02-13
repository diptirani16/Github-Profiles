import React from "react";
import { Box, AppBar, Toolbar, Typography, Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Header() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            Github Profiles
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Switch {...label} color="default"/>
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}