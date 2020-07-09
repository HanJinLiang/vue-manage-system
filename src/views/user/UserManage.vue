<template>
    <div class="manage">
        <el-dialog
                title="提示"
                :visible.sync="deleteDialogVisible"
                width="30%"
                 >
            <span>确认删除该用户吗？</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="deleteDialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="deleteUserConfirm">确 定</el-button>
             </span>
        </el-dialog>

        <el-dialog
                :title="operateType==='add'?'新增用户':'更新用户'"
                :visible.sync="operateUserDialogVisible"
                width="30%">
            <CommonForm></CommonForm>
        </el-dialog>

        <div class="manage-header">
            <el-button type="primary">+ 新增</el-button>
            <CommonForm :form-label="formLabel" :form="searchForm" inline>
                <el-button type="primary" @click="getList()">搜索</el-button>
            </CommonForm>
        </div>
        <CommonTable :tableData="tableData" :config="config" :table-label="tableLabel"
                     @changePage="getList()" @edit="edit" @delete="showDeleteDialog"></CommonTable>
    </div>
</template>

<script>
    import CommonForm from "../../components/CommonForm";
    import CommonTable from "../../components/CommonTable";

    export default {
        components: {
            CommonForm, CommonTable
        },
        data() {
            return {
                operateType:'add',
                operateUserDialogVisible:false,
                deleteDialogVisible:false,
                deleteUser:{},
                searchForm: {
                    keyword: ''
                },
                operateForm:{
                    name: "",
                    age: "",
                    sexLabel: "",
                    birth: "",
                    addr: "",
                },
                formLabel: [
                    {
                        model: 'keyword',
                        label: ''
                    }
                ],
                tableData: [],
                tableLabel: {
                    name: "姓名",
                    age: "年龄",
                    sexLabel: "性别",
                    birth: "出生日期",
                    addr: "地址",
                },
                config: {
                    page: 1,
                    loading: false
                }
            }
        },
        methods: {
            getList() {
                this.config.loading = true;

                this.$http.get('/user/getUser', {
                    params: {
                        page: this.config.page,
                        name: this.searchForm.keyword
                    }
                }).then(res => {
                    this.tableData = res.data.list.map(item => {
                        item.sexLabel = item.sex === 0 ? "女" : "男"
                        return item
                    })
                    this.config.total = res.data.count
                    this.config.loading = false
                })
            },
            edit(row) {
                this.$message(row);
            },
            showDeleteDialog(raw) {
                this.deleteUser=raw
                this.deleteDialogVisible=true
            },
            deleteUserConfirm(){
                this.$http.get('/user/deleteUser', {
                    params: {
                        userId: '342',
                    }
                }).then(res => {
                    this.$message(res.data.msg);
                    this.deleteDialogVisible=false
                    if(res.data.code===20000){
                        //刷新显示
                        this.getList()
                    }
                })
            }

        },
        created() {
            this.getList()
        }
    }
</script>

<style lang="scss" scoped>
    @import "../../assets/scss/common";
</style>