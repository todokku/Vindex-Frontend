import React, { useState }  from 'react';
import {Select, MenuItem, TextField, InputLabel, FormControl, Input, Button} from '@material-ui/core/'

export const SortSelect = () => {
    const [sortCondition, setSortCondition] = useState<string>("Latest")
    const [searchWord, setSearchWord] = useState<boolean>(true)

    const SelectChange = (event: React.ChangeEvent<{value: unknown}>) => {
        setSortCondition(event.target.value as string)
    }


    return(
        <>    
            <SortSelectField SelectChange={SelectChange} selectValue={sortCondition}/>
        </>
    )
}

interface SelectFieldProps{
    SelectChange: (event: React.ChangeEvent<{value: unknown}>) => void
    selectValue: string
}

export const SortSelectField :React.FC<SelectFieldProps> = ({SelectChange, selectValue}) => {
    return(
        <>
            <FormControl>
                <InputLabel>検索対象</InputLabel>
                <Select onChange={SelectChange} value={selectValue}>
                    <MenuItem value={"Latest"}>新着順</MenuItem>
                    <MenuItem value={"PlayCount"}>再生数順</MenuItem>
                    <MenuItem value={"Oldest"}>古い順</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

