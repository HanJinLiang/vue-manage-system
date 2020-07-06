<template>
    <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
        <el-menu-item  v-for="item in noChildren" :key="item.path" :index="item.path" @click="clickMenu(item)">
            <i :class="'el-icon-' + item.icon"></i>
            <span slot="title">{{item.label}}</span>
        </el-menu-item>

        <el-submenu  v-for="(item,index) in hasChildren" index="index" :key="index">
            <template slot="title">
                <i class="el-icon-location"></i>
                <span>{{item.label}}</span>
            </template>
            <el-menu-item-group >
                <el-menu-item :index="subItem.path" :key="subItem.path" v-for="subItem in item.children"  @click="clickMenu(subItem)">{{subItem.label}}</el-menu-item>
            </el-menu-item-group>
        </el-submenu>

    </el-menu>
</template>

<script>
    export default {
       data(){
           return{
               asideMenu:[
                   {
                       path:"/",
                       label:"首页",
                       icon:"home",
                       name:"home"
                   },
                   {
                       path:"/video",
                       label:"视频管理",
                       icon:"video-play",
                       name:"video"
                   },
                   {
                       path:"/user",
                       label:"用户管理",
                       icon:"user",
                       name:"user"
                   },
                   {
                       label:"其他",
                       icon:"user",
                       children:[
                           {
                               path:"/page1",
                               label:"其他1",
                               name:"page1"
                           },
                           {
                               path:"/page2",
                               label:"其他2",
                               name:"page2"
                           }
                       ]
                   },
               ]
           }
       },
        computed:{
            noChildren(){
                return this.asideMenu.filter(item => !item.children);
            },
            hasChildren(){
                return this.asideMenu.filter(item => item.children);
            },
        },
        methods:{
           clickMenu(item){
               this.$store.commit("selectMenu",item)
           }
        }
    }
</script>

<style lang="scss" scoped>
    .el-menu{
        height: 100%;
        border: none;
    }
</style>