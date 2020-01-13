import React, { useState } from 'react'
import { Button, TextField, Typography, Icon } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { useLocation } from 'react-router';
import axios from 'axios';

import { useDispatch, useSelector } from "react-redux";
import {tagState} from '../../Reducer/tagReducer'
import {userState} from '../../Reducer/userReducer'
import {Tag, User} from '../../Action/actionTypes'
import {loadTag, addTag, deleteTag, updateTag} from '../../Action/tagAction'

const tagSelector = (state :any) => {return state.tagReducer}
const userSelector = (state :any) => {return state.userReducer}

const TagFormat = (userID: string, userName: string, tagValue: string):Tag =>{
    return{       
        contributer : {
            userID  : userID,
            userName: userName,
        },
        value       : tagValue,
        youtubeID   : "",
    }
}


export const TagForm = () => {
    const dispatch = useDispatch()
    const tagState:tagState = useSelector(tagSelector)
    const userState:userState = useSelector(userSelector)
    const[TagTextField, setTextField] = useState<string>("")
    const[focusedTag, setFocusedTag] = useState<number>(-1)

    const tags = tagState.tags
    const userID = userState.userID
    const userName = userState.userName

    const changeTextField = (e:any) => {
        setTextField(e.target.value)
    }

    const setNewTag = () => {
        if(!TagTextField) return null
        if(tags.length >= 20){
            window.alert("これ以上タグを追加できません")
            return null
        }
        dispatch(addTag(TagFormat(userID, userName, TagTextField)))
        setTextField("")
    }

    const setToggleTagMenu = (index:number) => {
        setFocusedTag(index)
    }

    const deleteTagAction = () => {
        dispatch(deleteTag(focusedTag))
        setFocusedTag(-1)
    }

    const postNewTag = () => {
        axios.post('http://localhost:3000/api/v1/movies/',{
            youtube_id: "lHQMJhgukJE",
            post_user: "admin",
            uid: "admin_uid",
        }).then(res =>{
            console.log(res.data.status)
        }).catch(error=>{
            window.alert("error")
        })
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