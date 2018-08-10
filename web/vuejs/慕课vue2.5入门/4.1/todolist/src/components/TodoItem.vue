<template>
  <li class="item" @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    handleDelete () {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only
 'scoped'属性 作用域限制 局部样式 去掉 如果主组件里有item属性元素，样式会被影响
-->
<style scoped>
.item{
  color: green;
}
</style>
