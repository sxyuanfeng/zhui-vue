<template>
    <div class="zhui-breadcrumb">
        <z-breadcrumbitem v-for="(item, index) in list" :key="index" :value="item.value" :href="item.href"></z-breadcrumbitem>
        <slot></slot>
    </div>
</template>

<script>
import BreadCrumbItem from './breadcrumbitem';

export default {
    name: 'ZBreadcrumb',
    components: {
        'z-breadcrumbitem': BreadCrumbItem,
    },
    props: {
        list: {
            type: Array,
        },
    }
}
</script>

<style lang="scss">
@import './index.scss'
</style>
