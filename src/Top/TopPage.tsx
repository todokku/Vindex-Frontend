import React from 'react';
import { Caption } from './TopComponents/Caption'
import { SearchBox } from './TopComponents/SearchBox'
import Header from '../components/Header'
import { Container, Grid, Box } from '@material-ui/core';
export const Top = () => {
    return(
        <>
            <Container maxWidth="lg">
                <Grid container justify="center">
                    <Grid item>
                        <Box m={10} />
                        <Caption />
                        <SearchBox />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
