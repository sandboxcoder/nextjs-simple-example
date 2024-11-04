'use client';

import React from 'react';
import { useState } from 'react';
import ChevronRightIcon from './ChevronIcon';
import DocumentIcon from './DocumentIcon';
import FolderIcon from './FolderIcon';

export type Node = {
    name: string;
    nodes?: Node[];
};

export function FileSystemItem({ node }: { node: Node }) {
    let [isOpen, setIsOpen] = useState(false);
    return (
        <li key={node.name}>
        <span className="flex items-center gap-1.5 py-1">
            {node.nodes && node.nodes.length > 0 && (
            <button onClick={() => setIsOpen(!isOpen)} className="p-1 -m-1">
                <ChevronRightIcon
                className={`size-4 text-gray-500 ${isOpen ? 'rotate-90' : ''}`}
                />
            </button>
            )}

            {node.nodes ? (
            <FolderIcon
                className={`size-6 text-sky-500 ${
                node.nodes.length === 0 ? 'ml-[22px]' : ''
                }`}
            />
            ) : (
            <DocumentIcon className="ml-[22px] size-6 text-gray-900" />
            )}
            {node.name}
        </span>

        {isOpen && (
            <ul className="pl-6">
            {node.nodes?.map((node) => (
                <FileSystemItem node={node} key={node.name} />
            ))}
            </ul>
        )}
        </li>
    );
}

export default FileSystemItem;