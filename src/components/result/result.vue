<template>
  <div class="result">
    <div class="showRes">
      <div class="back" @click="back">
        <i class="icon icon-arrow-left"></i>
      </div>
      <div class="list">
        <ul v-for="(item, index) in players" :key="index">
          <h1>第{{index + 1}}组</h1>
          <li v-for="group in item" :key="group.name">{{group.name}}、{{group.height}}cm、{{group.weight}}kg</li>
          <li>{{ avg(item) }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    results: {
      default: () => [],
      type: Array
    },
    number: {
      default: 0,
      type: Number
    }
  },
  created() {
    this.sort()
  },
  data() {
    return {
      players: []
    }
  },
  methods: {
    avg(arr) {
      let len = arr.length
      let h = 0
      let w = 0
      arr.forEach(item => {
        h += parseInt(item.height)
        w += parseInt(item.weight)
      })
      h = parseFloat(h / len)
      w = parseFloat(w / len)
      h = String(h).length > 5 ? String(h).slice(0,5) : String(h)
      w = String(w).length > 5 ? String(w).slice(0,5) : String(w)
      return `平均身高：${h}cm 平均体重：${w}kg`
    },
    sort() {
      this.players = this.shuffle(this.results);

      let newArr = []
      let temp = []
      let num = this.number
      for (let i = 0; i < this.players.length; i++) {
        if (i % num === 0 && i !== 0) {
          newArr.push(temp)
          temp = []
        }
        temp.push(this.players[i])
        if (i === this.players.length - 1) {
          newArr.push(temp)
          break
        }
      }

      this.players = newArr
    },
    back() {
      this.$emit("back")
    },
    getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min)
    },
    // 随机排序数组
    shuffle(arr) {
      let _arr = arr.slice()
      for (let i = 0; i < _arr.length; i++) {
        let j = this.getRandomInt(0, i)
        let t = _arr[i]
        _arr[i] = _arr[j]
        _arr[j] = t
      }
      return _arr
    }
  },
  computed: {
    height() {
      return 1
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~common/scss/variable.scss";
.result {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: $color-background;
  .showRes {
    height: 100vh;
    .back {
      position: absolute;
      left: 5px;
      top: 10px;
      color: #aaa;
      i {
        font-size: 24px;
      }
    }
    .list {
      margin-top: 42px;
      width: 100%;
      height: 200px;
      ul {
        margin-top: 15px;
        padding: 0 30px;
        h1 {
          font-weight: 700;
          text-align: center;
        }
        li {
          margin: 15px 0;
          padding-bottom: 5px;
          border-bottom: 1px solid #aaa;
          text-align: center;
        }
      }
    }
  }
}
</style>