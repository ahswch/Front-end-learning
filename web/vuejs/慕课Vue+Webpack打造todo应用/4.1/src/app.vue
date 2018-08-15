<template>
    <div id="app">
        <div id="cover"></div>
        <Header></Header>
        <todo></todo>
        <Footer></Footer>
    </div>
</template>
<script>
import Header from './todo/header.vue' // 引入Header组件
import Footer from './todo/footer.jsx'
import Todo from './todo/todo.vue'

export default {
   components: { // 声明组件
       Header,
       Footer,
       Todo, // 因为Todo在html没有，所以使用时可以小写
   }
}
</script>
<style lang="stylus" scoped>
    #app{
        position: absolute
        left 0
        right 0
        top 0
        bottom 0
    }
    #cover{
        position: absolute
        left 0
        right 0
        top 0
        bottom 0
        background-color #999
        opacity .8
        z-index -1
    }
</style>
