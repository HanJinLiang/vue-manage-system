<template>
    <el-row class="home" :gutter="20">
        <el-col :span="8" class="l-content">
            <el-card  shadow="hover">
                <div class="user">
                    <img :src="userInfo.headerImg">
                    <div class="userInfo">
                        <div class="userName">{{userInfo.userName}}</div>
                        <div class="userRole">{{userInfo.userRole}}</div>
                    </div>
                </div>

                <div class="login-info">
                    <div class="login-time">上次登录时间：<span>2020-07-07 18:23</span></div>
                    <div class="login-time">上次登录地点：<span>上海</span></div>
                </div>


            </el-card>

            <el-card style="height: 393px;margin-top: 10px" shadow="hover">
                <el-table :data="tableData" height="393px" stripe>
                    <el-table-column v-for="(value,key) in table" :key="key" :prop="key" :label="value" show-overflow-tooltip></el-table-column>
                </el-table>

            </el-card>
        </el-col>
        <el-col :span="16" class="r-content">
            <div class="num">
                <el-card shadow="hover" v-for="item in numData" :key="item.name" :body-style="{display:'flex',padding:0}">
                    <i class="icon" :class="'el-icon-'+item.icon" :style="{background:item.color}"></i>
                    <div class="num-detail">
                        <div class="value">¥+{{item.value}}</div>
                        <div class="name">{{item.name}}</div>
                    </div>



                </el-card>
            </div>
            <el-card class="lineChart" shadow="hover"> </el-card>
            <div class="chart">
                <el-card shadow="hover"></el-card>
                <el-card shadow="hover"></el-card>
            </div>

        </el-col>
    </el-row>
</template>

<script>
    export default {
        data(){
          return{
              userInfo:{},
              numData:[],
              tableData:[],
              table:{
                  name:"姓名",
                  todayBuy:"今日购买",
                  monthBuy:"本月购买",
                  totalBuy:"总购买",
              }
          }
        },
        methods:{
            getHomeData(){
                this.$http.get('/home/getData').then(res=>{
                    console.log(res)
                    this.userInfo=res.data.data.userInfo
                    this.numData=res.data.data.numData
                    this.tableData=res.data.data.tableData
                })
            }
        },
       created() {
           this.getHomeData()
       }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/home";
</style>