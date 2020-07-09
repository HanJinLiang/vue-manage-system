<template>
    <div class="common-table">
        <el-table :data="tableData" height="100%" stripe  v-loading="config.loading">

            <el-table-column  label="序号" width="80px" show-overflow-tooltip>
                <template slot-scope="scope">
                    <span style="margin-left: 10px;">{{(config.page-1)*10+scope.$index+1}}</span>
                </template>
            </el-table-column>
            <el-table-column v-for="(value,key) in tableLabel" :key="key" :prop="key" :label="value" show-overflow-tooltip>
                <template slot-scope="scope">
                    <span style="margin-left: 10px;">{{scope.row[key]}}</span>
                </template>
            </el-table-column>

            <el-table-column label="操作">
                <template slot-scope="scope">
                    <el-button
                            size="mini"
                            @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                            size="mini"
                            type="danger"
                            @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination class="pager" layout="prev, pager, next" :total="config.total" :current-page.sync="config.page" @current-change="changePage(config.page)"> </el-pagination>
    </div>
</template>

<script>
    export default {
        props:{
            tableData:Array,
            tableLabel:{},
            config:{},
        },
        methods: {
            handleEdit(index, row) {
                this.$emit("edit",row)
            },
            handleDelete(index, row) {
                this.$emit("delete",row)
            },
            changePage(page){
                this.$emit("changePage",page)
            }
        }
    }
</script>

<style lang="scss" scoped>
.common-table{
    height: calc(90% - 62px);
    .pager{
        position: absolute;

    }
}

</style>