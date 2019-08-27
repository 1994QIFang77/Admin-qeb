/*
 * @Author: Qifang
 * @Date: 2019-08-24 20:11:16
 * @LastEditors: Qifang
 * @LastEditTime: 2019-08-26 16:54:05
 */
 
import React from 'react';
import NavTop from 'component/nav-top/index.jsx';
import NavSide from 'component/nav-side/index.jsx';
import './theme.css';
import './index.scss';
class Layout extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div id="wrapper">
            <NavTop />
            <NavSide />
            {this.props.children}
            </div>
        );
    }
}
export default Layout;