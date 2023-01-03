import React from "react";
import { useRef, useState, useEffect } from "react";

export const Login = () => {
    const userRef = useRef()
    const errRef = useRef()

    const [user, setUser] = useState('')
    const [pwd, setPwd] = useState('')
    const [errMsg, sewtErrMsg] = useState('')
    const [success, setSuccess] = useState('')

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        sewtErrMsg('')
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault()
    }
    return (
        
    )
}