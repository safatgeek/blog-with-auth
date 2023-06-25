'use client'

import React, { FormEvent, useState } from 'react'
import Input from '../../components/Input'
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import {signIn} from 'next-auth/react'

interface InitialStateProps {
    email:string;
    password:string;
}

const initialState:InitialStateProps = {
    email:'',
    password:''
}

export default function page() {
     const [state,setState] = useState(initialState)
     const router = useRouter()

     const handleChange = (e:any) => {
        setState({...state, [e.target.name]: e.target.value})
     }

     const onSubmit = (event:FormEvent) => {
        event.preventDefault()
        signIn('credentials', {
            ...state,redirect:false,
        })
        .then((callback) => {

            if(callback?.ok) {
                router.refresh()
            }

            if(callback?.error) {
                throw new Error('Wrong credentials')
            }
        })

        router.push('/')
     }
  return (
    <form className=' text-center' onSubmit={onSubmit}>
        <div className=' flex flex-col justify-center h-[450px] w-[350px] mx-auto gap-2 '>
            <Input placeholder='email' name='email' id='email' type='email' onChange={handleChange} value={state.email} />
            <Input placeholder='password' name='password' id='password' type='password' onChange={handleChange} value={state.password} />
            <button type='submit'>Sign in</button>
        </div>

        <div>
            <div>Haven't you got any account yet ? <Link href='/register'>Sign up</Link></div>
        </div>

    </form>
  )
}
