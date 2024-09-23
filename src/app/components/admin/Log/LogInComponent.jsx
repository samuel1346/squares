'use client'
import React, { useState, useEffect, useMemo } from 'react';
import { googleSignIn, logOut, creatAccount, logIn } from './signComponent'
import { faEnvelope, faBars, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form';
import { auth } from '../../../../../firebaseConfig';
import Link from 'next/link';

const LogInComponent = () => {
    const handleSignIn =()=>{
            googleSignIn()
        }
        const eyesClosed = <FontAwesomeIcon icon={faEyeSlash} />
        const eyesOpened = <FontAwesomeIcon icon={faEye} />
        const googleIcon = <FontAwesomeIcon icon={faGoogle}/>
        const [seePassword, setSeePassword] = useState(true);
        const [passwordToText, setPasswordToText] = useState('password');
        const [wrongLog, setWrongLog] = useState(true)
        
        const { register, handleSubmit} = useForm();
        const onSubmit = async(data) => {
            console.log(data.mail, data.password)
            await logIn(data.mail, data.password)
            const wrongSubmit = ()=>{
                !auth?.currentUser?.email? setWrongLog(false): setWrongLog(true)
            }
            wrongSubmit()
        }
        
        const handlePasswordVisibility = () => {
            setSeePassword(!seePassword);
            setPasswordToText(seePassword ? 'text' : 'password');
        };
        
        
        const handleClick = (e) => {
            e.preventDefault();
            handlePasswordVisibility();
        };
    
        console.log(auth?.currentUser?.email, 'user')
  return (
    <div className='flex flex-col justify-center items-center m-2 p-2'>
        <div>

        </div>
        <form onSubmit={handleSubmit(onSubmit)}  
        className={`flex flex-col items-center *:shadow-sm hover:*:shadow-zinc-200/80
        *:my-4 py-2 *:px-2 *:rounded-md *:text-zinc-200 *:bg-zinc-900/80`}
        >
            <input type='text' placeholder='User name'  {...register('username')}/>
            <input type='email' className={`${wrongLog?'':'border-red-700 border-2'}`} placeholder='Email'  {...register('mail')}/>
            <div className={`${wrongLog?'':'border-red-700 border-2'} *:text-zinc-200 *:bg-zinc-900/50`}>
            <input 
                type={passwordToText}
                placeholder='password'
                {...register('password')}
                />
            <button onClick={handleClick}>{seePassword?eyesClosed: eyesOpened}</button>
            </div>
            <input className='cursor-pointer' type="submit" value='Sign in' />
        </form>
        <div
        className='*:text-zinc-200 *:bg-zinc-900/80 cursor-pointer
        *:shadow-sm hover:*:shadow-zinc-200/80 m-2 p-2 *:px-2 flex flex-row justify-center *:rounded-md'
        >
            <p>
                sign with {googleIcon}
            </p>
        </div>
        <div
        className='*:text-zinc-200 *:bg-zinc-900/80 cursor-pointer
         m-2 p-2 *:px-2 flex flex-row justify-center *:rounded-md'>
            <p >
                don&apos;t have account?
            </p>
            <Link href={`/admin/creatAccount`}
            className='shadow-sm hover:shadow-zinc-200/80'
            >
                Creat account
            </Link>
        </div>
    </div>
  )
}

export default LogInComponent