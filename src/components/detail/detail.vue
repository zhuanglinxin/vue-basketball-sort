<template>
  <div class="detail">
      <div class="back" @click="back">
        <i class="icon icon-arrow-left"></i>
      </div>
      <div class="box">
          <div class="avatar">
             <img :src="'./images/' + player.avatar" alt="">
          </div>
          <div class="group">姓名：{{ player.name }}</div>
          <div class="group">身高：{{ player.height }}cm</div>
          <div class="group">体重：{{ player.weight }}kg</div>
          <div class="group">特征：{{ player.detail }}</div>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    player: {
      default: () => {},
      type: Object
    }
  },
  methods: {
    back() {
      this.$emit('back')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
.detail {
  top: 0;
  position: absolute; 
  background-color: $color-background;
  height: 100vh;
  width: 100%;
  box-sizing: border-box;
  padding: 50px 20%;
  .back {
    position: absolute;
      left: 5px;
      top: 10px;
      color: #aaa;
      i {
        font-size: 24px;
      }
  }
  .box {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    color: #333;
    .avatar {
      width: 100%;
      height: 100px;
      text-align: center;
      margin: 15px 0;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50px;
      }
    }
    .group {
      font-size: 24px;
      margin-top: 30px;
      text-align: center;
      border-bottom: 1px solid #aaa;
    }
    .group:last-child {
      // text-align: left;
      border: none;
    }
  }
}
</style>