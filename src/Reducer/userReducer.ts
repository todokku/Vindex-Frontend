import {User, UserActionTypes} from '../Action/actionTypes'

export interface userState{
    login: boolean
    userID: string
    userName: string
}

const initialState = {
    login: false,
    userID: "",
    userName: ""
}

const tagReducer = (state = initialState, action:UserActionTypes) => {
    switch(action.type) {
        case "AUTH_USER":{
            return{
                ...state,
                login: true,
                userID: "",
                userName: ""
            }        
        }

        default: {return state}
    }
}



export default tagReducer