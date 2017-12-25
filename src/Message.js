import React from 'react';

class Message extends React.Component {
  render() {
      console.log(this.props)
    return (
        // <h3>Message {this.props.params.id}</h3>
        // <h3>Message {this.props.location.query.age}</h3>   
        <h3>Message {this.props.location.state.age}</h3>                     
    );
  }
}

export default Message