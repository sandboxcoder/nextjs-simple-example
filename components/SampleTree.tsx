'use client'

import React, { Component } from 'react';

interface TreeNode<T> {
  left?: TreeNode<T>;
  right?: TreeNode<T>;
  data: T;
}

let tree: TreeNode<string> = {
  data: "b",
  left: {
      data: "a"
  },
  right: {
      data: "c"
  }
};

class SampleTree extends Component
{
  render() {
    return (
      <div>
        {tree.data}
      </div>
    );
  }
}

export default SampleTree;