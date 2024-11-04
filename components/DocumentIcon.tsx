'use client'

import Image from 'next/image';
import React, {Component} from 'react';
import icon from '../app/images/document-svgrepo-com.svg';

interface StylingProps {
    className: string | undefined;
  };

class DocumentIcon extends Component<StylingProps>
{
    render() {
        return (
            <div>
                <Image src={icon} alt='folder icon' width = {32} height = {32} className={this.props.className}/>
            </div>
        );
    }
}

export default DocumentIcon;