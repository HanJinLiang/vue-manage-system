<template>
    <div class="tabs">
        <el-tag
                :key="tag.name"
                v-for="tag in tags"
                :closable="tag.name!=='home'"
                :disable-transitions="false"
                size="small"
                @close="handleClose(tag)">
            {{tag.label}}
        </el-tag>
    </div>
</template>

<script>
    import {mapState,mapMutations} from 'vuex'
    export default {
        methods: {
            handleClose(tag) {
                this.closeTab(tag);
            },
            ...mapMutations({
                closeTab: 'closeTab'
            })
        },
        computed:{
            ...mapState({
                tags:state=>state.tab.tabsList
            })
        }
    }
</script>

<style lang="scss" scoped>
    .tabs{
        padding: 20px;
        .el-tag{
            margin-right: 15px;
        }
    }
</style>