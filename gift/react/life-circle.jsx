/*
* @Author: Rosen
* @Date:   2018-01-19 21:40:51
* @Last Modified by:   Rosen
* @Last Modified time: 2018-01-19 21:41:00
*/
import React from 'react';
import ReactDOM from 'react-dom';


class Component extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
        this.state = {
            data: 'Old State'
        }
        console.log('初始化数据','constructor');
    }
    // 组件将要加载
    componentWillMount(){
        console.log('componentWillMount');
    }
    // 组件加载完成
    componentDidMount(){
        console.log('componentDidMount');
    }
    // 将要接收父组件传来的props
    componentWillReceiveProps(){
        console.log('componentWillReceiveProps');
    }
    // 子组件是不是应该更新
    shouldComponentUpdate(){
        console.log('shouldComponentUpdate');
        return true;
    }
    // 组件将要更新
    componentWillUpdate(){
        console.log('componentWillUpdate');
    }
    // 组件更新完成
    componentDidUpdate(){
        console.log('componentDidUpdate');
    }
    // 组件即将销毁
    componentWillUnmount(){
        console.log('componentWillUnmount');
    }
    // 处理点击事件
    handleClick(){
        console.log('更新数据：');
        this.setState({
            data: 'New State'
        });
    }
    // 渲染
    render(){
        console.log('render')
        return (
            <div>
                <div>Props: {this.props.data}</div>
                <button onClick={()=>{this.handleClick()}}>更新组件</button>
            </div>
        );
    }
}

class App extends React.Component{
    // 构造函数
    constructor(props){
        super(props)
        this.state = {
            data: 'Old Props',
            hasChild: true
        }
        console.log('初始化数据','constructor');
    }
    onPropsChange(){
        console.log('更新props:');
        this.setState({
            data: 'New Props'
        });
    }
    onDestoryChild(){
        console.log('干掉子组件：');
        this.setState({
            hasChild: false
        });
    }
    render(){
        return (
        <div>
            {
                this.state.hasChild ? <Component data={this.state.data}/> : null
            }
            <button onClick={()=>{this.onPropsChange()}}>改变Props</button>
            <button onClick={()=>{this.onDestoryChild()}}>干掉子组件</button>
        </div>
        );
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('app')
);
