import React from 'react';
import axios from 'axios'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
const Header = () => {

    const twitterLogin = () => {

        /*
        axios
            .get("http://localhost:3000/api/v1/auth/twitter/")
            .then(result => {
                const profile = result
                console.log(profile)
            })
        */
        window.location.href = 'http://localhost:3000/api/v1/auth/twitter/'
    }
    return(
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6">
                        TagTube
                    </Typography>

                    <Button onClick={twitterLogin}>
                        TwitterLogin
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header