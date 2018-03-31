<template>
    <div class="components page-transition">
        
        <!-- 加载中状态 BEGIN -->
        <div v-if="status === loadingStatusEnum.loading.value" class="loading-page">
            <span class="loading-spainer">
                <span class="loading-spainer-circle"></span>
                <span class="loading-text">&nbsp;&nbsp;正在加载...</span>
            </span>
        </div>
        <!-- 加载中状态 END -->

        <!--数据加载完成状态 BEGIN-->
        <template v-if="status === loadingStatusEnum.finish.value">
            <slot></slot>            
        </template>
        <!--数据加载完成状态 END-->

        <!--没有数据状态 BEGIN-->
        <no-data v-if="status === loadingStatusEnum.nodata.value" :icon-class="nodataIconClass" :message="message">
            <template slot="content">
                <slot name="content"></slot>
            </template>
        </no-data>
        <!--没有数据状态 END-->
    </div>
</template>

<style lang="scss">
    @import "./style";
</style>
<script>
    import enums from "enums";
    import noData from "../no-data";

    export default
    {
        name: "loading",

        props:
        {
            status:
            {
                type: Number,
                default: enums.loadingStatus.loading.value
            },
            nodataClass: String,
            nodataIconClass: String,
            message:
            {
                type: String,
                default: '没有数据哦~'
            }
        },

        components:
        {
            noData
        },

        data()
        {
            return {
                loadingStatusEnum: this.enum.loadingStatus
            };
        }
    }
</script>