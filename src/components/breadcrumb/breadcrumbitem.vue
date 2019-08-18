<template>
    <a v-if="href" class="zhui-breadcrumb-item" :href="href">{{value}}<slot></slot></a>
    <span v-else class="zhui-breadcrumb-item">{{value}}<slot></slot></span>
</template>

<script>
export default {
    name: 'ZBreadcrumbitem',
    props: {
        value: {
            type: String
        },
        href: {
            type: String,
        },
    }
}
</script>

<style lang="scss">
@import './index.scss'
</style>
