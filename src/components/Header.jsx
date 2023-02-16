import React from "react";
import { Box, AppBar, Toolbar, Typography, Switch } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Switch demo' } };

export default function Header({toggleDark, settoggleDark}) {

    const handleModeChange = () => {
        settoggleDark(!toggleDark)
    };

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div">
                            Github Profiles
                        </Typography>
                        <Box sx={{ flexGrow: 1 }}></Box>
                        <Switch checked={toggleDark}
                            onChange={handleModeChange}
                            name="toggleDark" color="default" />
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    )
}