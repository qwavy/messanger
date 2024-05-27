<script setup>
import { computed, ref } from "vue";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const userName = ref("");
const userPass = ref("");
const showPass = ref(false);

const auth = getAuth();

const loginByGoogle = async () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user);
      // IdP data available using getAdditionalUserInfo(result)
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.customData.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
};
</script>

<template>
  <div class="auth-page">
    <div class="auth-page-wrapper">
      <img src="../assets/images/logo.png" alt="logo" class="logo" />
      <input
        class="auth-page-input input-username"
        v-model="userName"
        placeholder="username"
      />
      <div class="input-password-container auth-page-input">
        <input
          class="input-password"
          v-model="userPass"
          placeholder="password"
          :type="showPass ? 'text' : 'password'"
        />
        <button class="show-pass-icon" @click="showPass = !showPass">
          <img
            :src="
              showPass
                ? 'src/assets/icons/show-pass.svg'
                : 'src/assets/icons/hide-pass.svg'
            "
            alt="show/hide pass icon"
          />
        </button>
      </div>
      <button @click="login" class="btn register-btn">Register</button>
      <button @click="loginByGoogle" class="btn register-btn google-btn">
        Login By google
      </button>
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
