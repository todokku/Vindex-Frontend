import React, { useState } from 'react'
import { Button, TextField, Typography } from '@material-ui/core';
import { useLocation } from 'react-router';

export const TagForm = () => {
    const[Tags, setTags] = useState<string[]>([])
    const[TagTextField, setTextField] = useState<string>("")
    const[toggleTag, setToggleTag] = useState<number>(-1)

    const changeTextField = (e:any) => {
        setTextField(e.target.value)
    }

    const setNewTag = () => {
        if(!TagTextField) return null
        //Tagsに直接pushで要素を追加すると、画面更新が行われず、うまくいかない。
        //新しい配列を生成し、setTagsで代入して画面更新を行う。
        const newTags = Tags.concat([TagTextField])
        setTextField("")
        setTags(newTags)
    }

    const setToggleTagMenu = (index:number) => {
        setToggleTag(index)
    }

    return(
        <>
            {Tags.map((value, index) => 
                <TagButton props={value} 
                           key={index} 
                           isToggled={(index==toggleTag)} 
                           onClick={() => setToggleTagMenu(index)}/>
            )}    
            <TextField onChange={changeTextField} value={TagTextField} />
            <Button variant="outlined" onClick={setNewTag}>
                新しいタグを入力
            </Button>
            
            <Button variant="outlined">
                保存
            </Button>
        </>
    )
}

interface TagButtonProps {
    props: string
    isToggled: boolean
    onClick: () => void
}

const TagButton:React.FC<TagButtonProps> = ({props, isToggled, onClick}) => {
    const DeleteButton = () => {
        return(
            <>
            ×
            </>
        )
    }

    const TagMenu = () => {
        const location = useLocation()
        console.log(location)
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
                {isToggled && <DeleteButton />}
            </div>
            {isToggled && <TagMenu />}
        </>
    )
}