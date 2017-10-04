import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

class TreeNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url: props.url,
      name: props.node.name,
      type: props.node.type,
      children: props.node.children ? props.node.children : null,
      showChildren: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  children(props) {
    return (
      props.children !== null ?
      <ul className={`slider ${props.show ? '' : 'hidden'}`}>
        {props.children.map((child, idx) => (
          <li key={idx}>
            <TreeNode node={child} url={props.parent}/>
          </li>
        ))}
      </ul> :
      null
    )
  }

  handleClick() {
    this.setState({ showChildren: !this.state.showChildren });
  }

  render() {
    return (
      <div>
        <Link to={!this.state.showChildren ? `${this.state.url}/${this.state.name}` : `${this.state.url}`}>
          <div onClick={this.handleClick}>{`${this.state.type === 'folder' ? '📁' : '📄'} ${this.state.name}`}</div>
        </Link>
        <this.children
          children={this.state.children}
          show={this.state.showChildren}
          parent={`${this.state.url}/${this.state.name}`}
        />
        <Route path={`:name`} component={TreeNode}/>
      </div>
    )
  }
}

export default TreeNode;