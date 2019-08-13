<template>
    <z-rate :nums="5" :value.sync="num"></z-rate>
</template>

<script>
import Rate from './rate';

export default {
    components: {
        'z-rate': Rate,
    },
    data() {
        return {
            num: 2,
        }
    },
}
</script>
