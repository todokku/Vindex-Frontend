export const LOAD_TAG   = 'LOAD_TAG'
export const UPDATE_TAG = 'UPDATE_TAG'
export const DELETE_TAG = 'DELETE_TAG'
export const ADD_TAG    = 'ADD_TAG'

export const FETCH_MOVIE = 'FETCH_MOVIE'

export const AUTH_USER = 'AUTH_USER'
export const UPDATE_TOKEN = 'UPDATE_TOKEN'
export const SET_USER_INFO = 'SET_USER_INFO'
export const SIGN_OUT = 'SIGN_OUT'
export const LEAVE_USER = 'LEAVE_USER'


export interface Contributer{
    userID: string
    userName: string
}

export interface Tag{
    contributer : Contributer
    value       : string
    timestump   : string
    youtubeID   : string
}

export interface User{
    authenticated: boolean
    accessToken: string
    refreshToken: string
    userID: string
    userName: string
    nickName: string
    provider: string
    image: string
}


export interface LoadTagAction {
    type: typeof LOAD_TAG
    loadTags    : Tag[]
    youtubeID   : string
}

export interface UpdateTagAction {
    type: typeof UPDATE_TAG
    newTags: Tag[]
}

export interface DeleteTagAction {
    type: typeof DELETE_TAG
    numDeleteTag: number
}

export interface AddTagAction {
    type: typeof ADD_TAG
    newTag: Tag
}

export type TagActionTypes = LoadTagAction   |
                             UpdateTagAction |
                             DeleteTagAction |
                             AddTagAction


export interface FetchMovieAction {
    type        : typeof FETCH_MOVIE
    youtubeID   : string,
    title       : string,
    channelName : string,
}


export interface AuthUserAction {
    type: typeof AUTH_USER
    accessToken: string
    refreshToken: string
    userID: string
}

export interface SetUserInfoAction{
    type: typeof SET_USER_INFO
    userName: string
    nickName: string
    provider: string
    image: string
}

export interface UpdateTokenAction {
    type: typeof UPDATE_TOKEN
    accessToken: string
    refreshToken: string
    userID: string
}

export interface SignOutUserAction {
    type: typeof SIGN_OUT
}

export interface LeaveUserAction {
    type: typeof LEAVE_USER
}

export type UserActionTypes = AuthUserAction |
                              SetUserInfoAction |
                              UpdateTokenAction |
                              SignOutUserAction |
                              LeaveUserAction

