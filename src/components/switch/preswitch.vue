<template>
    <z-switch theme="meihong" text="开关" :checked.sync="checked"></z-switch>
</template>

<script>
import Switch from './switch';

export default {
    components: {
        'z-switch': Switch,
    },
    data() {
        return {
            checked: true,
        }
    },
}
</script>
