import { Tag, TagActionTypes } from '../Action/actionTypes'

export interface tagState{
    youtubeID :string
    updatedAt :string
    createdAt :string
    tags      :Tag[]
} 

const initialState:tagState = {
    youtubeID   : "",
    updatedAt   : "",
    createdAt   : "",
    tags        : []
}

const tagReducer = (state = initialState, action:TagActionTypes) => {
    switch(action.type) {
        case "LOAD_TAG":{
            return{
                ...state,
                youtubeID: action.youtubeID
            }        
        }
        case "ADD_TAG":{
            state.tags.push(action.newTag) 
            return{
                ...state,
            }        
        }
        case "DELETE_TAG":{
            return{
                ...state,
                tags: state.tags.slice(0, action.numDeleteTag)
                                .concat(state.tags.slice(action.numDeleteTag + 1, state.tags.length))
            } 
        }

        default: {return state}
    }
}



export default tagReducer