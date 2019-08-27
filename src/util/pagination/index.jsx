/*
 * @Author: Qifang
 * @Date: 2019-08-25 19:58:25
 * @LastEditors: Qifang
 * @LastEditTime: 2019-08-25 20:24:29
 */
import React        from 'react';
import RcPagination   from 'rc-pagination';
import 'rc-pagination/dist/rc-pagination.min.css';

// 通用分页组件
class Pagination extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="row">
                <div className="col-md-12">
                    <RcPagination {...this.props} 
                        hideOnSinglePage
                        showQuickJumper
                    />
                </div>
            </div>
        );
    }
}

export default Pagination;