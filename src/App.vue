<template>
  <div id="app">
      <router-view name="header"/>
      <router-view name="userpanel"/>
      <router-view />
      <router-view name="chat"/>
      <router-view name="footer"/>
      <notifications group="notifications" classes="mh-notification" position="bottom left" />
  </div>
</template>

<script>


export default {
  name: 'App',
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Oswald:500,600,700');
@import url('https://fonts.googleapis.com/css?family=Montserrat:500,600,700,800');
</style>


