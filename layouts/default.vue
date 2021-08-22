<template>
  <div class="app">
    <Menu />
    <Nuxt />
  </div> 
</template>

<script>
export default {
  data() {
    return {
      results: []
    }  
  },
  computed: {
    meta () {
      return [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, maximum-scale=1 shrink-to-fit=no'
        },
        { hid: 'description', name: 'description', content: 'Главная' }
      ]
    }
  },
  head () {
    const canonical = `https://mysite.com${this.$route.path
      .toLowerCase()
      .replace(/\/$/, '')}`
    return {
      meta: [
        ...this.meta

      ],
      script: [
        // { src: 'https://markknol.github.io/console-log-viewer/console-log-viewer.js' }
      ],
      link: [{ rel: 'canonical', href: canonical }]
    }
  }
}
</script>

<style lang="scss">
body {
  overflow: hidden;
  .app {
    height: 100vh;
    width: 100vw;
    display: flex;
    background-color: #141414;
  }
} 
</style>