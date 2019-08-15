<template>
    <div>
        <h2>默认</h2>
        <sakura-card>
            <z-breadcrumb :list="[{href: '//www.baidu.com',value: '百度'},{href: '//www.google.com',value: '谷歌'},{href: '//www.cn.bing.com',value: '必应'}]"></z-breadcrumb>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code1}}</code></pre>
            </template>
        </sakura-card>
        <h2>直接调用</h2>
        <sakura-card>
            <z-breadcrumb>
                <z-breadcrumbitem href="//www.baidu.com" value="百度"></z-breadcrumbitem>
                <z-breadcrumbitem href="//www.google.com">谷歌</z-breadcrumbitem>
                <z-breadcrumbitem>谷歌</z-breadcrumbitem>
            </z-breadcrumb>
            <template v-slot:code>
                <pre v-highlightjs><code class="vue">{{code2}}</code></pre>
            </template>
        </sakura-card>
    </div>
</template>

<script>
import BreadCrumbItem from '../../../src/components/breadcrumb/breadcrumbitem';
import BreadCrumb from '../../../src/components/breadcrumb/breadcrumb';
import Vue from 'vue';
import VueHighlightJS from 'vue-highlightjs';

Vue.use(VueHighlightJS)

export default {
    components: {
        'z-breadcrumb': BreadCrumb,
        'z-breadcrumbitem': BreadCrumbItem,
    },
    data() {
        return {
            code1: `
            <z-breadcrumb :list="[{href: '//www.baidu.com',value: '百度'},{href: '//www.google.com',value: '谷歌'},{href: '//www.cn.bing.com',value: '必应'}]"></z-breadcrumb>`.replace(/^\s*/gm, '').trim(),
            code2: `
            <z-breadcrumb>
                <z-breadcrumbitem href="//www.baidu.com" value="百度"></z-breadcrumbitem>
                <z-breadcrumbitem href="//www.google.com">谷歌</z-breadcrumbitem>
                <z-breadcrumbitem>谷歌</z-breadcrumbitem>
            </z-breadcrumb>`.replace(/^ {12}/gm, "").trim(),
        }
    }
}
</script>

<style lang="scss">
@import './highlight.css';
</style>