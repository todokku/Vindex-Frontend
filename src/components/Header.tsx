import React, { useEffect } from 'react';
import axios from 'axios'
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { useHistory, useLocation } from 'react-router'
import { useSelector, useDispatch } from 'react-redux';
import { useGetUserInfo } from './useGetUserInfo'

axios.defaults.headers.post["Content-Type"] = "application/x-www-form-urlencoded";


/*
    export interface AxiosResponse<T> {
    data: T;
    status: number;
    statusText: string;
    headers: any;
    config: AxiosRequestConfig;
    }
 */
const Header = () => {
    const history = useHistory()
    const location = useLocation()
    //const userState = useSelector((state:any)=> state.userReducer)
    const [userState, getUserInfo, loading, error] = useGetUserInfo()

    console.log(userState)
    useEffect(()=>{
        getUserInfo()
    }, [userState.accessToken])

    const twitterLogin = () => {
        window.location.href="http://localhost:3000/api/v1/auth/twitter"
    }

    const linkToTop = () => {
        history.push('/'+location.search)
    }

    return(
        <>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" onClick={linkToTop}>
                            Vindex
                    </Typography>

                    <Button onClick={twitterLogin}>
                        TwitterLogin
                    </Button>
                    
                    <Button href="/registration">
                        動画登録
                    </Button>

                    <Button href="/mypage">
                        マイページ
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Header