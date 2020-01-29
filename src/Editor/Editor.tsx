import React, { useState, useEffect } from 'react'
import { Watch } from '../Watch/WatchPage';
import { TextField, Button, Typography } from '@material-ui/core';
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import { tagState } from '../Reducer/tagReducer'
import { useMovieInfo } from '../components/customHooks';


export const Editor = () => {
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [movieState, getMovieInfo, loading, error] = useMovieInfo()

    const dispatch = useDispatch()
    const tagState: tagState = useSelector((state :any) => state.tagReducer)
    const userState = useSelector((state :any) => state.userReducer)
    console.log({tagState}, {userState})

    const title = tagState.editor.title
    const channelName = tagState.editor.channelName
    const [videoId, setVideoId] = useState<string>(tagState.editor.youtubeID)
    const [YouTubeUrl, setYouTubeUrl] = useState<string>(tagState.editor.url)


    useEffect(() => {
        getMovieInfo(videoId, YouTubeUrl)
    }, [videoId])


    const changeYouTubeUrl = (e:any) => {
        setYouTubeUrl(e.target.value)
    }

    const loadYouTubeUrl = (e:any) => {
        setVideoId(ExtractVideoId(YouTubeUrl))
        setIsLoaded(true)
    }
    if(userState.authenticated){
        return(
            <>
                <YouTubeUrlInput 
                    changeYouTubeUrl={changeYouTubeUrl}
                    loadYouTubeUrl={loadYouTubeUrl} 
                    YouTubeUrl={YouTubeUrl}
                />
                <Watch youtubeID={videoId} title={title} channelName={channelName} tagType={"editor"}/>
            </>
        )
    } else {
        return(
        <>
            <p>動画の登録には、ログインが必要です。</p>
        </>
        )
    }
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