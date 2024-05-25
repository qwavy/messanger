<script setup>
import ChatListItem from "../components/ChatListItem.vue";
import { ScrollArea } from "@/components/ui/scroll-area/index.js";
import { onMounted, ref } from "vue";

const props = defineProps({
  chatListData: Array,
});

onMounted(() => {});
</script>

<template>
  <ScrollArea>
    <div class="chat-list">
      <ChatListItem
        v-for="item in chatListData"
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
