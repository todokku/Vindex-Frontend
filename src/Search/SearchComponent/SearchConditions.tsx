import React from 'react';
import { Typography } from '@material-ui/core';
import {SortSelect} from './SortComponents/SortSelect'
import {queryToWord} from '../../components/functions'
import { useLocation } from 'react-router';

export const SearchConditions = () => {
    const location = useLocation()
    let searchWord = ""
    if (location.search) searchWord = queryToWord(location.search)
    return(
        <>
            <Typography>
               {searchWord} での検索結果
            </Typography>
            <Typography>
                件の動画
            </Typography>
            
            <SortSelect />
        </>
    )
}