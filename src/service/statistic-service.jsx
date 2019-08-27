/*
 * @Author: Qifang
 * @Date: 2019-08-25 19:21:45
 * @LastEditors: Qifang
 * @LastEditTime: 2019-08-25 19:22:23
 */
import MUtil        from 'util/feb.jsx'

const _mm   = new MUtil();

class Statistic{
    // 首页数据统计
    getHomeCount(){
        return _mm.request({
            url: '/manage/statistic/base_count.do'
        });
    }
}

export default Statistic;