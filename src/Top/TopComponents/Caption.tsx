import React from 'react';
import {Button, Typography, Grid} from '@material-ui/core/'

export const Caption = () => {
    return(
        <>
            <Grid container justify="center" direction="column">
                <Logo />
                <ServiceCaption />
                <ResistButton />
            </Grid>
        </>
    )
}

const Logo = () => {
    return(
        <>
            <Typography variant="h2">
                Vindex
            </Typography>
        </>
    )
}

const ServiceCaption= () => {
    return(
        <>
            <Typography  variant="h5">
                YouTube上の動画をタグ付けして検索
            </Typography>
        </>
    )
}

const ResistButton = () => {
    return(
        <>
            <Button color="primary">
                アカウント登録
            </Button>
        </>
    )
}
