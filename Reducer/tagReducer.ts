import { Tag, TagActionTypes } from '../Action/actionTypes'

export interface tagState{
    youtubeID :string
    updatedAt :string
    createdAt :string
    tags      :Tag[]
} 

const initialState = {
    youtubeID   : "",
    updatedAt   : "",
    createdAt   : "",
    tags        :[{}]
}

const tagReducer = (state = initialState, action:TagActionTypes) => {
    switch(action.type) {
        case "LOAD_TAG":{
            return{
                ...state,
                youtubeID : action.youtubeID
            }        
        }
        case "ADD_TAG":{

        }
        case "DELETE_TAG":{

        }
        case "UPDATE_TAG":{

        }

        default: {return state}
    }
}

export default tagReducer