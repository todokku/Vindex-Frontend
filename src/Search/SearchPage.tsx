import React from 'react';
import { SearchBox } from '../components/SearchBox'
import { SearchConditions } from './SearchComponent/SearchConditions'
import { SearchResults } from './SearchComponent/SearchResults'

import Header from '../components/Header'
import { Container, Grid, Box } from '@material-ui/core';
import { useParams } from 'react-router';

export const Search: React.FC = () => {
    const {queryString} = useParams()
    console.log(queryString)
    return(
        <>
            <SearchBox />
            <SearchConditions />
            <SearchResults />
        </>
    )
}