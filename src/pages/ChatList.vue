<script setup>
import ChatListItem from "../components/ChatListItem.vue";
import { ScrollArea } from "@/components/ui/scroll-area/index.js";

const data = [
  {
    chatId: 1,
    chatImg: "src/assets/images/logo.png",
    chatName: "Charlie",
    lastMessage: "Stay safe!",
    readed: true,
    muted: false,
  },
  {
    chatId: 2,
    chatImg: "src/assets/images/logo.png",
    chatName: "Mona",
    lastMessage: "Long time no see!",
    readed: false,
    muted: false,
  },
  {
    chatId: 3,
    chatImg: "src/assets/images/logo.png",
    chatName: "Eve",
    lastMessage: "Have you heard the news?",
    readed: true,
    muted: true,
  },
  {
    chatId: 4,
    chatImg: "src/assets/images/logo.png",
    chatName: "Sam",
    lastMessage: "How are you?",
    readed: true,
    muted: false,
  },
  {
    chatId: 5,
    chatImg: "src/assets/images/logo.png",
    chatName: "Hank",
    lastMessage: "Nice to meet you!",
    readed: false,
    muted: true,
  },
  {
    chatId: 6,
    chatImg: "src/assets/images/logo.png",
    chatName: "Alice",
    lastMessage: "Talk to you later!",
    readed: true,
    muted: true,
  },
  {
    chatId: 7,
    chatImg: "src/assets/images/logo.png",
    chatName: "Nina",
    lastMessage: "Good night!",
    readed: false,
    muted: true,
  },
  {
    chatId: 8,
    chatImg: "src/assets/images/logo.png",
    chatName: "Tina",
    lastMessage: "Good night!",
    readed: false,
    muted: false,
  },
  {
    chatId: 9,
    chatImg: "src/assets/images/logo.png",
    chatName: "David",
    lastMessage: "See you soon!",
    readed: true,
    muted: false,
  },
  {
    chatId: 11,
    chatImg: "src/assets/images/logo.png",
    chatName: "Oscar",
    lastMessage: "Goodbye!",
    readed: true,
    muted: true,
  },
  {
    chatId: 12,
    chatImg: "src/assets/images/logo.png",
    chatName: "Paul",
    lastMessage: "Long time no see!",
    readed: true,
    muted: true,
  },
  {
    chatId: 13,
    chatImg: "src/assets/images/logo.png",
    chatName: "Quincy",
    lastMessage: "Have a great day!",
    readed: true,
    muted: false,
  },
  {
    chatId: 14,
    chatImg: "src/assets/images/logo.png",
    chatName: "Mona",
    lastMessage: "Take care!",
    readed: false,
    muted: false,
  },
  {
    chatId: 15,
    chatImg: "src/assets/images/logo.png",
    chatName: "Leo",
    lastMessage: "What's up?",
    readed: false,
    muted: false,
  },
  {
    chatId: 16,
    chatImg: "src/assets/images/logo.png",
    chatName: "Frank",
    lastMessage: "Congratulations!",
    readed: true,
    muted: true,
  },
  {
    chatId: 17,
    chatImg: "src/assets/images/logo.png",
    chatName: "Grace",
    lastMessage: "Talk to you later!",
    readed: false,
    muted: true,
  },
  {
    chatId: 18,
    chatImg: "src/assets/images/logo.png",
    chatName: "Sam",
    lastMessage: "Nice to meet you!",
    readed: false,
    muted: false,
  },
  {
    chatId: 19,
    chatImg: "src/assets/images/logo.png",
    chatName: "Jack",
    lastMessage: "Nice to meet you!",
    readed: false,
    muted: true,
  },
  {
    chatId: 20,
    chatImg: "src/assets/images/logo.png",
    chatName: "Leo",
    lastMessage: "Let's catch up!",
    readed: true,
    muted: false,
  },
  {
    chatId: 22,
    chatImg: "src/assets/images/logo.png",
    chatName: "Rose",
    lastMessage: "Good morning!",
    readed: false,
    muted: true,
  },
  {
    chatId: 23,
    chatImg: "src/assets/images/logo.png",
    chatName: "Tina",
    lastMessage: "Talk to you later!",
    readed: false,
    muted: false,
  },
  {
    chatId: 24,
    chatImg: "src/assets/images/logo.png",
    chatName: "Oscar",
    lastMessage: "Good night!",
    readed: true,
    muted: false,
  },
  {
    chatId: 25,
    chatImg: "src/assets/images/logo.png",
    chatName: "Kathy",
    lastMessage: "Nice to meet you!",
    readed: true,
    muted: false,
  },
  {
    chatId: 26,
    chatImg: "src/assets/images/logo.png",
    chatName: "Grace",
    lastMessage: "What's new?",
    readed: true,
    muted: false,
  },
  {
    chatId: 27,
    chatImg: "src/assets/images/logo.png",
    chatName: "Alice",
    lastMessage: "Nice to meet you!",
    readed: false,
    muted: false,
  },
  {
    chatId: 28,
    chatImg: "src/assets/images/logo.png",
    chatName: "Hank",
    lastMessage: "Good morning!",
    readed: true,
    muted: false,
  },
  {
    chatId: 29,
    chatImg: "src/assets/images/logo.png",
    chatName: "Paul",
    lastMessage: "Take care!",
    readed: true,
    muted: false,
  },
];
</script>

<template>
  <ScrollArea>
    <div class="chat-list">
      <ChatListItem
        v-for="item in data"
        :chat-id="+item.chatId"
        :chat-name="item.chatName"
        :chat-img="item.chatImg"
        :last-message="item.lastMessage"
        :readed="item.readed"
        :muted="item.muted"
      />
    </div>
  </ScrollArea>
</template>

<style scoped>
.chat-list {
  width: 30vw;
  height: 100vh;
}
</style>
