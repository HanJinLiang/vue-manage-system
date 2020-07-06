export default{
    state: {
        menu:[],
        currentMenu:{},
        tabsList:[ {
            path:"/",
            label:"首页",
            icon:"home",
            name:"home"
        }]
    },

    mutations: {
        selectMenu(state,val){
            if(val.name==='home'){
                state.currentMenu=null
            }else {
                state.currentMenu=val
                let result= state.tabsList.findIndex(item=>item.name===val.name);
                //当前tabsList不包含  加进去
                if(result===-1){
                    state.tabsList.push(val)
                }

            }
        },
        closeTab(state,val){
            let result= state.tabsList.findIndex(item=>item.name===val.name);
            //删除
            state.tabsList.splice(result,1)
        }
    },
    actions:{

    }
}