
// 回调子组件传父组件的回调方法
// 看下react的声明周期函数
// import React, { Component } from 'react';
import React from 'react';

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };
  
  class TemperatureInput extends React.Component {
    // 组件实例创建并插入DOM时执行的方法 
    constructor(props) {
      super(props);
      console.log(this.props)
      console.log('Temperature_construct' + this.props.name)      
      this.handleChange = this.handleChange.bind(this);
      this.state = {temperature: ''};
    }
    
    componentWillMount() {
      console.log('Temperature_componentWillMount' + this.props.name)
      // 在组件装载发生之前立即被调用，在在render之前调用，因此此方法中设置
      // state状态不会触发重新渲染，避免在此方法中进行任何其他修改
      // side-effects 或订阅（subscription）
      // 这是在服务器渲染上调用的唯一的生命周期钩子，一般来说建议使用constructor

    }

    // 去render（）
    componentDidMount() {
      // 组件装载后被立即调用，需要初始化DOm节点的应该放在这里，如果需要从远程端点加载数据，这里是进行网络请求的好地方，此方法中设置state状态将触发重新渲染
      console.log('Temperature_componentDidMount' + this.props.name)
    }


    handleChange(e) {
    //   this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    // Updating改变props或state可以触发更新事件，在重新渲染组件时，这些方法将被调用
    componentWillReceiveProps(nextProps) {
      // 已加载组件收到新的参数时调用 子组件能接收到父组件传过来的props然后触发
      // debugger
      console.log('Temperature_componentWillReceiveProps', nextProps)
    }

    shouldComponentUpdate() {
      console.log('Temperature_shouldComponentUpdate')
    }

    componentWillUpdate() {
      console.log('Temperature_componentWillUpdate')      
    }

    // 去render（）

    componentDidUpdate() {
      console.log('Temperature_componentDidUpdate')      
    }

    // Unmounting（卸载）
    // 当一个组件从Dom中删除是，这个方法将被调用
    componentWillUnmount() {
      console.log('Temperature_componentWillUnmount')            
    }
  
    render() {
      console.log('Temperature_render' + this.props.name)      
      //const temperature = this.state.temperature;
      const temperature = this.props.temperature;
 
      const scale = this.props.scale;
      return (
        <fieldset>
          <legend>Enter temperature in {scaleNames[scale]}:</legend>
          <input value={temperature}
                 onChange={this.handleChange} />
        </fieldset>
      );
    }
  }

  export default TemperatureInput;