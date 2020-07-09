import Mock from 'mockjs'
// get请求从config.url获取参数，post从config.body中获取参数
function param2Obj(url) {
    const search = url.split('?')[1]
    if (!search) {
        return {}
    }
    return JSON.parse(
        '{"' +
        decodeURIComponent(search)
            .replace(/"/g, '\\"')
            .replace(/&/g, '","')
            .replace(/=/g, '":"') +
        '"}'
    )
}
let List = []
const count = 200

for (let i = 0; i < count; i++) {
    List.push(
        Mock.mock({
            id: Mock.Random.guid(),
            name: "姓名"+Mock.Random.string(2),
            age: Mock.Random.integer(10,100),
            sex: Mock.Random.integer(0,1),
            birth: Mock.Random.date(),
            addr:Mock.Random.county(true)
        })
    )
}

export default {
    /**
     * 获取列表
     * 要带参数 name, page, limt; name可以不填, page,limit有默认值。
     * @param name, page, limit
     * @return {{code: number, count: number, data: *[]}}
     */
    getList:config => {
        const { name, page = 1, limit = 10 } = param2Obj(config.url)
        console.log('name:' + name, 'page:' + page, '分页大小limit:' + limit)
        const mockList = List.filter(user => {
            if (name && user.name.indexOf(name) === -1 && user.addr.indexOf(name) === -1) return false
            return true
        })
        const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
        return {
            code: 20000,
            count: mockList.length,
            list: pageList
        }
    },

    deleteUser:config => {
        const { userId } = param2Obj(config.url)
        let index=List.findIndex(item=>item.id===userId)
        if(index===-1){
            return {
                code: 20001,
                msg:"用户不存在"
            }
        }else {
            List.splice(index,1)
            return {
                code: 20000,
                msg:"删除成功"
            }
        }
    }

}
