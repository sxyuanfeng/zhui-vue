<template>
    <div class="zhui-rate" :class="[{'zhui-rate-disabled': disabled}]" @mouseleave="onLeave">
      <z-rateitem v-for="n in nums" :key="n" :num="n" :disabled="disabled" :active="n<=activeNum ? true : false" @on-click="onClick" @on-mouse-move="onHover"></z-rateitem>
    </div>
</template>

<script>
import RateItem from './rateitem';

export default {
    name: 'ZRate',
    props: {
      nums: {
        type: Number,
        default: 5,
      },
      value: {
        type: Number,
        default: 0,
      },
      disabled: {
        type: Boolean,
        default: false,
      }
    },
    components: {
      'z-rateitem': RateItem,
    },
    data() {
      return {
        activeNum: this.value,
        hoverNum: this.value,
      }
    },
    watch: {
      value: function() {
        this.activeNum = this.value;
      }
    },
    methods: {
      onClick(val) {
        this.$emit('update:value', val);
        this.hoverNum = this.activeNum;
      },
      onHover(val) {
        this.activeNum = val;
      },
      onLeave() {
        this.activeNum = this.hoverNum;
      }
    },
}
</script>

<style lang="scss">
@import './index.scss'
</style>

