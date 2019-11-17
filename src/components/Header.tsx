import React from 'react';
import { AppBar, Typography, Toolbar } from '@material-ui/core';
const Header = () => {
    return(
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        TagTube
                    </Typography>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header