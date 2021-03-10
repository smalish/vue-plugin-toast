<!--
 * @Author: yangying01
 * @description: 
 * @Date: 2020-12-08 20:46:55
 * @LastEditors: yangying01
 * @LastEditTime: 2021-03-10 18:22:18
-->
<template>
  <div id="app">
    <s-button type="primary" @click="showToast">按钮2</s-button>
  </div>
</template>

<script>


export default {
  name: 'App',
  methods: {
    showToast(){
      this.$toast({
        message: 'tmpNum.errMsg'
      })
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
