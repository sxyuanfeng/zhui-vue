<template>
    <div class="zhui-notify-container" :class="{'zhui-notify-exit': !visiable}" :style="{'top': top, 'right': right}">
        <div v-if="visiable" class="zhui-notify-inner" :class="[dark ? 'zhui-notify-dark' : 'zhui-notify-light']">
            <span>
                <slot></slot>
            </span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ZNotify',
    props: {
        dark: {
            type: Boolean,
            default: false,
        },
        top: {
            type: String,
            default: '80px',
        },
        right: {
            type: String,
            default: '30px',
        },
        visiable: {
            type: Boolean,
            default: false,
        }
    }
}
</script>

<style lang="scss">
@import '../color.scss';

.zhui-notify {
  &-container {
    font-family: 'STKaiti';
    position: fixed;
    top: 80px;
    right: 30px;
    
  }

  &-inner {
    position: relative;
    float: left;
    width: 30px;
    padding: 10px 8px;
    text-align: center;
    animation: unfold .3s linear;
    overflow: hidden;
    outline: #f7c985 solid 1px;
    outline-offset: -4px;
    background-image: radial-gradient(tan 0.4px, transparent 1px),
    radial-gradient(tan 0.4px, transparent 1px);
    background-size: 30px 30px;
    background-position: 20px 15px, -4px 0;

    span {
      font-size: 20px;
      font-weight: bolder;
      color: #f7c985;
    }
  }

  &-light {
    background-color: #d41d25;
  }

  &-dark {
    background-color: #000;
  }

  &-exit {
    animation: fold .5s linear forwards;
  }

  @keyframes unfold {
    from {
      max-height: 0;
    } to {
      max-height: 400px;
    }
  }
  
  @keyframes fold {
    from {
      max-height: 400px;
    } to {
      max-height: 0;
    }

    80% {
    }
  }
}

</style>