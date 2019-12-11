import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player'
import Modal from 'react-modal'
import { useParams } from 'react-router';

export const Watch = () => {
    let { id } = useParams()

    const url:string="https://www.youtube.com/watch?v="+id
    const config={
        youtube:{
            playerVars:{
                autoplay: 1,
                controls: 1
            }
        }
    }

    return(
        <>
            <Container maxWidth="lg">
                
                    <Grid container direction="column">
                        <Grid item xs={12} md={8}>
                            <ReactPlayer 
                                url={url}
                                config={config}/>
                            
                        </Grid>
                        
                        <Grid item xs={12} md={8}>
                            <Typography variant="body1">
                                動画タイトル
                            </Typography>
                            <Typography variant="body1">
                                再生数
                            </Typography>
                            <Typography variant="body1">
                                チャンネル名
                            </Typography>
                        </Grid>
                    </Grid>
            </Container>
        </>
    )
}
