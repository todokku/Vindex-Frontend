import React from 'react';
import { Typography } from '@material-ui/core';
import {SortSelect} from './SortComponents/SortSelect'

export const SearchConditions = () => {
    return(
        <>
            <Typography>
                での検索結果
            </Typography>
            <Typography>
                件の動画
            </Typography>
            
            <SortSelect />
        </>
    )
}