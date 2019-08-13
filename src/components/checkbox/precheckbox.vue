<template>
    <z-checkboxgroup column>
        <z-checkbox v-model="loving.nannan">囡囡</z-checkbox>
        <z-checkbox v-model="loving.dajiao">大角</z-checkbox>
        <z-checkbox v-model="loving.houzi">猴子</z-checkbox>
    </z-checkboxgroup>
</template>

<script>
import CheckBox from './checkbox';
import CheckBoxGroup from './checkboxgroup';

export default {
    components: {
        'z-checkbox': CheckBox,
        'z-checkboxgroup': CheckBoxGroup,
    },
    data() {
        return {
            loving: {
                nannan: false,
                dajiao: false,
                houzi: false,
            }
        }
    },
}
</script>

