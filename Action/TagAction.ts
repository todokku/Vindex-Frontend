import {Tag, LOAD_TAG, UPDATE_TAG, DELETE_TAG, ADD_TAG, TagActionTypes} from './actionTypes'

export function loadTag(youtubeID:string, valueTags: Tag[]): TagActionTypes{
    return {
        type        : LOAD_TAG,
        loadTags    : valueTags,
        youtubeID   : youtubeID,
    }
}

export function addTag(valueTag: Tag): TagActionTypes{
    return {
        type    : ADD_TAG,
        newTag  : valueTag,
    }
}

export function deleteTag(numDeleteTag: number): TagActionTypes{
    return {
        type            : DELETE_TAG,
        numDeleteTag    : numDeleteTag
    }
}

export function updateTag(newTags: Tag[]): TagActionTypes{
    return {
        type    : UPDATE_TAG,
        newTags : newTags
    }
}