/*
 * @Author: Qifang
 * @Date: 2019-08-25 16:33:14
 * @LastEditors: Qifang
 * @LastEditTime: 2019-08-25 20:33:55
 */
import MUtil        from 'util/feb.jsx'

const _mm   = new MUtil();

class User{
    // 用户登录
    login(loginInfo){
        return _mm.request({
            type: 'post',
            url: '/manage/user/login.do',
            data: loginInfo
        });
    }
    //检查登录接口的数据是否合法
    checkLoginInfo(loginInfo){
        let username = $.trim(loginInfo.username),
            password = $.trim(loginInfo.password);
        if(typeof username !== 'string' || username.length === 0){
            return {
                status: false, 
                msg: '用户名不能为空！'
            };
        }
        if(typeof password !== 'string' || password.length === 0){
            return {
                status: false, 
                msg: '密码不能为空！'
            };
        }
        return {
            status: true,
            mas : '验证通过'
        }  
    }
    // 退出登录
    logout(){
        return _mm.request({
            type : 'post',
            url : '/user/logout.do'
        });
    }
    getUserList(pageNum){
        return _mm.request({
            type    : 'post',
            url     : '/manage/user/list.do',
            data    : {
                pageNum : pageNum
            }
        });
    }
}
export default User;