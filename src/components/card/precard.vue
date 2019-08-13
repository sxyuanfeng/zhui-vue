<template>
    <div class="card-wrapper">
        <z-card theme="meihong" title="野有蔓草" underline cornerLeft="花发多风雨" cornerRight="人生足别离" type="row">
            <template #img>
                <img style="width: 100px; height:100px" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1565152600559&di=02b0c369fe4408543de0a4cb88eac3b6&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201806%2F17%2F20180617193912_aqlos.png">
            </template>
            <template #body>
                <p>野有蔓草，零露漙兮。有美一人，清扬婉兮。</p>
            </template>
        </z-card>
    </div>
</template>

<script>
import Card from './card';

export default {
    components: {
        'z-card': Card,
    }
}
</script>

<style lang="scss">
.card-wrapper > * {
    margin: 0 auto;
    text-align: center;
}
</style>
