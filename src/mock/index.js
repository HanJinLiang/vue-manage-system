import Mock from 'mockjs'

import homeApi from './home'
import usermanageApi from './usermanage'


//延时 200-2000毫秒请求设置
Mock.setup({
    timeout:'200-2000'
})
//首页相关  /home/getData
Mock.mock(/\/home\/getData/,homeApi.getHomeData())

Mock.mock(/\/user\/getUser/,'get',usermanageApi.getList)

Mock.mock(/\/user\/deleteUser/,'get',usermanageApi.deleteUser)
