<template>
  <div>
    <v-header :seller="seller"></v-header>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评论</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"/>
  </div>
</template>

<script>
import {urlParse} from './common/js/util'
import Header from 'components/header/header'
import axios from 'axios'
const ERR_OK = 0
export default {
  name: 'App',
  data () {
    return {
      seller: {
        id: () => {
          let queryParam = urlParse()
          return queryParam.id
        }
      }
    }
  },
  components: {
    'v-header': Header
  },
  created () {
    axios.get('/api/seller?id=' + this.seller.id).then((response) => {
      response = response.data
      if (response.errno === ERR_OK) {
        this.seller = Object.assign({}, this.seller, response.data)
      }
    })
  }
}
</script>

<style lang="stylus" scoped>
  @import "./common/stylus/mixin.styl"
  .tab
    display: flex
    width: 100%
    height: 40px
    line-height: 40px
    border-1px(rgba(7, 17, 27, 0.1))
    .tab-item
      flex: 1
      text-align: center
      & > a
        display: block
        font-size: 14px
        color: rgb(77, 85, 93)
        &.active
          color: rgb(240, 20, 20)
</style>
