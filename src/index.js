import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory} from 'react-router'
import './index.css';
import App from './App';
import About from './About'
import Inbox from './Inbox'
import Message from './Message'
import registerServiceWorker from './registerServiceWorker';


  
//   const element = <Welcome name="Sara" />;
//   ReactDOM.render(
//     element,
//     document.getElementById('root')
//   );

ReactDOM.render(
     

(<Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="/about" component={About} />
      <Route path="/inbox" component={Inbox}>
        {/* <Route path="/messages/:id" component={Message} /> */}
        <Route path="/messages" component={Message} />        
      </Route>
    </Route>
</Router>),

document.getElementById('root'));
registerServiceWorker();
{/* <App />, */}
