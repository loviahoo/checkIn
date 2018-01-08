// context可以构建API使得父组件和子组件进行相互通信
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const BasicExample = () => (
    <Router>
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/topics">Topics</Link></li>
        </ul>
  
        <hr />
  
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
      </div>
    </Router>
  );

//   Router组件向下传递一些信息，每个Link和route都可以沟通回到包含容器Router
//   可以将整个React组件作为props传入

// 在生命周期中使用Context ，如果conTextType在组件中定义，context对象要作为一个额外参数传入：
// constructor(props, context)
// componentWillReceiveProps(nextProps, nextContext)
// shouldComponentUpdate(nextProps, nextState, nextContext)
// componentWillUpdate(nextProps, nextState, nextContext)
// componentDidUpdate(prevProps, prevState, prevContext)