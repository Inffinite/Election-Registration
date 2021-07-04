<template>
  <div class="banner">
    <div class="b-content">
        <div class="b-title">
            Bifa Elections
        </div>
        <div class="b-subtitle">
            Login with your access code to vote
        </div>

        <div class="bc-label">
            Access Code
        </div>
        <input class="h-input" placeholder="************" v-model="code" type="text">
        <button @click="vote" class="r-btn">
            Vote for officials
        </button>
        <!-- <div class="r-vote">
            Register as candidate
        </div> -->
        <div @click="help" class="r-vote">
            Help
        </div>
        <div v-if="codeError" class="admission-info">
            {{ errorMssg }}
        </div>
        <div style="height: 30px;"></div>
        <Loading v-if="loading"/>
    </div>
  </div>
</template>

<script>
import Loading from './loading.vue'

export default {
    metaInfo: {
        title: 'Banner',
        codeError: false,
        errorMssg: '',
        loading: false
    },

    components: {
        Loading
    },

    created(){
        localStorage.removeItem('dxx')
    },

    methods: {
        go(){
            this.$router.push({ name: 'Admission' })
        },

        help(){
            this.$router.push({ name: 'Help' })
        },

        vote(){
            this.$router.push({ name: 'Positions' })
        }
    }
}
</script>

<style>
@import '../styles/banner.css';
@import '../styles/Landing.css';
@import '../styles/admission.css';
</style>