import {FETCH_MOVIE, FetchMovieAction} from './actionTypes'

export function fetchMovie(vid:string, title:string, channelName: string): FetchMovieAction{
    return {
        type        : FETCH_MOVIE,
        youtubeID   : vid,
        title       : title,
        channelName : channelName,
    }
}
