// import React, { Component } from 'react';
import React from 'react';
import TemperatureInput from './TemperatureInput';

// ES6的 class来定义一个组件 app组件
// 在React中，共享state状态是通过将其移动到需要它的组件的最接近的父组件来实现的，这成为状态提升lifting state up，我们将从temperatureInput中移除相关状态本地状态，并将其移动到calculator中，如果calcutor拥有共享状态，那么它将成为两个输入当前温度的单一数据来源，指示具有批次一直的值，由于两个TemperatureTnput组件的props都来自同一个父级calcutor组件，两个输入将始终保持同步

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
      return <p>The water would boil.</p>;
    }
    return <p>The water would not boil.</p>;
  }
  
  function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
  }
  
  function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
  }
  function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
      return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
  }
  // 温度计判断
  // function BiolingVerdict(props) {
  //   if(props.celsius >=  100){
  //     return <p>The water would boil.</p>
  //   }
  //   return <p>The water would not boil</p>
  // }
  class Calculator extends React.Component {
    constructor(props){
      super(props);
      console.log(this.props)
      console.log(this.props.key)
      console.log(this.props.id)
      console.log('Calculator_constructor' + this.props.name)             
      this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
      this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
      this.state = {temperature: '', scale: 'c'};
    }

    componentWillMount() {
      console.log('Calculator_componentWillMount' + this.props.name)
      // 在组件装载发生之前立即被调用，在在render之前调用，因此此方法中设置
      // state状态不会触发重新渲染，避免在此方法中进行任何其他修改
      // side-effects 或订阅（subscription）
      // 这是在服务器渲染上调用的唯一的生命周期钩子，一般来说建议使用constructor

    }
    componentDidMount() {
      // 组件装载后被立即调用，需要初始化DOm节点的应该放在这里，如果需要从远程端点加载数据，这里是进行网络请求的好地方，此方法中设置state状态将触发重新渲染
      console.log('Calculator_componentDidMount' + this.props.name)
    }

  
    handleCelsiusChange(temperature){
      this.setState({scale: 'c', temperature});
    }
  
    handleFahrenheitChange(temperature) {
      this.setState({scale: 'f', temperature});
    }
    
    componentWillReceiveProps(nextProps) {
      // 已加载组件收到新的参数时调用 这里的还父组件，没有接收到新参数
      console.log('Calculator_componentWillReceiveProps', nextProps)
    }
    
    render() {
      console.log('Calculator_render' + this.props.name)      
      const scale = this.state.scale;
      const temperature = this.state.temperature;
      const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
      const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
      return (
        <div>
          <TemperatureInput
            name="Tem1" 
            scale="c"
            temperature={celsius}
            onTemperatureChange={this.handleCelsiusChange} />
          <TemperatureInput 
            name="Tem2"             
            scale="f"
            temperature={fahrenheit}
            onTemperatureChange={this.handleFahrenheitChange}
          />
          <BoilingVerdict
            celsius={parseFloat(celsius)} />
        </div>
      );
    }
  }

  export default Calculator;