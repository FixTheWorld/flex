/**
 * Created by changjin.zhang on 5/18/2017.
 */
import React,{Component} from 'react';
import '../scss/TestView.scss';
import {formatDate} from '../common/utils';
import {bounce,fadeIn} from 'react-animations';
import Radium,{StyleRoot} from 'radium';

class TestView extends Component{
    constructor(){
        super();
        this.state = {
            animation: 'bounce',
            library: 'Radium'
        };
        this.handleAnimation=this.handleAnimation.bind(this);
    }
    handleAnimation(){
        const animation  =this.state.animation==='bounce'?'fadeIn':'bounce';
        this.setState({ animation:animation });

    }
    render(){
        const { animation } = this.state;
        console.log('ani',animation);
        const styles = {
            bounce: {
                animation: 'x',
                animationDuration: "2s",
                animationName: Radium.keyframes(bounce, animation)
            }
        };
        const date=formatDate(new Date());
        return (
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <button className="navbar-toggle collapsed" data-toggle="collapse" aria-expanded="false" data-target="#testMenu">
                                <span className="icon-bar"> </span>
                                <span className="icon-bar"> </span>
                                <span className="icon-bar"> </span>
                            </button>
                            <a className="btn btn-default navbar-btn">R</a>
                        </div>
                        <div className="collapse navbar-collapse" id="testMenu">
                            <form className="navbar-form navbar-left">
                                <div className="input-group">
                                    <input type="text" className="form-control" placeholder="Search for..."/>
                                    <span className="input-group-btn">
                                        <button className="btn btn-default" type="submit">Go!</button>
                                    </span>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
                <StyleRoot>
                    <h1 style={styles.bounce}>Test Animation</h1>
                </StyleRoot>
                <button type="button" onClick={this.handleAnimation}>Ani</button>
                <article className="cj-main">
                    <header>
                        <hgroup>
                            <div className="cj-title">移动端多分辨率适配页面</div>
                            <div className="cj-subtitle">
                                开发时间:{date}
                                <span className="cm-fr">
                                    rem基数
                                    <span className="cm-red cj-num">75</span>
                                </span>
                            </div>
                        </hgroup>
                    </header>
                    <section className="cj-pic">
                        <img src={require('../images/test.jpg')} height='100%'/>
                    </section>

                    <section className="cj-content">
                        <header className="cj-content-title-cont">
                            <hgroup className="cj-content-title">
                                技术介绍
                            </hgroup>
                        </header>
                        <section className="cj-content-text">
                            使用lib-flexible.js动态修改dpr和html的font-size，再通过rem进行设计，rem的基数=设计稿的尺寸/10，本例为iphone 6的750，所以基数是75
                        </section>
                    </section>
                </article>
            </div>
        );
    }
}
export default TestView;