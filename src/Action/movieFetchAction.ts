import {FETCH_MOVIE, FetchActionTypes} from './actionTypes'

export function fetchMovie(vid:string, title:string, channelName: string): FetchActionTypes{
    return {
        type        : FETCH_MOVIE,
        youtubeID   : vid,
        title       : title,
        channelName : channelName,
    }
}
