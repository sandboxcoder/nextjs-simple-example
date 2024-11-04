'use client'

import Image from 'next/image';
import React, {Component} from 'react';
import icon from '../app/images/chevron-right-dot-svgrepo-com.svg';

interface StylingProps
{
    className : string;
}

class ChevronIcon extends Component<StylingProps>
{
    render() {
        return (
            <div>
                <Image src={icon} alt='folder icon' width = {32} height = {32} className={this.props.className}/>
            </div>
        );
    }
}

export default ChevronIcon;