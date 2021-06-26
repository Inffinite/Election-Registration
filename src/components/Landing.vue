<template>
  <div class="hello">
    <div class="h-content">
      <div class="h-title">Bifa Elections</div>
      <div class="h-subtitle">Register for the election.</div>
      <div class="h-label">First Name</div>
      <input
        class="h-input"
        v-model="fname"
        placeholder="John"
        type="text"
        required
      />

      <div v-if="nameError" class="admission-info">
        {{ nameError }}
      </div>

      <div class="h-label">Second Name</div>
      <input
        class="h-input"
        v-model="lname"
        placeholder="Doe"
        type="text"
        required
      />
      <div v-if="nameError" class="admission-info">
        {{ nameError }}
      </div>

      <div class="h-label">Email Address</div>
      <input
        class="h-input"
        placeholder="johndoe@gmail.com"
        v-model="email"
        type="text"
        required
      />
      <div v-if="emailError" class="admission-info">
        {{ emailError }}
      </div>

      <div class="h-label">Phone</div>
      <input
        class="h-input"
        v-model="phone"
        placeholder="0745367865"
        type="number"
        required
      />
      <div v-if="phoneError" class="admission-info">
        {{ phoneError }}
      </div>

      <button @click="register()" class="r-btn">
        Register
      </button>

      <button @click="help" class="h-btn">Help</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import url from "./url";

export default {
  name: "HelloWorld",
  data() {
    return {
      fname: "",
      lname: "",
      email: "",
      phone: "",
      emailError: "",
      phoneError: "",
      nameError: "",
    };
  },

  methods: {
    emailErr(status) {
      if (status == true) {
        this.emailError = "The email you entered is already in use.";
      } else {
        this.emailError = "";
      }
    },

    phoneErr(status) {
      if (status == true) {
        this.phoneError = "The phone number you entered is already in use.";
      } else {
        this.phoneError = "";
      }
    },

    nameErr(status) {
      if (status == true) {
        this.nameError = "This name combination has already been taken.";
      } else {
        this.nameError = "";
      }
    },

    register() {
      if (!this.fname || !this.lname || !this.email || !this.phone) {
        alert("Fill all fields human!");
      } else {
        // email
        axios
          .post(`${url}/checkEmail`, {
            email: this.email,
          })
          .then((res) => {
            console.log(res);
            this.emailErr(false);

            // phone
            axios
              .post(`${url}/checkPhone`, {
                phone: this.phone,
              })
              .then((res) => {
                console.log(res);
                this.phoneErr(false);

                // names
                axios
                  .post(`${url}/checkName`, {
                    fname: this.fname,
                    lname: this.lname,
                  })
                  .then((res) => {
                    console.log(res);
                    this.nameErr(false);

                    // main

                    let c = localStorage.getItem('course')
                    let a = localStorage.getItem('admission')
                    axios
                      .post(`${url}/users`, {
                        fname: this.fname,
                        lname: this.lname,
                        email: this.email,
                        phone: this.phone,
                        course: c,
                        admission: a,
                      })
                      .then((res) => {
                        console.log(res.status);
                        this.$router.push({ name: 'Success' })
                      })
                      .catch((e) => {
                        console.log(e);
                      });
                  })
                  .catch((e) => {
                    console.log(e);
                    this.nameErr(true);
                  });
              })
              .catch((e) => {
                console.log(e);
                this.phoneErr(true);
              });
          })
          .catch((e) => {
            console.log(e);
            this.emailErr(true);
          });
      }
    },

    help() {
      this.$router.push({ name: "Help" });
    },
  },
};
</script>

<style>
@import "../styles/Landing.css";
@import "../styles/admission.css";
</style>