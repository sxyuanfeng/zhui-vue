<template>
    <div>
        <z-breadcrumb>
            <z-breadcrumbitem href="//www.baidu.com" value="百度"></z-breadcrumbitem>
            <z-breadcrumbitem href="//www.google.com">谷歌</z-breadcrumbitem>
            <z-breadcrumbitem>谷歌</z-breadcrumbitem>
        </z-breadcrumb>
        <z-breadcrumb :list="[{href: '//www.baidu.com',value: '百度'},{href: '//www.google.com',value: '谷歌'},{href: '//www.baidu.com',value: '必应'}]"></z-breadcrumb>
    </div>
</template>

<script>
import BreadCrumb from './breadcrumb';
import BreadCrumbItem from './breadcrumbitem';

export default {
    components: {
        'z-breadcrumb': BreadCrumb,
        'z-breadcrumbitem': BreadCrumbItem,
    },
}
</script>
