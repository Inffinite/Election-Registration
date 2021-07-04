<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>

export default ({
  metaInfo: {
    title: 'Bifa Elections Registration',
    titleTemplate: '%s | Bifa',
    htmlAttrs: {
      lang: 'en-us'
    },
    meta: [
      { charset: 'utf-8' },
      { property: 'og:image', content: "https://images.unsplash.com/photo-1602432596754-630e919e67a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80"},
      { name: 'description', content: 'Buruburu Institute of Fine Arts election registration.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
})
</script>


<style>
</style>
