import {UserActionTypes} from '../Action/actionTypes'

export interface userState{
    authenticated: boolean
    accessToken: string
    refreshToken: string
    userID: string
    userName: string
    nickName: string
    provider: string
    image: string
}

const initialState: userState = {
    authenticated: false,
    accessToken: "",
    refreshToken: "",
    userID: "",
    userName: "",
    nickName: "",
    provider: "",
    image: "",
}

const userReducer = (state = initialState, action:UserActionTypes) => {
    switch(action.type) {
        case "AUTH_USER":{
            return{
                ...state,
                authenticated   : true,
                accessToken     : action.accessToken,
                refreshToken    : action.refreshToken,
                provider        : action.provider, 
                userID          : action.userID,
            }        
        }
        
        case "SET_USER_INFO":{
            console.log({action})
            return{
                ...state,
                userName: action.userName,                
                nickName: action.nickName, 
                image   : action.image, 
            }        
        }

        case "UPDATE_TOKEN":{
            return{
                ...state,
                accessToken     : action.accessToken,
                refreshToken    : action.refreshToken,
            }        
        }
        
        case "SIGN_OUT":{
            return{
                initialState
            }        
        }

        case "LEAVE_USER":{
            return{
                initialState
            }        
        }

        default: return initialState
    }
}


export default userReducer