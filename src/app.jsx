import React from "react";
import ReactDOM from 'react-dom';
import './index.css';
import './index.scss';
import 'font-awesome/css/font-awesome.min.css';


class Title extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>{this.props.children}</h1>
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="">
                <Title>
                    <span>app span</span>
                </Title>
                <hr/>
                <Child/>
            </div>
        );
    }
}

class Child extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "zhoulei",
            age: 1
        }
        // this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.setState({
            age: this.state.age + 1
        })

        this.props.onBgColorChange('red')
    }

    render() {
        return (
            <div>
                <h1>父组件背景色: {this.props.bgColor}</h1>
                <button onClick={
                    (e) => {
                        this.handleClick(e)
                    }}> 按钮
                </button>
            </div>

        )
    }
}

class Father extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            bgColor: '#999'
        }
    }

    onBgColorChange(color) {
        this.setState({
            bgColor: color
        })
    }

    render() {
        return (
            <div style={{background: this.state.bgColor}}>
                <Child bgColor={this.state.bgColor} onBgColorChange={(color) => {
                    this.onBgColorChange(color)
                }}/>
            </div>
        );
    }

}

ReactDOM.render(
    <div>
        <Father/>
    </div>,
    document.getElementById('app')
);
