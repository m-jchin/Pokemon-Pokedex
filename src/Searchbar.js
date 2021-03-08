import React from 'react';
import { useState, useEffect } from 'react'

const Searchbar = ({ setPokemon }) => {
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        setPokemon(name.toLowerCase());
        setName('');
    }

    const handleSearch = (e) => {
        e.preventDefault();
        setName(e.target.value);
    }


    return (
        <div className='flex flex-row justify-center bg-white border-2 rounded-t-2xl w-9/12 h-17 pb-2 pt-2'>
            <form className='flex' onSubmit={(e) => handleSubmit(e)}>
                <input className='rounded-full bg-black text-center text-white mt-1' required placeholder='Search..' type="text" value={name} onChange={(e) => handleSearch(e)} />
                <button type='submit' className=''>
                    <img src='./poke.png' className='w-10 h-10 mt-1' />
                </button>
            </form>
        </div>
    );
}

export default Searchbar;