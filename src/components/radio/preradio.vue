<template>
    <z-radiogroup column>
        <z-radio theme="primary" name="sex" value="One" v-model="picked" text="春色满园关不住"></z-radio>
        <z-radio theme="primary" name="sex" value="Two" v-model="picked" text="春色满园关不住"></z-radio>
        <z-radio theme="primary" name="sex" value="Three" v-model="picked" text="春色满园关不住"></z-radio>
    </z-radiogroup>
</template>

<script>
import Radio from './radio';
import RadioGroup from './radiogroup';

export default {
    components: {
        'z-radio': Radio,
        'z-radiogroup': RadioGroup,
    },
    data() {
        return {
            picked: {
                type: String,
                default: '',
            },
        }
    },
}
</script>

<style lang="scss">

</style>