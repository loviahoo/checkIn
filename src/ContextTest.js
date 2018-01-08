import React, { Component } from 'react';
const PropTypes = require('prop-types');

// 通过将childContextType和getChildContext添加到MessageList(context提供者)，React自动地向下传递信息，并且子树中的任何组件都可以通过contextTypes去访问它，如果contextType没有定义，context将会是一个空对象 直接this.context进行调用

class Button extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.contextTypes = {
    //         color: PropTypes.string
    //       };
    //   }
    
  render() {
    return (
      <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
    );
  }
}

Button.contextTypes = {
  color: PropTypes.string
};

class Message extends React.Component {
  render() {
    return (
      <div>
        {this.props.text} <Button>Delete</Button>
      </div>
    );
  }
}

class MessageList extends React.Component {
    // constructor(props){
    //     super(props);
    //     this.childContextTypes = {
    //         color: PropTypes.string
    //       };
    //   }

    
  getChildContext() {
    return {color: "purple"};
  }

  render() {
    const children = this.props.messages.map((message) =>
      <Message text={message.text} />
    );
    return <div>{children}</div>;
  }
}

MessageList.childContextTypes = {
  color: PropTypes.string
};

export default MessageList