import React, { useState } from 'react'
import { Button, TextField, Typography, Icon } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { useLocation } from 'react-router';
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import {tagState} from '../../Reducer/tagReducer'
import {userState} from '../../Reducer/userReducer'
import {Tag, User, tagTypes} from '../../Action/actionTypes'
import {loadTag, addTag, deleteTag, updateTag} from '../../Action/tagAction'
import { updateAccessToken } from '../../Action/userAction';
import { refreshAccessToken } from '../../components/modules'

const tagSelector = (state :any) => {return state.tagReducer}
const userSelector = (state :any) => {return state.userReducer}

const TagFormat = (userID: string, userName: string, tagValue: string, youtubeID: string):Tag =>{
    return{       
        contributer : {
            userID  : userID,
            userName: userName,
        },
        value       : tagValue,
        youtubeID   : youtubeID,
    }
}

interface TagFormProps{
    youtubeID: string
    tagType: tagTypes
}

export const TagForm :React.FC<TagFormProps> = ({youtubeID, tagType}) => {
    const dispatch = useDispatch()
    const tagState:tagState = useSelector(tagSelector)
    const userState:userState = useSelector(userSelector)
    const[TagTextField, setTextField] = useState<string>("")
    const[focusedTag, setFocusedTag] = useState<number>(-1)
    const[errorMessage, setError] = useState<string>("")
    let tags: Tag[]

    if(tagType === "movie") tags = tagState.movie.tags
    else if(tagType === "editor") tags = tagState.editor.tags
    else tags = []
    const userID = userState.userID
    const userName = userState.userName

    const changeTextField = (e:any) => {
        setTextField(e.target.value)
    }

    const setNewTag = () => {
        setError("")
        const replacedText = TagTextField.replace(/\s+/g, "")
        if(!replacedText) return null
        if(tags.some(c => c.value === replacedText)){
            setError("重複するタグです")
            return null
        }
        if(tags.length >= 20){
            setError("これ以上タグを追加できません")
            return null
        }
        dispatch(addTag(TagFormat(userID, userName, replacedText, youtubeID), tagType))
        setTextField("")
    }

    const setToggleTagMenu = (index:number) => {
        setFocusedTag(index)
    }

    const deleteTagAction = () => {
        dispatch(deleteTag(focusedTag, tagType))
        setFocusedTag(-1)
    }

    const postNewMovie = (accessToken:string, payload: tagState["movie"] | tagState["editor"]) => {
        return axios.post('http://localhost:3000/api/v1/movies/',{
            access_token: accessToken,
            youtube_id: youtubeID,
            payload: payload
        })
    }
    const postNewTag = async () => {
        let sendData: tagState["movie"] | tagState["editor"]
        if(tagType === "movie") sendData = tagState.movie
        else sendData = tagState.editor
        const accessToken = userState.accessToken
        const postResponce = await postNewMovie(accessToken, sendData)
        console.log(postResponce)
        if(postResponce.data.status === "failed"){
            switch(postResponce.data.error_code){
                case "001"://access token expired
                    console.log(postResponce.data.message)
                    const newAccessToken = await refreshAccessToken(userState.refreshToken)
                    console.log(newAccessToken)
                    if(newAccessToken.data.status === "success"){

                        const repostResponce = await postNewMovie(newAccessToken.data.payload.access_token, sendData)
                        if(repostResponce.data.status === "success"){
                            console.log("success video post!")
                        }
                    }
                    dispatch(updateAccessToken(newAccessToken.data.payload.access_token))
                    break
                case "002":// refresh token expired
                    
                break
            }
        }else if(postResponce.data.status==="success"){
            console.log("success video post!")
        }
    }

    return(
        <>
            {tags.map((value, index) => 
                <TagButton props={value.value} 
                           key={index} 
                           isToggled={(index===focusedTag)} 
                           onClick={() => setToggleTagMenu(index)}
                           deleteTag={() => deleteTagAction()}/>
            )}    
            <TextField onChange={changeTextField} value={TagTextField} />
            <Button variant="outlined" onClick={setNewTag}>
                タグを登録
            </Button>
            
            <Button variant="outlined" onClick={postNewTag}>
                保存
            </Button>

            {errorMessage}
        </>
    )
}

interface TagButtonProps {
    props: string
    isToggled: boolean
    onClick: () => void
    deleteTag: () => void
}

const TagButton:React.FC<TagButtonProps> = ({props, isToggled, onClick, deleteTag}) => {
    const DeleteButton = () => {
        return(
            <>
                <CancelIcon onClick={deleteTag}/>
            </>
        )
    }

    const TagMenu = () => {
        const location = useLocation()
        const MenuStyle = {
            backgroundColor: "#eee",
            borderRadius   : 5,
        }

        if(location.pathname==="/registration") return null
        else return(
            <div style={MenuStyle}>
                <Typography variant={"body1"}>このタグで検索</Typography>
                <Typography variant={"body1"}>このタグをミュート</Typography>
            </div>
        )
    }

    return(
        <>
            <div style={{margin: 6}} >
                <Button variant="contained" onClick={onClick}>
                    {props}
                </Button>
                {isToggled && <DeleteButton/>}
            </div>
            {isToggled && <TagMenu />}
        </>
    )
}