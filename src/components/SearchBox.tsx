import React, { useState, useEffect } from 'react';
import {Select, MenuItem, TextField, InputLabel, FormControl, Input, Button} from '@material-ui/core/'
import { textAlign } from '@material-ui/system';
import queryString from 'query-string'
import { useHistory, useLocation } from 'react-router';
import { queryToWord, queryToScope } from './functions'

export const SearchBox = () => { 
    const history = useHistory()
    const location = useLocation()
    let initialWord  :string = ""
    let initialScope :string = "Tag"
    if (location.search) {
        initialWord  = queryToWord(location.search)
        initialScope = queryToScope(location.search)
    }

    const [searchScope, setSearchScope] = useState<string>(initialScope)
    const [searchWord, setSearchWord] = useState<string>(initialWord)

    useEffect(() => {//画面遷移したときにquery parameterを反映する
        setSearchWord(initialWord)
    }, [location.search])

    const SelectChange = (event: React.ChangeEvent<{value: unknown}>) => {
        setSearchScope(event.target.value as string)
    }

    const TextFieldChange = (event: React.ChangeEvent<{value: string}>) => {
        setSearchWord(event.target.value)
    }
    
    const search = () => {
        const queryObject = {
            q: searchWord.split(/\s+/),                                                       
            t: searchScope                                                                                         
        }
        const queryUrl:string = queryString.stringify(queryObject, {arrayFormat: 'comma'})
        history.push('/search?' + queryUrl)
    }

    return(
        <>    
            <SelectField SelectChange={SelectChange} selectValue={searchScope}/>
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
