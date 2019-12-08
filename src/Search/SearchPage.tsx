import React from 'react';
import { SearchBox } from '../components/SearchBox'
import Header from '../components/Header'
import { Container, Grid, Box } from '@material-ui/core';

export const Search: React.FC = () => {
    return(
        <>
            <Container maxWidth="lg">
            <Grid container justify="center">
                <Grid item>
                    <Box m={10} />
                    <SearchBox />
                </Grid>
            </Grid>
        </Container>
        </>
    )
}