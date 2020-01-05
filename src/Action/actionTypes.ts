export const LOAD_TAG   = 'LOAD_TAG'
export const UPDATE_TAG = 'UPDATE_TAG'
export const DELETE_TAG = 'DELETE_TAG'
export const ADD_TAG    = 'ADD_TAG'
export const SELECT_TAG = 'SELECT_TAG'

export const AUTH_USER = 'AUTH_USER'

export const FETCH_MOVIE = 'FETCH_MOVIE'

export interface User{
    userID: string
    userName: string
}

export interface Tag{
    user        : User
    value       : string
    youtubeID   : string
}

/*
export interface SelectTagAction {
    type: typeof SELECT_TAG
    numSelectTag: number
}
*/

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

export interface AuthUserAction {
    type: typeof AUTH_USER
    user: User
}

export type UserActionTypes = AuthUserAction

export interface FetchMovieAction {
    type        : typeof FETCH_MOVIE
    youtubeID   : string
    title       : string
    channelName : string 
}

export type FetchActionTypes = FetchMovieAction