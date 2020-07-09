<template>
    <header>


        <div class="left-content">
            <el-button  type="plain" icon="el-icon-menu" size="mini" @click="collapseMenu()"></el-button>

            <el-breadcrumb separator="/">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: current.path }" v-if="current">
                    {{current.label}}
                </el-breadcrumb-item>

            </el-breadcrumb>
        </div>
        <div class="right-content">
            <el-dropdown trigger="click" size="mini" @command="handleCommand">
                  <span class="el-dropdown-link">
                      <el-image :src="userImg" class="userImg"></el-image>
                  </span>
                <el-dropdown-menu slot="dropdown">
                    <el-dropdown-item>个人中心</el-dropdown-item>
                    <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
            </el-dropdown>
        </div>
    </header>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        data(){
            return{
                userImg:require('../assets/images/head_default.png')
            }
        },
        computed:{
            ...mapState({
                current: state => state.tab.currentMenu
            })
        },
        methods:{
            collapseMenu(){
                this.$store.commit('collapseMenu');
            },
            handleCommand(command) {
                if(command==="logout"){
                    //退出登录
                    this.$router.push({path:'login'})
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    header{
        display: flex;
        align-items: center;
        height: 100%;
        justify-content: space-between;
    }
    .left-content{
        display: flex;
        align-items: center;

        .el-button{
            margin-right: 20px;
        }
    }
    .right-content{
        .userImg{
            width: 40px;
            height: 40px;
            border-radius: 50%;
        }
    }
</style>

<style lang="scss">
    .el-breadcrumb__item{
        .el-breadcrumb__inner{
            color: #666666;
            font-weight: normal;
        }
        &:last-child{
            .el-breadcrumb__inner{
                color: #fff;
                cursor: pointer;
            }
        }
    }

</style>