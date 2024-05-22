<script setup>
import Message from "./components/Message.vue";
import Input from "./components/Input.vue";
import AuthPage from "./pages/AuthPage.vue";
import ChatPage from "./pages/ChatPage.vue";
import ChatList from "./pages/ChatList.vue";

const messages = [
  {
    content: "hello",
    myMessage: false,
  },
  {
    content: "hello ",
    myMessage: true,
  },
  {
    content: "what is your name",
    myMessage: false,
  },
  {
    content: "n",
    myMessage: true,
  },
  {
    content: "my name is a",
    myMessage: false,
  },
];
</script>

<template>
  <ChatPage />
</template>

<style>
body {
  font-family: Roboto;
}
</style>
