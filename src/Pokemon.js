import { stringify } from 'postcss';
import React from 'react';
import { useState, useEffect } from 'react';
import Type from './Type';
import Stats from './Stats';
import { Progress } from "@chakra-ui/progress";

const Pokemon = ({ name, json, color, isValid }) => {
    //console.log(json['data']);
    //console.log(color);
    let image = json['data']['sprites']['front_default'];
    let displayName;


    console.log(json.data.stats);

    let types = json['data']['types'].map((type) => <Type type={type['type']['name']} />)
    let stats = json['data']['stats'].map((stat) => {
        if (stat['stat']['name'] !== 'special-attack' && stat['stat']['name'] !== 'special-defense') {
            return (
                <Stats stat={stat['stat']['name']} value={stat['base_stat']} />
            );
        }
    });

    useEffect(() => {
        if (isValid === false) {
            window.alert("Invalid search, please try again!");
        }
    }, [isValid])


    return (
        <div className={`flex flex-col bg-gray-700 h-screen`}>
            <div className={`flex flex-col rounded-b-2xl  ${json['data']['types'][0]['type']['name']}`}>
                <div className='flex justify-center'><img src={image} className='w-36 h-32' /></div>
            </div>
            <div className='flex flex-col mt-2'>
                <h2 className='flex justify-center text-white font-roboto text-lg'>#{json['data']['id']}</h2>
                <div className={`flex flex-row mt-2 ${types.length === 2 ? 'justify-between' : 'justify-center'} ${types.length === 2 ? 'mx-12' : null} `}>{types}</div>
                <h1 className='flex justify-center text-white mt-44 text-2xl '>Base Stats</h1>
                <div className='flex flex-row justify-center'>
                    <div className='flex flex-col text-white font-roboto mt-5'>
                        <h3>HP</h3>
                        <h3>ATK</h3>
                        <h3>DEF</h3>
                        <h3>SPD</h3>
                    </div>
                    <div className='flex flex-col ml-4 self-center text-white'>
                        {stats}
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Pokemon;

