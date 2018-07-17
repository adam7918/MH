<template>
  <div id="app">
      <router-view name="header"/>
      <router-view />
      <router-view name="footer"/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700');
</style>


