<template>
    <div style="background: #eee">
        <z-badge content="荷花">
            <span style="display: block; width: 50px; height: 50px; background: #ddd"></span>
        </z-badge>
    </div>
</template>

<script>
import Badge from './badge';

export default {
    components: {
        'z-badge': Badge,
    }
}
</script>

<style lang="scss">

</style>