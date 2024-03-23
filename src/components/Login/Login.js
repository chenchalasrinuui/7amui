"use client"

import React, { useState, useRef } from 'react'
import styles from './Login.module.css'
import { Input } from '@/common/reusableComponents/Input'
import inputControls from './configuration.json'
import Link from 'next/link'
import { validateInputControl, validteForm } from '@/common/validations/validations'

const Login = () => {
    const [inputControlsArr, setInputControlsArr] = useState(inputControls)
    const ref = useRef()
    const handleLogin = () => {
        const [isInvalidForm, dataObj] = validteForm(inputControlsArr, setInputControlsArr)
        if (isInvalidForm) {
            return;
        }
        console.log(dataObj)
        alert("send request to the server")
    }
    const handleChange = (eve) => {
        validateInputControl(eve, inputControlsArr, setInputControlsArr)
    }
    return (
        <div className='container-fluid'>
            <h3 className='text-center my-3'>Login</h3>
            {
                inputControlsArr.map((obj, ind, oa) => {
                    return <Input key={`Input_${ind}`} {...obj} handleChange={handleChange} />
                })
            }

            <div className='row'>
                <div className='offset-sm-5 col-sm-7'>
                    <button onClick={handleLogin} className='btn btn-primary me-3'>Login</button>
                    <Link href="/register">To Register</Link>
                </div>
            </div>

        </div>
    )
}

export default Login
