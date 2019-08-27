/*
 * @Author: Qifang
 * @Date: 2019-08-24 22:47:25
 * @LastEditors: Qifang
 * @LastEditTime: 2019-08-24 22:48:42
 */
import React from 'react';

class PageTitle extends React.Component{
    constructor(props){
        super(props);
    }
    componentWillMount(){
        document.title = this.props.title + ' - QEB ADMIN';
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <h1 className="page-header">{this.props.title}</h1>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default PageTitle;