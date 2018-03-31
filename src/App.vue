<template>
    <div id="drip-wechat-client">
        <transition name="router-fade" mode="out-in">
            <section class="drip-page-wrapper">
                <content class="drip-content">
                    <router-view></router-view>
                </content>
            </section>
        </transition>
    </div>
</template>

<style lang="scss">
    .router-fade-enter-active, .router-fade-leave-active
    {
        transition: opacity .3s;
    }

    .router-fade-enter, .router-fade-leave-active
    {
        opacity: 0;
    }
</style>
<script>
    const FastClick = require("fastclick")

    export default
    {
        name: "drip-wechat-client",

        mounted()
        {
            // 添加Fastclick移除移动端点击延迟。
            FastClick.attach(document.body);
        }
    };
</script>