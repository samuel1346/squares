'use client'
import React, { useState, useEffect, useMemo } from 'react';
import {creatAccount} from './signComponent'
import { faEnvelope, faBars, faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useForm } from 'react-hook-form';
import { auth } from '../../../../../firebaseConfig';
import Link from 'next/link';

const CreatAccountComponent = () => {
        const eyesClosed = <FontAwesomeIcon icon={faEyeSlash} />
        const eyesOpened = <FontAwesomeIcon icon={faEye} />
        const [seePassword, setSeePassword] = useState(true);
        const [passwordToText, setPasswordToText] = useState('password');
        
        const { register, handleSubmit} = useForm();
        const onSubmit = (data) => {
            console.log(data.mail, data.password)
            creatAccount(data.mail, data.password)
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
        <input type='email' placeholder='Email'  {...register('mail')}/>
        <div className='*:text-zinc-200 *:bg-zinc-900/50'>
        <input 
            type={passwordToText}
            placeholder='password'
            {...register('password')}
            />
        <button onClick={handleClick}>{seePassword?eyesClosed: eyesOpened}</button>
        </div>
        <input className='cursor-pointer' type="submit" value='Creat account' />
    </form>
    </div>
  )
}

export default CreatAccountComponent