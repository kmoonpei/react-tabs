import React, { Component } from 'react'
import { render } from 'react-dom'

import Example from '../../src'

class Demo extends Component {
  render() {
    return <div>
      <Example
        current_position={2}
        titles={['tit0', 'tit1', 'tit2', 'tit3']}
        contanierStyle={{ width: 300 }}
        currentBgColor={'#a3c'}
        list={[[0, 0, 0], [1, 1, 1], [2, 2, 2, 2, 2, 2, 2, 2, 2], [3, 3, 3, 3]]} />
    </div>
  }
}

render(<Demo />, document.querySelector('#demo'))
