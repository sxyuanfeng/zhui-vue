<template>
    <z-progress :percent="40"></z-progress>
</template>

<script>
import Progress from './progress';

export default {
    components: {
        'z-progress': Progress,
    },
}
</script>