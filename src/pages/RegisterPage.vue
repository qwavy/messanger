<script setup>
import { computed, ref } from "vue";
import { useUserStore } from "@/stores/UserStore.js";
import { useRouter } from "vue-router";
import axios from "axios";

import {
  RadioGroup,
  RadioGroupItem,
} from "@/components/ui/radio-group/index.js";
import { Label } from "@/components/ui/label/index.js";

const userStore = useUserStore();

const router = useRouter();

const fullName = ref("");
const username = ref("");
const password = ref("");
const confirmPassword = ref("");
const gender = ref("");
const showPassword = ref(false);
const showConfirmPassword = ref(false);

const token = ref();

const login = async () => {
  try {
    axios
      .post("http://localhost:5000/api/auth/signup", {
        fullName,
        username,
        password,
        confirmPassword,
        gender,
      })
      .then((res) => console.log(res));
  } catch (e) {
    console.log(e.message);
  }
};
</script>

<template>
  <div class="auth-page">
    <div class="auth-page-wrapper">
      <img src="../assets/images/logo.png" alt="logo" class="logo" />
      <input
        class="auth-page-input input-username"
        v-model="fullName"
        placeholder="full name"
      />
      <input
        class="auth-page-input input-username"
        v-model="username"
        placeholder="username"
      />

      <div class="input-password-container auth-page-input">
        <input
          class="input-password"
          v-model="password"
          placeholder="password"
          :type="showPassword ? 'text' : 'password'"
        />
        <button class="show-pass-icon" @click="showPassword = !showPassword">
          <img
            :src="
              showPassword
                ? 'src/assets/icons/show-pass.svg'
                : 'src/assets/icons/hide-pass.svg'
            "
            alt="show/hide pass icon"
          />
        </button>
      </div>
      <div class="input-password-container auth-page-input">
        <input
          class="input-password"
          v-model="confirmPassword"
          placeholder="confirm password"
          :type="showConfirmPassword ? 'text' : 'password'"
        />
        <button
          class="show-pass-icon"
          @click="showConfirmPassword = !showConfirmPassword"
        >
          <img
            :src="
              showConfirmPassword
                ? 'src/assets/icons/show-pass.svg'
                : 'src/assets/icons/hide-pass.svg'
            "
            alt="show/hide pass icon"
          />
        </button>
      </div>
      <div class="gender-choice">
        <RadioGroup default-value="male" v-model="gender">
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r1" value="male" />
            <Label style="color: var(--main-purple)" for="r1">Male</Label>
          </div>
          <div class="flex items-center space-x-2">
            <RadioGroupItem id="r2" value="female" />
            <Label style="color: var(--main-purple)" for="r2">Female</Label>
          </div>
        </RadioGroup>
      </div>
      <button @click="login" class="btn register-btn">Register</button>
    </div>
  </div>
</template>

<style scoped>
.auth-page {
  width: 100vw;
  height: 100vh;
}

.auth-page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  height: 100vh;
  gap: 30px;
}

.auth-page-input {
  font-family: "Roboto", serif;
  background-color: var(--main-purple);
  border: 2px solid var(--main-purple);
  padding: 7px 37px;
  outline: none;
  color: #fff;
  font-weight: 300;
  font-size: 14px;
  line-height: 143%;
  border-radius: 12px;
}

.auth-page-input::placeholder {
  color: #fff;
}

.input-username {
  background-image: url("src/assets/icons/user.svg");
  background-position: 4%;
  background-repeat: no-repeat;
}

.input-password {
  flex-grow: 1;
  outline: none;
  background-color: inherit;
  border: none;
  margin-left: 15px;
  color: #fff;
}
.input-password::placeholder {
  color: #fff;
}
.input-password-container {
  display: flex;
  padding: 7px 20px;
  width: 250px;
  height: 38px;
  background-image: url("src/assets/icons/lock.svg");
  background-position: 2%;
  background-repeat: no-repeat;
}

.logo {
  width: 120px;
}

.register-btn {
  background-color: var(--main-purple);
  color: #fff;
}

.show-pass-icon {
  background-color: inherit;
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
}

.register-btn {
  padding: 8px 12px;
  border-radius: 12px;
  width: 200px;
}

.google-btn {
  background-color: #fff;
  border: 2px solid #000;
  color: #000;
  background-image: url("/src/assets/icons/google-icon.svg");
  background-repeat: no-repeat;
  background-position: 5%;
  background-size: 24px;
}
</style>
