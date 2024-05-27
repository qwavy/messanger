<script setup>
import Message from "./components/Message.vue";
import Input from "./components/CustomInput.vue";
import AuthPage from "./pages/AuthPage.vue";
import ChatPage from "./pages/ChatPage.vue";
import ChatList from "./pages/ChatList.vue";
import BurgerMenu from "@/components/BurgerMenu.vue";
</script>

<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<style>
:root {
  --main-purple: #615ef0;
}
@font-face {
  font-family: "Roboto";
  src: url("/src/assets/fonts/Roboto-Regular.ttf");
}
@font-face {
  font-family: "Roboto Bold";
  src: url("/src/assets/fonts/Roboto-Bold.ttf");
}
body {
  font-family: Roboto;
  padding: 0px 20px;
}

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  box-shadow: inset 0 0 1px grey;
  border-radius: 10px;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #dbdbdb;
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #c0c0c0;
}

body {
  overflow-x: hidden;
}
@media (max-width: 1024px) {
  body {
    padding: 0;
  }
}
</style>
