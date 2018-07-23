<template>
  <div id="app">
      <router-view name="header"/>
      <router-view name="userpanel"/>
      <router-view />
      <router-view name="chat"/>
      <router-view name="footer"/>
      <notifications group="notifications" classes="mh-notification" position="bottom right" />
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900');
@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,400,700');
</style>


