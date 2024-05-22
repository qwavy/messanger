<script setup>
import ChatListItem from "../components/ChatListItem.vue";

const data = [
  {
    chatId: 1,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 2,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 3,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 4,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 5,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 6,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 7,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 8,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 9,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 11,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 12,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 13,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 14,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 15,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 16,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 17,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 18,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 19,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 20,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 22,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 23,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 24,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 25,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 26,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 27,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 28,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
  {
    chatId: 29,
    chatName: "PandaFx",
    chatImg: "src/assets/images/logo.png",
  },
];
</script>

<template>
  <div class="chat-list">
    <ChatListItem
      v-for="item in data"
      :chat-id="+item.chatId"
      :chat-name="item.chatName"
      :chat-img="item.chatImg"
    />
  </div>
</template>

<style scoped>
.chat-list {
  width: 30vw;
  height: 100vh;
  overflow-y: scroll;
}
</style>
