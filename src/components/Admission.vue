<template>
  <div class="admission">
    <div class="h-content">
      <div class="h-title">Bifa Elections</div>
      <div class="h-subtitle">Select your course and admission number</div>

      <div class="h-label">Course</div>
      <div @click="openTab" class="h-course">
        <div class="c-course">
          {{ selected }}
        </div>
        <svg
          class="c-icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path
            d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0S4.924 9.581 4.516 9.163c-.409-.418-.436-1.17 0-1.615z"
          />
        </svg>
      </div>

      <div class="course-select">
        <div @click="selectTab(1)" :class="diploma">Diploma</div>
        <div style="height: 8px"></div>
        <div @click="selectTab(2)" :class="certificate">Certificate</div>
      </div>

      <div class="h-label">Admission Number</div>
      <div class="h-input-wrapper">
        <input
          v-model="admission"
          class="h-input"
          placeholder="2608"
          type="number"
        />
      </div>
      <div v-if="admiError" class="admission-info">
        {{ admiError }}
      </div>

      <button @click="reg" class="r-btn">Continue</button>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";
import axios from "axios";
import url from "./url";

export default {
  data() {
    return {
      selected: "Diploma",
      diploma: "course-tab-selected",
      certificate: "course-tab",
      select: false,
      admiError: "",
      course: 1,
      admission: "",
    };
  },

  watch: {
    admission: {
      handler(value) {
        if (value.length > 4) {
          return this.admissionError(
            true,
            "Remove BD or BC from your admission"
          );
        } else {
          return this.admissionError(false, "");
        }
      },
    },
  },

  methods: {
    admissionError(status, message) {
      if (status == true) {
        this.admiError = message;
      } else {
        this.admiError = "";
      }
    },

    reg() {
      axios.post(`${url}/checkAdmission`, {
        admission: this.admission,
        course: this.course
      })
      .then((res) => {
        console.log(res)
        this.admissionError(false, "")

        localStorage.setItem('course', this.course)
        localStorage.setItem('admission', this.admission)

        this.$router.push({
          name: "Home"
        });
      })
      .catch((e) => {
        console.log(e)
        this.admissionError(true, "This admission number is alreay in use")
      })
      
    },

    async openTab() {
      switch (this.select) {
        case false:
          await gsap.to(".course-select", {
            ease: "power3.easeOut",
            opacity: 1,
            y: 0,
            display: "block",
          });
          this.select = true;
          break;

        case true:
          await gsap.to(".course-select", {
            ease: "power3.easeOut",
            opacity: 0,
            y: -25,
            display: "none",
          });
          this.select = false;
          break;

        default:
          break;
      }
    },

    selectTab(n) {
      switch (n) {
        case 1:
          this.selected = "Diploma";
          this.course = 1;
          this.diploma = "course-tab-selected";
          this.certificate = "course-tab";
          this.openTab();
          break;

        case 2:
          this.selected = "Certificate";
          this.course = 0;
          this.certificate = "course-tab-selected";
          this.diploma = "course-tab";
          this.openTab();
          break;

        default:
          break;
      }
    },
  },
};
</script>

<style>
@import "../styles/admission.css";
@import "../styles/Landing.css";
</style>