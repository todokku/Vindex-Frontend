export const LOAD_TAG   = 'LOAD_TAG'
export const UPDATE_TAG = 'UPDATE_TAG'
export const DELETE_TAG = 'DELETE_TAG'
export const ADD_TAG    = 'ADD_TAG'

export interface User{
    userID: string
    userName: string
}

export interface Tag{
    user        : User
    value       : string
    timestump   : string
    youtubeID   : string
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