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
  width: 50vw;
}
</style>
