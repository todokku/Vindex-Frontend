import React from 'react'
import { Redirect, useLocation } from "react-router"
import qs from 'query-string'
import { useSelector, useDispatch } from 'react-redux';

const userSelector = (state:any) => state.userReducer

export const Auth = () =>{
    const location = useLocation()
    const userTokens = qs.parse(location.search)
    const userState = useSelector(userSelector)
    let userInfo = ''     

    const decodeJwt = (token:string) => {
        const base64Url = token.split('.')[1]
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/')
        return JSON.parse(decodeURIComponent(escape(window.atob(base64)))); 
    }

    if(typeof userTokens.access_token === 'string' ){
        userInfo = decodeJwt(userTokens.access_token)
    }

    console.log({userTokens})
    console.log({userInfo})

    

    return null
    //return (<Redirect to={'/'} />)
}