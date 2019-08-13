<template>
    <div v-if="show" class="zhui-loading-container" :class="{'zhui-loading-container-fill': fill}"> 
        <div class="zhui-loading-wrapper" :class="{'zhui-loading-global': global}">
            <div class="zhui-loading"></div>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        global: {
            type: Boolean,
            default: false,
        },
        fill: {
            type: Boolean,
            default: false,
        },
        show: {
            type: Boolean,
            default: true
        }
    }
}
</script>

<style lang="scss">
$circleWidth: 40px;

.zhui-loading {
  position: relative;
  width: 100%;
  height: $circleWidth*1.8;

  &-container {
    position: relative;
    height: 100px;

    &-fill {
      height: inherit;

      .zhui-loading { background-color: rgba(255, 255, 255, 0.7); }
    }
  }

  &-wrapper {
    font-family: 'STKaiti';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction:column
  }
  
  &-global {
    position: fixed;
    z-index: 9999;
    background-color: rgba(255, 255, 255, 0.7);
  }

  &::after {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    width: $circleWidth;
    height: $circleWidth;
    margin-top: -$circleWidth / 2;
    margin-left: -$circleWidth / 2;
    box-shadow: 0 0 2px #ddd;
    border-radius: 50%;
    background-image:
      radial-gradient(#000 $circleWidth / 10, transparent $circleWidth / 10 + 1),
      radial-gradient(#fff $circleWidth / 10, transparent $circleWidth / 10 + 1),
      radial-gradient(#fff $circleWidth / 4 - 1, transparent $circleWidth / 4 + 1),
      radial-gradient(#000 $circleWidth / 4 - 1, transparent $circleWidth / 4 + 1),
      linear-gradient(90deg,#000 $circleWidth / 2, #fff $circleWidth / 2);
    background-position: center $circleWidth / 4,center (-$circleWidth / 4),center $circleWidth / 4,center (-$circleWidth / 4), 0 0;
    overflow: hidden;
    animation: circleRotate .6s linear infinite;
  }
}

@keyframes circleRotate {
  100% {
    transform: rotate(360deg);
  }
}
</style>
