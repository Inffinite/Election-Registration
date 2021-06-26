<template>
  <div class="banner">
    <div class="b-content">
        <img class="b-img" src="https://images.unsplash.com/photo-1602432596754-630e919e67a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=763&q=80" alt="">
        <div class="b-time">
            30s Read
        </div>
        <div class="b-title">
            Bifa online elections registration
        </div>
        <div class="b-subtitle">
            by <span class="author">@Lewis</span>
        </div>

        <div class="stuff">
            This year the election has been divided into two,
            <span class="r">registration</span> and <span class="r">voting</span>. Here you will register yourself 
            as a voter. <br> 

            A unique <span class="author">access code</span> will be automatically sent to the email 
            address you provided after you have registered. <br> <br>

            That <span class="author">access code</span> will be used to identify you and vote securely 
            on the election platform later. <br><br>
            
            Keep it safe and do not show it to other voters.

            
        </div>

        <button @click="go" class="b-btn">
            Understood
        </button>
        
        <button @click="help" class="cn-btn">
            Contact me
            <svg class="cn-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"/></svg>
        </button>
    </div>
  </div>
</template>

<script>
export default {
    methods: {
        go(){
            this.$router.push({ name: 'Admission' })
        },

        help(){
            this.$router.push({ name: 'Help' })
        }
    }
}
</script>

<style>
@import '../styles/banner.css';
</style>