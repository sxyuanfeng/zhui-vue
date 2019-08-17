<template>
    <z-steps>
        <z-step :error="true" :current="2" v-for="(item, index) in lists" :key="item.id" :length="lists.length" :stepNum="index+1" :title="item.title"></z-step>
    </z-steps>
</template>

<script>
import Step from './step';
import Steps from './steps';

export default {
    components: {
        'z-step': Step,
        'z-steps': Steps,
    },
    data() {
        return {
            lists: [{'title': 'blue'}, {'title': 'green'}, {'title': 'red'}],
        }
    }
}
</script>
