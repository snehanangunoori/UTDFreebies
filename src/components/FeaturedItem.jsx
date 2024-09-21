import React from 'react'
import {View, StyleSheet, Button, Alert} from 'react';

export default function FeaturedItem(props) {

    function handleClick() {
        alert('Bid!');
    }

    return (
        <div className='p-8'>
            <div className="py-6 px-4 gap-5 h-auto w-full bg-white border-2 border-black rounded-md" >
                <div>
                    <img src = {props.img} className="h-[250px] w-[400px] bg-blue-200 border-2 rounded-md object-cover"/>
                </div>
                <div>
                    <br></br>
                    <h1 className="poppins-bold text-2xl">{props.name}</h1>
                    <p className="poppins text-gray-500"> {props.interested} interested | Listed {props.date} days ago</p>
                    <br></br>
                    <div className='flex gap-10'>
                        <p className='text-emerald-600'>{props.status}</p>
                        <button className='border-2 border-gray-400 bg-slate-200 p-1 rounded-md' onClick={handleClick}>BID</button>
                    </div>
                </div>

            </div>
        
        </div>
    );
}
