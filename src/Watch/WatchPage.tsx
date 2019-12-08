import React from 'react';
import { Container, Grid, Box } from '@material-ui/core';
import ReactPlayer from 'react-player'

export const Watch = () => {
    const url="https://www.youtube.com/watch?v=TtIAVwmtS4g"
    const config={
        youtube:{
        }
    } 
    return(
        <>
            <Container maxWidth="lg">
                <Box m={10} />
                <Grid container direction="row">
                    <Grid item direction="column" xs={12} md={8}>
                        <ReactPlayer 
                            url={url}/>
                        
                    </Grid>
                    
                    <Grid item direction="column" xs={12} md={4}>
                    
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
