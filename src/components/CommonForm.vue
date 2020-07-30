<template>
    <div>
        <el-form :model="form" ref="from" label-width="100px" :inline="inline">
            <el-form-item v-for="item in formLabel" :key="item.model">

                <el-input v-model="form[item.model]" :placeholder="'请输入'+item.label" v-if="!item.type">
                </el-input>

                <el-select v-model="form[item.model]" :placeholder="'请选择'+item.label" v-if="'select'===item.type">
                    <el-option v-for="optItem in item.opts" :key="optItem.value" :label="optItem.label"
                               :value="optItem.value">
                    </el-option>
                </el-select>

                <el-switch v-model="form[item.model]" v-if="'switch'===item.type"></el-switch>

                <el-date-picker type="date" placeholder="选择日期" v-model="form[item.model]"  v-if="'date'===item.type"></el-date-picker>
            </el-form-item>

            <el-form-item>
<!--                插槽-->
                <slot></slot>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
    export default {
        props: {
            form: Object,
            formLabel: Array,
            inline: Boolean
        }
    }

</script>

<style scoped>

</style>