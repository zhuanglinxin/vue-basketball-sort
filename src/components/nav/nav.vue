<template>
  <div class="nav">
      <div class="icon icon-basketball2 center"></div>
      <div class="icon icon-duoxuan right" @click="select"></div>
  </div>
</template>

<script>
export default {
  methods: {
    select() {
      this.$emit('select')
    }
  }
}
</script>

<style scoped lang="scss">
    @import "~common/scss/variable.scss";
    .nav {
      height: 44px;
      background: $color-background;
      display: flex;
      justify-content: space-between;
      padding-right: 10px;
      .center {
        font-size: 32px;
        color: $color-text;
        align-self: center;
        margin: 0 auto;
        transform: translateX(12px);
      }
      .right {
        font-size: 24px;
        color: $color-text;
        align-self: center;
      }
      .right:hover {
        background-color: #aaa;
      }
    }
</style>