import { FetchActionTypes } from '../Action/actionTypes'

export interface movieFetchState{
    youtubeID   :string
    updatedAt   :string
    createdAt   :string
    title       :string
    channelName :string
} 

const initialState:movieFetchState = {
    youtubeID   : "",
    updatedAt   : "",
    createdAt   : "",
    title       : "",
    channelName : ""
}

const movieFetchReducer = (state = initialState, action:FetchActionTypes) => {
    switch(action.type) {
        case "FETCH_MOVIE":{
            return{
                ...state,
                youtubeID   : action.youtubeID,
                title       : action.title,
                channelName : action.channelName
            }        
        }
        default: {return state}
    }
}



export default movieFetchReducer