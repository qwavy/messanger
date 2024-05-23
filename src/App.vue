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
</style>
