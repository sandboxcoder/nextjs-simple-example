'use client'

import Image from 'next/image';
import React, {Component} from 'react';
import icon from '../app/images/chevron-right-dot-svgrepo-com.svg';

class ChevronIcon extends Component 
{
    render() {
        return (
            <div>
                <Image src={icon} alt='folder icon' width = {32} height = {32}/>
            </div>
        );
    }
}

export default ChevronIcon;