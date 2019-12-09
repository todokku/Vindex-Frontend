import React, { useState } from 'react';
import {Select, MenuItem, TextField, InputLabel, FormControl, Input, Button} from '@material-ui/core/'
import { textAlign } from '@material-ui/system';

export const SearchBox = () => {
    const [searchTarget, setSearchTarget] = useState<string>("Tag")
    const [searchWord, setSearchWord] = useState<string>("")

    const SelectChange = (event: React.ChangeEvent<{value: unknown}>) => {
        setSearchTarget(event.target.value as string)
    }

    const TextFieldChange = (event: React.ChangeEvent<{value: string}>) => {
        setSearchWord(event.target.value)
    }
    
    const search = () => {
        console.log(searchWord, searchTarget)
    }

    return(
        <>    
            <SelectField SelectChange={SelectChange} selectValue={searchTarget}/>
            <InputField TextFieldChange={TextFieldChange} textValue={searchWord} />
            <SearchButton onClick={search}/>
        </>
    )
}

interface InputFieldProps{
    TextFieldChange: (event: React.ChangeEvent<{value: string}>) => void
    textValue    : string
}

const SelectField:React.FC<SelectFieldProps> = ({SelectChange, selectValue}) => {
    return(
        <>    
            <FormControl>
                <InputLabel>検索対象</InputLabel>
                <Select onChange={SelectChange} value={selectValue}>
                    <MenuItem value={"Tag"} id="Search-SelectMenu-Tag">タグ</MenuItem>
                    <MenuItem value={"Keyword"} id="Search-SelectMenu-Keyword">キーワード</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}


interface SelectFieldProps{
    SelectChange: (event: React.ChangeEvent<{value: unknown}>) => void
    selectValue: string
}

const InputField:React.FC<InputFieldProps> = ({TextFieldChange, textValue}) => {
    return(
        <>    
            <Input onChange={TextFieldChange} value={textValue} id="Search-TextField" />
        </>
    )
}

const SearchButton:React.FC<{onClick:()=>void}> = ({onClick}) => {
    return(
        <>
            <Button onClick={onClick} id="Search-Button">
                検索
            </Button>
        </>
    )
}
