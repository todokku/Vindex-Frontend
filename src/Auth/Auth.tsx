import React from 'react'
import { Redirect, useLocation } from "react-router"
import qs from 'query-string'
import { useDispatch } from 'react-redux';
import { authUser, setUserInfo } from '../Action/userAction'
import { decodeJwt } from '../components/modules'

const userSelector = (state:any) => state.userReducer

export const Auth = () =>{
    const dispatch = useDispatch()
    const location = useLocation()
    const userTokens = qs.parse(location.search)
    if(typeof userTokens.access_token !== 'string' || 
       typeof userTokens.refresh_token !== 'string') throw new Error('undefined token')
    
    const userInfo = decodeJwt(userTokens.access_token) 
    if(!userInfo) throw new Error('undefined userID')

    dispatch(authUser(userTokens.access_token,
                      userTokens.refresh_token,
                      userInfo.uid,
                      userInfo.provider,
                      userInfo.exp))


    return (<Redirect to={'/'} />)
}