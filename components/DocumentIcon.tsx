'use client'

import Image from 'next/image';
import React, {Component} from 'react';
import icon from '../app/images/document-svgrepo-com.svg';

class DocumentIcon extends Component 
{
    render() {
        return (
            <div>
                <Image src={icon} alt='folder icon' width = {32} height = {32}/>
            </div>
        );
    }
}

export default DocumentIcon;