'use client'

import React, {Component} from 'react';

type MyProps = {
  // using `interface` is also ok
  message: string;
};
type MyState = {
  count: number; // like this
};
class SampleComponent extends Component<MyProps, MyState>{
  constructor(props: MyProps)
  {
    super(props);
  }
  render() {
    return (
      <div>
        Test component {this.props.message}
      </div>
    );
  }
}

export default SampleComponent;