import React, { useState } from 'react'
import { Watch } from '../Watch/WatchPage';
import { TextField, Button } from '@material-ui/core';

export const Registration = () => {
    const [YouTubeUrl, setYouTubeUrl] = useState<string>("")
    const [isLoaded, setIsLoaded] = useState<boolean>(false)
    const [videoId, setVideoId] = useState<string>("")

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
            <Watch vid={videoId}/>
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