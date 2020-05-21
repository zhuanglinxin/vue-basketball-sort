<template>
  <div class="player">
      <div class="box">
        <div class="card" v-for="item in players" :key="item.name" @click="select(item)">
            <div class="del" v-show="showDel" @click.stop="delPeople(item.name)">
              -
            </div>
            <div class="avatar">
              <img :src="filterImg(item.avatar)" alt="">
            </div>
            <h3 class="name">{{ item.name }}</h3>
        </div>
      </div>
  </div>
</template>

<script>
import datas from 'common/js/data'
export default {
  created() {
    this.players = datas
  },
  data() {
    return {
      showDel: false,
      players: []
    }
  },
  methods: {
    filterImg(name) {
      return './images/' + name
    },
    delPeople(name) {
      this.players = this.players.filter(item => {
        return item.name !== name
      })
    },
    select(item) {
      this.$emit('select', item)
    }
  }
}
</script>

<style scoped lang="scss">
  @import "~common/scss/variable.scss";

  .player {
    .box {
      margin-top: 10px;
      padding: 0 10px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-evenly;
      .card {
        margin-top: 5px;
        width: 100px;
        height: 130px;
        position: relative;
        .del {
          width: 18px;
          height: 18px;
          position: absolute;
          right: 0;
          background-color: rgba(255,255,255,.3);
          color: red;
          text-align: center;
          font-size: 32px;
          line-height: 12px;
          font-weight: 800;
        }
        .avatar {
          width: 100px;
          height: 100px;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .name {
          text-align: center;
          line-height: 30px;
          font-weight: 700;
          color: $color-text;
        }
      }
    }
    
  }
</style>