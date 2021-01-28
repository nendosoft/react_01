import React from 'react'
import ReactDOM from 'react-dom'
import Tree from 'react-animated-tree'
import './styles.css'

const treeStyles = {
  // position: 'absolute',
  top: 40,
  left: 40,
  color: 'white',
  fill: 'white',
  width: '100%'
}

const typeStyles = {
  fontSize: '2em',
  // verticalAlign: 'middle'
}

export const TreeView02: React.FC = () => {
  return (
  <Tree content="main" type="ITEM" canHide open>
    <Tree content="hello" type={<span style={typeStyles}>🙀</span>} canHide />
    <Tree content="subtree with children" canHide>
      <Tree content="hello" />
      <Tree content="sub-subtree with children">
        <Tree content="child 1"  />
        <Tree content="child 2"  />
        <Tree content="child 3"  />
      </Tree>
      <Tree content="hello" />
    </Tree>
    <Tree content="hello" canHide />
    <Tree content="hello" canHide />
  </Tree>
  );
  }

// ReactDOM.render(<App />, document.getElementById('root'))
