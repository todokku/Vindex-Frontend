import React from 'react'
import { Redirect } from 'react-router';
import { useSelector } from 'react-redux';

const loginSelector = (state:any) => state.userReducer

const RedirectAuthedUser = () =>{
    const userState = useSelector(loginSelector)
    if(userState.authenticated){
        return(<Redirect to='/'/>)
    }
    else{
        return null
    }
}

export default RedirectAuthedUser