import React from 'react'
import { useNavigate } from 'react-router-dom'

function useLogut() {
    let nav = useNavigate()
    return ()=>{
        sessionStorage.clear()
        nav('/login')
    }
}

export default useLogut