import React from 'react';

import TreeNode from './TreeNode';
import dir from '../input/dir';

class App extends React.Component {
  render() {
    return (
      <ul>
        <li>
          <TreeNode node={dir[0]} url=""/>
        </li>
      </ul>
    )
  }
}

export default App;