import { useState, useCallback, } from "react";
import { useSelector, useDispatch } from "react-redux";
import Axios from "axios";
import { setUserInfo } from "../Action/userAction";
import { fetchMovie } from '../Action/tagAction'

export const useGetUserInfo = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const userState = useSelector((state:any) => state.userReducer)
    const dispatch = useDispatch()
    const accessToken = userState.accessToken

    const getUserInfo = useCallback(async () => {
        if(!userState.authenticated) return null
        setLoading(true)
        try{
            const result = await Axios.get("http://localhost:3000/api/v1/users/",{
                params: {
                    access_token: accessToken
                }})
            setLoading(false)
            if(result.data.status = "success"){
                console.log({result})
                const userName = result.data.payload.userName
                const nickName = result.data.payload.nickName
                const image = result.data.payload.image
                dispatch(setUserInfo(userName, nickName, image))
            }
            else throw new Error(result.data.payload.error)
        }catch(error){
            setLoading(false)
            const {status, statusText} = error.response
            console.log(status, statusText)
            setError(statusText)
        }
    }, [])
    return [userState, getUserInfo, loading, error]
}

export const useMovieInfo = () =>{
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const userState = useSelector((state:any) => state.userReducer)
    const movieState = useSelector((state:any) => state.movieFetchReducer)
    const dispatch = useDispatch()

    const getMovieInfo = useCallback(async (youtubeID: string, youtubeUrl :string) => {
        if(!userState.authenticated || !youtubeID) return null
        const fetchURL: string = "http://localhost:3000/api/v1/movie_fetch/"+youtubeID
        setLoading(true)

        try{
            const result = await Axios.get(fetchURL)
            setLoading(false)
            if(result.data.status = "success"){
                console.log({result})
                dispatch(fetchMovie(youtubeID, result.data.payload.title, result.data.payload.channelName, youtubeUrl))
            }
        }catch(error){
            setLoading(false)
            const {status, statusText} = error.response
            console.log(status, statusText)
            setError(statusText)
        }
    }, [loading, error, userState])
    return [movieState, getMovieInfo, loading, error]
}