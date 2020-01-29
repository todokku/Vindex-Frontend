export const LOAD_TAG   = 'LOAD_TAG'
export const UPDATE_TAG = 'UPDATE_TAG'
export const DELETE_TAG = 'DELETE_TAG'
export const ADD_TAG    = 'ADD_TAG'

export const FETCH_MOVIE = 'FETCH_MOVIE'
export const ADD_EDIT_TAG = 'ADD_EDIT_TAG'
export const DELETE_EDIT_TAG = 'DELETE_EDIT_TAG'
export const POST_EDIT_TAG = 'POST_EDIT_TAG'

export const AUTH_USER = 'AUTH_USER'
export const UPDATE_ACCESS_TOKEN = 'UPDATE_ACCESS_TOKEN'
export const UPDATE_TOKENS = 'UPDATE_TOKENS'
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

export type tagTypes = "movie" | "editor"

export interface LoadTagAction {
    type: typeof LOAD_TAG
    loadTags    : Tag[]
    youtubeID   : string
    tagType     : tagTypes
}

export interface UpdateTagAction {
    type: typeof UPDATE_TAG
    newTags: Tag[]
    tagType: tagTypes
}

export interface DeleteTagAction {
    type        : typeof DELETE_TAG
    numDeleteTag: number
    tagType     : tagTypes
}

export interface AddTagAction {
    type    : typeof ADD_TAG
    newTag  : Tag
    tagType : tagTypes
}

export interface FetchMovieAction {
    type        : typeof FETCH_MOVIE
    youtubeID   : string,
    title       : string,
    channelName : string,
    url         : string,
}

export type TagActionTypes = LoadTagAction   |
                             UpdateTagAction |
                             DeleteTagAction |
                             AddTagAction   |
                             FetchMovieAction

export interface AuthUserAction {
    type: typeof AUTH_USER
    accessToken: string
    refreshToken: string
    userID: string
    provider: string
    accessExp: number
}

export interface SetUserInfoAction{
    type: typeof SET_USER_INFO
    userName: string
    nickName: string
    image: string
}

export interface UpdateAccessTokenAction {
    type: typeof UPDATE_ACCESS_TOKEN
    accessToken: string
    accessExp: number
}

export interface UpdateTokensAction {
    type: typeof UPDATE_TOKENS
    accessToken: string
    refreshToken: string
    accessExp: number
}

export interface SignOutUserAction {
    type: typeof SIGN_OUT
}

export interface LeaveUserAction {
    type: typeof LEAVE_USER
}

export type UserActionTypes = AuthUserAction |
                              SetUserInfoAction |
                              UpdateAccessTokenAction|
                              UpdateTokensAction |
                              SignOutUserAction |
                              LeaveUserAction
 