import React, { useState } from 'react'
import { Button, TextField, Typography, Icon } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import { useLocation } from 'react-router';
import axios from 'axios';

export const TagForm = () => {
    const[Tags, setTags] = useState<string[]>([])
    const[TagTextField, setTextField] = useState<string>("")
    const[focusedTag, setFocusedTag] = useState<number>(-1)

    const changeTextField = (e:any) => {
        setTextField(e.target.value)
    }

    const setNewTag = () => {
        if(!TagTextField) return null
        if(Tags.length >= 20){
            window.alert("これ以上タグを追加できません")
            return null
        }
        //Tagsに直接pushで要素を追加すると、画面更新が行われず、うまくいかない。
        //新しい配列を生成し、setTagsで代入して画面更新を行う。
        const newTags = Tags.concat([TagTextField])
        setTextField("")
        setTags(newTags)
    }

    const setToggleTagMenu = (index:number) => {
        setFocusedTag(index)
    }

    const deleteTag = () => {
        const newTags = Tags.slice(0, Tags.length)
        newTags.splice(focusedTag, 1)
        setTags(newTags)
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
            {Tags.map((value, index) => 
                <TagButton props={value} 
                           key={index} 
                           isToggled={(index===focusedTag)} 
                           onClick={() => setToggleTagMenu(index)}
                           deleteTag={() => deleteTag()}/>
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