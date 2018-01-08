import React, { Component } from 'react';
// import { Link , hashHistory} from 'react-router'
import logo from './logo.svg';
import './App.css';
// import FatherToChild from './FatherToChild'
// import MessageList from './FatherToChild';
import Calculator from './Calculator';
// import MessageList from './ContextTest';

// 状态提升
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        data: {id:3,name:'sam',age:36}
                  // data: JSON.stringify({id:3,name:'sam',age:36})
                  // path : `/user/${data}`
                };
  }

  jumpClick(path){  
    // alert(path)
    console.log(path)
    // hashHistory.push("/messages/sam");
    // hashHistory.push(path);
  }

  render() {
    const {data} = this.state
    // const path = `/messages/${data}`
    // const path = {
    //   pathname: '/messages',
    //   // query: data
    //   state: data
    // }

    return (
      <div className="App">
        
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         {/*<FatherToChild messages={[{text:'测试'}, {text:"props"}, {text:'从上往下传值'}]}/>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
          <li><Link to="/inbox/messages/lovia">Inbox</Link></li> 
          <li><Link to={path}>跨页面传值</Link></li>
          <div onClick={()=>{this.jumpClick(path)}}>hashHistory跳转</div>            
        </ul> */}
         {/* {this.props.children} */}

        {/* <MessageList messages={[{text:'测试'}, {text:"props"}, {text:'从上往下传值'}]}/> */}
        <Calculator name='cal1' key="one"/>
        {/* <Calculator name='cal2'/>         */}
        
      </div>
    )
  }
}
export default App;
