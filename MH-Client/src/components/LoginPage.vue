<template>
    <main>
        <section class="banner"></section>
        <div class="container">
            <h1>Medieval <span>Havoc</span> </h1>
            <div class="box" id="box">
                <input type="text" placeholder="username">
                <input type="password" placeholder="password">
                <input type="submit" value="LOGIN">
                <span>No account yet? Click <a>here</a> to register.</span> 
            </div>
        </div>
    </main>
</template>
<script>
export default {
    data() {
      return {
          username: '',
          password: ''
      }
    },
    created() {

    },
    methods: {
    
    }
}
</script>
