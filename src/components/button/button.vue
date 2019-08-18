<template>
    <button class="zhui-btn" :class="['zhui-btn-'+theme, {'zhui-btn-loading': loading}, computedOutline, {'zhui-btn-disabled': disabled}, {'zhui-btn-round': round}, 'zhui-btn-kong-'+kong, {'zhui-btn-block': block}]">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'ZButton',
    props: {
      theme: {
        type: String,
        default: 'default',
      },
      loading: {
        type: Boolean,
        default: false,
      },
      outline: {
        type: Boolean,
        default: false,
      },
      disabled: {
        type: Boolean,
        default: false,
      },
      round: {
        type: Boolean,
        default: false,
      },
      kong: {
        type: String,
      },
      block: {
        type: Boolean,
        default: false,
      }
    },
    computed: {
      computedOutline() {
        if (this.outline) {
          return 'zhui-btn-' + this.theme + '-outline';
        }
        return 0;
      },
    },
}
</script>

<style lang="scss">
@import './index.scss';
</style>
