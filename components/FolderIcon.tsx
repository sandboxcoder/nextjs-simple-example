'use client'

import Image from 'next/image';
import React, {Component} from 'react';
import folder from '../app/images/folder-svgrepo-com.svg';

console.log("FOLDER:" + JSON.stringify(folder));

const FolderIcon = () => {
    return (
        <div>
            <Image src={folder} alt='folder icon' width = {32} height = {32}/>
        </div>
    );
}

export default FolderIcon;