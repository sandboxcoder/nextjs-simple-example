'use client'

import Image from 'next/image';
import React, {Component} from 'react';
import folder from '../app/images/folder-svgrepo-com.svg';

interface StylingProps
{
    className : string;
}

class FolderIcon extends Component<StylingProps>
{
    render() {
        return (
            <div>
                <Image src={folder} alt='folder icon' width = {32} height = {32} className={this.props.className} />
            </div>
        );
    }
}

export default FolderIcon;