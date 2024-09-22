'use client'

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSquare } from '@fortawesome/free-regular-svg-icons'

const BuyCarComponent = () => {
    const square = <FontAwesomeIcon icon={faSquare} className='h-4 w-4 pt-1 mx-1'/>
    const car = useSelector(state => state.car.car);
    const [ticket, setTicket] = useState([]);
    const [total, setTotal] = useState(0);

    console.log('api',process.env.NEXT_PUBLIC_API_URL, 'production', process.env.NODE_ENV)
    const handleTicketDesciption = () => {
        const ticketDescription = car?.map(i => {
            return {
                name: i.data.name,
                price: i.data.price,
                quantity: i.quantity,
                totalPrice: i.quantity * i.data.price,
            };
        });

        setTicket(ticketDescription);

        const totalCar = ticketDescription?.reduce((acc, item) => acc + item.totalPrice, 0);
        setTotal(totalCar);
    };

    return (
        <div>
            <p
                className='w-28 cursor-pointer text-zinc-200  border-2 border-zinc-200/25 m-2 p-2 bg-zinc-900/75 rounded-md'
                onClick={handleTicketDesciption}
            >
                see ticket
            </p>
            {ticket?.map((i, index) => (
                <div
                    key={index}
                    className='w-5/6 text-zinc-200  border-2 border-zinc-200/25 m-2 p-2 bg-zinc-900/75 rounded-md'
                >
                    <div>name : {i.name}</div>
                    <div>quantity : {i.quantity}</div>
                    <div>price : {i.price}{square}</div>
                    <div>total price : {i.totalPrice}{square}</div>
                </div>
            ))}
            {
                total?
                <div>
                    <div className='md:w-1/4 w-1/2 text-zinc-200  border-2 border-zinc-200/25 m-2 p-2 bg-zinc-900/75 rounded-md'>
                    total car : {total}{square}
                    </div>
                    <div>
                        <button className='relative w-20 left-1/3 text-zinc-200  border-2 border-zinc-200/25 m-2 p-2 bg-zinc-900/75 rounded-md'>
                            buy
                        </button>
                    </div>
                </div>:
                <div></div>
            }
        </div>
    );
};

export default BuyCarComponent;
