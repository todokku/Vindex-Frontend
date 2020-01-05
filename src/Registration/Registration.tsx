import React, { useState, useEffect } from 'react'
import { Watch } from '../Watch/WatchPage';
import { TextField, Button } from '@material-ui/core';
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import {movieFetchState} from '../Reducer/movieFetchReducer'
import { fetchMovie } from '../Action/movieFetchAction'


const movieFetchSelector = (state :any) => {return state.movieFetchReducer}

export const Registration = () => {
    const [YouTubeUrl, setYouTubeUrl] = useState<string>("")
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [videoId, setVideoId] = useState<string>("")
    const fetchURL: string = "http://localhost:3000/api/v1/movie_fetch/"+videoId     

    const dispatch = useDispatch()
    const movieFetchState: movieFetchState = useSelector(movieFetchSelector)
    const title = movieFetchState.title
    const channelName = movieFetchState.channelName

    interface MovieFetchResponse{
        title: string
        channelName: string
    }

    useEffect(() => {
        axios.get<MovieFetchResponse>(fetchURL)
           .then(res => {
                dispatch(fetchMovie(videoId, res.data.title, res.data.channelName))
           }).catch(error => {
               console.warn({error})
           })
    }, [fetchURL])


    const changeYouTubeUrl = (e:any) => {
        setYouTubeUrl(e.target.value)
    }

    const loadYouTubeUrl = (e:any) => {
        setVideoId(ExtractVideoId(YouTubeUrl))
        setIsLoaded(true)
    }

    return(
        <>
            <YouTubeUrlInput 
                changeYouTubeUrl={changeYouTubeUrl}
                loadYouTubeUrl={loadYouTubeUrl} 
                YouTubeUrl={YouTubeUrl}
            />
            <Watch vid={videoId} title={title} channelName={channelName}/>
        </>
    )
}

const ExtractVideoId = (Url:string) => {
    const urlPos:number = Url.indexOf("watch?v=")
    const videoId = Url.substr(urlPos+8, 11)
    return videoId
}

interface YouTubeUrlInputProps{
    changeYouTubeUrl: (e:any) => void
    loadYouTubeUrl: (e:any) => void
    YouTubeUrl: string
}

const YouTubeUrlInput:React.FC<YouTubeUrlInputProps> = ({changeYouTubeUrl, loadYouTubeUrl, YouTubeUrl}) => {
    return(
        <>
            <TextField onChange={changeYouTubeUrl} value={YouTubeUrl} />
            <Button onClick={loadYouTubeUrl}>
                動画を読み込む
            </Button>
        </>
    )
}