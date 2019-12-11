import React from 'react';
import { CardMedia, Typography, Button, Card, CardActions, CardContent } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

export const SearchResults = () => {
    return(
        <>
            <SearchResult />
        </>
    )
}

const SearchResult = () => {
    let location = useLocation()
    const thumb_url:string = "http://img.youtube.com/vi/1awua0YrSRs/mqdefault.jpg"
    return(
        <>
            <Card>
                <Link to={{pathname: `/watch/1awua0YrSRs`,
                           state:   { background: location }
                        }}
                    >
                    <Thumbnail url={thumb_url} />
                    <MovieInfo />
                </Link>
                <Tags />
            </Card>
            
        </>
    )
}

interface ThumbnailProps{
    url: string
}

const Thumbnail: React.FC<ThumbnailProps> = ({url}) => {
    return(
        <>
            <CardMedia        
                component="img"
                image = {url}
            />
        </>
    )
}

const MovieInfo = () => {
    return(
        <>
            <CardContent>
                <Typography>
                    Youtube動画のタイトルを入力！？
                </Typography>
                <Typography>
                    11632回再生
                </Typography>
                <Typography>
                    いろいろちゃんねる
                </Typography>          
            </CardContent>
        </>
    )
}

const Tags = () => {
    return(
        <>  
            <CardActions>
                <Button>
                    タグ1
                </Button>
                <Button>
                    タグ2
                </Button>
                <Button>
                    タグ3
                </Button>
            </CardActions>
        </>
    )
}