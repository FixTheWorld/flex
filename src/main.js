/**
 * Created by changjin.zhang on 4/13/2017.
 */
import React,{Component} from 'react';
import {render} from 'react-dom';
import './scss/common.scss';
import Flex from './components/Flex';
import FlexCase from './components/FlexCase';
import './components/flex.scss';
class Main extends Component{
    constructor(){
        super();
        this.state={page:1}
    }
    linkTo(){
        const page=this.state.page===1?2:1;
        this.setState({page:page});
    }
    render(){
        return (
            <div>
                <div className="link"><a href="#" onClick={this.linkTo.bind(this)}>案例{this.state.page}</a></div>
                {this.state.page===1?<Flex/>:<FlexCase/>}
            </div>
        );
    }
}
render(
    <Main></Main>,
    document.querySelector('#root')
);
console.log('main js');