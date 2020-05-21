<template>
  <div id="app">
      <m-header @select="showNavigation"></m-header>
      <transition name="niu">
        <div class="navigation" v-show="flag">
          <div class="input">
          几人一组：<input type="text" v-model="num">
          </div>
          <div>
            <button @click="showResult">随机分配</button>
          </div>
          <div>
            <button @click="editNum">编辑人数</button>
          </div>
        </div>
      </transition>
      
      <player ref="player" @select="showDetail"></player>
      <result v-if="showRes" :results="players" :number="parseInt(num)" @back="back"></result>
      <detail v-if="showDet" :player="player" @back="back"></detail>
  </div>
</template>

<script>
import MHeader from 'components/nav/nav'
import Player from 'components/player/player'
import Result from 'components/result/result'
import Detail from 'components/detail/detail'
export default {
  components: {
    MHeader,
    Player,
    Result,
    Detail
  },
  data() {
    return {
      num: 0,
      flag: false,
      showRes: false,
      showDet: false,
      players: [],
      player: {}
    }
  },
  methods: {
    back() {
      this.showRes = false
      this.showDet = false
    },
    showResult() {
      if (this.num < 2) {
        alert("请输入合理的分组人数")
        return
      }
      this.flag = false
      this.$refs.player.showDel = false
      this.players =  this.$refs.player.players
      this.showRes = true
    },
    showNavigation() {
      this.flag = !this.flag
    },
    editNum() {
      this.flag = false
      this.$refs.player.showDel = !this.$refs.player.showDel
    },
    showDetail(item) {
      this.showDet = true
      this.player = item
    }
  }
}
</script>

<style lang="scss">
  #app {
    position: relative;
    .navigation {
      width: 300px;
      position: absolute;
      transform-origin: right top;
      right: 0;
      padding: 5px 0;
      z-index: 5;
      background-color: #ecf0f1e5;
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      .input {
        display: flex;
        input {
          height: 20px;
          width: 40px;
          padding-left: 5px;
        }
      }
    }
    .niu-enter-active,.niu-leave-active {
      transform: scale(0);
      transition: all 0.5s;
    }
    .niu-enter-to{
      transform: scale(1);
    }
    .niu-leave-to {
      transform: scale(0);
    }
  }
</style>
