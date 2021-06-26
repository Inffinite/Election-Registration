<template>
  <div class="success">
    <div class="s-content">
      <div class="s-title">Registered Successfully</div>
      <div class="s-subtitle">Enter the <span>access code</span> below sent to your email to confirm its validity.</div>
      
      <div style="height: 20px;"></div>
      <div class="h-label">Access Code</div>
      <input
        class="h-input"
        placeholder="************"
        v-model="mycode"
        type="text"
        required
      />

      <button @click="getUser" class="r-btn">
          Test
      </button>

      <div v-if="invalid" class="invalid">
          Invalid Access Code
      </div>

      <div v-if="user" class="user">
          <div class="s-label">
            First Name
          </div>
          <div class="s-value">
            {{ user.fname }}
          </div>
          <div style="height: 20px;"></div>

          <div class="s-label">
            Last Name
          </div>
          <div class="s-value">
            {{ user.lname }}
          </div>
          <div style="height: 20px;"></div>

          <div class="s-label">
            Email
          </div>
          <div class="s-value">
            {{ user.email }}
          </div>
          <div style="height: 20px;"></div>

          <div class="s-label">
            phone
          </div>
          <div class="s-value">
            {{ user.phone }}
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import url from './url'

export default {
    data(){
        return {
            user: '',
            mycode: '',
            invalid: false
        }
    },

    methods: {
        getUser(){
            axios.post(`${url}/getMe`, {
                accessCode: this.mycode
            }).then((res) => {
                this.invalid = false
                this.user = res.data[0]
            }).catch((e) => {
                console.log(e)
                this.invalid = true

            })
        }
    }
};
</script>

<style>
@import "../styles/success.css";
@import "../styles/Landing.css";
</style>