// import React, { Component } from 'react';
import React from 'react';

class Button extends React.Component {
    render() {
      return (
        <button style={{background: this.props.color}}>
          {this.props.children}
        </button>
      );
    }
  }
  
  class Message extends React.Component {
    render() {
      return (
        <div>
          {this.props.text} <Button color={this.props.color}>Delete</Button>
        </div>
      );
    }
  }
  
  class MessageList extends React.Component {
    render() {
      const color = "purple";
      const children = this.props.messages.map((message) =>
        <Message text={message.text} color={color} />
      );
      return <div>
                <h1>父组件往子组件传值</h1>
                {children}
             </div>;
    }
  }

  export default MessageList
