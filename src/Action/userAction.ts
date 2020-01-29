import {User, AUTH_USER, SET_USER_INFO, UPDATE_TOKENS, UPDATE_ACCESS_TOKEN, SIGN_OUT, LEAVE_USER, UserActionTypes} from './actionTypes'
import { decodeJwt } from '../components/modules'
/*
interface UserInfoResponse{
    status: "success" | "failed"
    payload: {
        userName: string
        nickName: string
        image   : string
    }&{
        error: string
    }
}
*/

export function authUser(accessToken:string, refreshToken:string, userID: string, provider: string, accessExp: number): UserActionTypes{
   // const dispatch = useDispatch()
   // dispatch(setUserInfo(accessToken))
    return {
        type        : AUTH_USER,
        accessToken : accessToken,
        refreshToken: refreshToken,
        userID      : userID,
        provider    : provider,
        accessExp   : accessExp,
    }
}

export function setUserInfo(userName:string, nickName:string, image:string): UserActionTypes{
    return {
        type    : SET_USER_INFO,
        userName: userName,
        nickName: nickName,
        image   : image
    }
}

export function updateAccessToken(accessToken:string): UserActionTypes{
    const userInfo = decodeJwt(accessToken)
    return {
        type        : UPDATE_ACCESS_TOKEN,
        accessToken : accessToken,
        accessExp   : userInfo.exp,
    }
}


export function updateTokens(accessToken:string, refreshToken:string): UserActionTypes{
    const userInfo = decodeJwt(accessToken)
    return {
        type        : UPDATE_TOKENS,
        accessToken : accessToken,
        refreshToken: refreshToken,
        accessExp   : userInfo.exp,
    }
}

export function signOut(): UserActionTypes{
    return {
        type    : SIGN_OUT,
    }
}

export function leaveUser(): UserActionTypes{

    return {
        type    : LEAVE_USER,
    }
}