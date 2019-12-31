import React from 'react';
import { Container, Grid, Box, Typography } from '@material-ui/core';
import ReactPlayer from 'react-player'
import { useParams } from 'react-router';
import { TagForm } from './WatchComponents/TagForm';

interface WatchProps{
    vid?: string|undefined
}

export const Watch:React.FC<WatchProps> = ({vid}) => {
    const id = useParams()    
    let url:string="https://www.youtube.com/watch?v="+vid
    if(!vid) url="https://www.youtube.com/watch?v="+id //watchPageを直接URL入力した場合vidはundentifiedになる
    
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
                <Grid container direction="row" >
                    <Grid item xs={12} md={9}>
                        <Grid container direction="column">
                            <Grid item>
                                <ReactPlayer 
                                    url={url}
                                    config={config}/>
                            </Grid>

                            <Grid item>
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
                    </Grid>
                      
                    <Grid item xs={12} md={3}>
                        <TagForm />    
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}
