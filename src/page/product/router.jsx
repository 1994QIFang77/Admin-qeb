/*
 * @Author: Qifang
 * @Date: 2019-08-22 20:23:01
 * @LastEditors: Qifang
 * @LastEditTime: 2019-08-27 16:19:21
 */

import React            from 'react';
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom'

// 页面
import ProductList from 'page/product/index/index.jsx';
import ProductSave      from 'page/product/index/save.jsx';
import ProductDetail    from 'page/product/index/detail.jsx';
import CategoryList     from 'page/product/category/index.jsx';
import CategoryAdd      from 'page/product/category/add.jsx';

class ProductRouter extends React.Component{
	render(){
        //Redirect:跳转
        return (
                <Switch>
                    <Route path="/product/index" component={ProductList}/>
                    <Route path="/product/save/:pid?" component={ProductSave}/>
                    <Route path="/product/detail/:pid" component={ProductDetail}/>
                    <Route path="/product-category/index/:categoryId?" component={CategoryList}/>
                    <Route path="/product-category/add" component={CategoryAdd}/>
                    <Redirect exact from="/product" to="/product/index"/>
                    <Redirect exact from="/product-category" to="/product-category/index"/>
                </Switch>
        )
    }
}

export default ProductRouter;