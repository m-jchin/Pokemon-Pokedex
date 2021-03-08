import React from 'react';
import { Progress } from "@chakra-ui/progress";

const Stats = ({ stat, value }) => {
    //console.log(value);
    //console.log(value / 225)
    let percent = (value / 225) * 100;
    console.log(percent);

    let color;
    if (stat === 'hp') {
        color = 'red';
    }
    else if (stat === 'attack') {
        color = 'orange';
    }
    else if (stat === 'defense') {
        color = 'yellow';
    }
    else {
        color = 'pink';
    }

    return (
        <div>

            <div className='flex flex-row w-56' >

                <Progress value={value} size='sm' max={225} colorScheme={color} className='w-full mt-4 ml-2 ' />
            </div>
        </div>
    );
}


export default Stats;