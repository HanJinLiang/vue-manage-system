import Mock from 'mockjs'

export default {
    getHomeData: () => {
        return {
            code: 20000,
            data: {
                userInfo: {
                    headerImg: Mock.Random.image(),
                    userName: "Nick",
                    userRole: "超级管理员",
                },
                numData: [{
                    name: "今日收藏订单",
                    value: Mock.Random.float(1000, 10000, 0, 2),
                    icon: "success",
                    color: "#2ec7c9"
                }, {
                    name: "今日未支付订单",
                    value: Mock.Random.float(1000, 10000, 0, 2),
                    icon: "success",
                    color: "#4a3860"
                }, {
                    name: "本月支付订单",
                    value: Mock.Random.float(1000, 10000, 0, 2),
                    icon: "success",
                    color: "#2ec709"
                }, {
                    name: "本月收藏订单",
                    value: Mock.Random.float(1000, 10000, 0, 2),
                    icon: "success",
                    color: "#34c7c9"
                }, {
                    name: "本月未支付订单",
                    value: Mock.Random.float(1000, 10000, 0, 2),
                    icon: "success",
                    color: "#2e90c9"
                }, {
                    name: "今日支付订单",
                    value: Mock.Random.float(1000, 10000, 0, 2),
                    icon: "success",
                    color: "#2567c9"
                }
                ],
                tableData: [
                    {
                        name:Mock.Random.string(10),
                        todayBuy:Mock.Random.float(10, 100, 0, 2),
                        monthBuy:Mock.Random.float(100, 1000, 0, 2),
                        totalBuy:Mock.Random.float(1000, 10000, 0, 2),
                    },{
                        name:Mock.Random.string(10),
                        todayBuy:Mock.Random.float(10, 100, 0, 2),
                        monthBuy:Mock.Random.float(100, 1000, 0, 2),
                        totalBuy:Mock.Random.float(1000, 10000, 0, 2),
                    },{
                        name:Mock.Random.string(10),
                        todayBuy:Mock.Random.float(10, 100, 0, 2),
                        monthBuy:Mock.Random.float(100, 1000, 0, 2),
                        totalBuy:Mock.Random.float(1000, 10000, 0, 2),
                    },{
                        name:Mock.Random.string(10),
                        todayBuy:Mock.Random.float(10, 100, 0, 2),
                        monthBuy:Mock.Random.float(100, 1000, 0, 2),
                        totalBuy:Mock.Random.float(1000, 10000, 0, 2),
                    },{
                        name:Mock.Random.string(10),
                        todayBuy:Mock.Random.float(10, 100, 0, 2),
                        monthBuy:Mock.Random.float(100, 1000, 0, 2),
                        totalBuy:Mock.Random.float(1000, 10000, 0, 2),
                    },{
                        name:Mock.Random.string(10),
                        todayBuy:Mock.Random.float(10, 100, 0, 2),
                        monthBuy:Mock.Random.float(100, 1000, 0, 2),
                        totalBuy:Mock.Random.float(1000, 10000, 0, 2),
                    },{
                        name:Mock.Random.string(10),
                        todayBuy:Mock.Random.float(10, 100, 0, 2),
                        monthBuy:Mock.Random.float(100, 1000, 0, 2),
                        totalBuy:Mock.Random.float(1000, 10000, 0, 2),
                    },{
                        name:Mock.Random.string(10),
                        todayBuy:Mock.Random.float(10, 100, 0, 2),
                        monthBuy:Mock.Random.float(100, 1000, 0, 2),
                        totalBuy:Mock.Random.float(1000, 10000, 0, 2),
                    }
                ]
            }

        }

    }
}
