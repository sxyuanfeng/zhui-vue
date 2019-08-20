<template>
    <div class="zhui-color-docs-wrapper">
        <z-card theme="primary" title="primary" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>黛</p>
                <p>#41395b</p>
            </template>
        </z-card>
        <z-card theme="success" title="success" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>竹青</p>
                <p>#6f8657</p>
            </template>
        </z-card>
        <z-card theme="danger" title="danger" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>胭脂</p>
                <p>#94232d</p>
            </template>
        </z-card>
        <z-card theme="meihong" title="meigong" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>梅红</p>
                <p>#c45a65</p>
            </template>
        </z-card>
        <z-card theme="putaozi" title="putaozi" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>葡萄紫</p>
                <p>#4c1f24</p>
            </template>
        </z-card>
        <z-card theme="huaqing" title="huaqing" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>花青</p>
                <p>#2376b7</p>
            </template>
        </z-card>
        <z-card theme="ganglan" title="ganglan" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>钢蓝</p>
                <p>#0f1423</p>
            </template>
        </z-card>
        <z-card theme="haitang" title="haitang" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>海棠红</p>
                <p>#f03752</p>
            </template>
        </z-card>
        <z-card theme="muyun" title="muyun" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>暮云灰</p>
                <p>#4f383e</p>
            </template>
        </z-card>
        <z-card theme="yuanshan" title="yuanshan" class="zhui-color-docs-item-wrapper">
            <template #body>
                <p>远山紫</p>
                <p>#ccccd6</p>
            </template>
        </z-card>
    </div>
</template>

<script>
import Card from '../../../src/components/card/card';

export default {
    components: {
        'z-card': Card,
    }
}
</script>

<style lang="scss">
.zhui-color-docs-wrapper {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
}

.zhui-color-docs-item-wrapper {
    margin: 10px;
}
</style>