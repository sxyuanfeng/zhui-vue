<template>
    <div>
        <z-notify :visiable="show">
            南风知我意吹梦到西洲
        </z-notify>
        <button @click="computedShow"></button>
    </div>
</template>

<script>
import Notify from './notify';

export default {
    components: {
        'z-notify': Notify,
    },
    data() {
        return {
            show: false,
        }
    },
    methods: {
        computedShow() {
            this.show = !this.show;
        }
    }
}
</script>