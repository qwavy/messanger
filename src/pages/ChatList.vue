<script setup>
import ChatListItem from "../components/ChatListItem.vue";
import { ScrollArea } from "@/components/ui/scroll-area/index.js";
import { onMounted, ref, watch } from "vue";
import { getData } from "@/api/api.js";
import { useRouter } from "vue-router";

const props = defineProps({
  chatListData: Array,
});

const chatListItems = ref(props.chatListData);

const router = useRouter();

onMounted(async () => {
  if (!chatListItems.value) {
    chatListItems.value = await getData("/data/users.json");
    chatListItems.value = chatListItems.value[0].chats;
  } else {
  }
});
</script>

<template>
  <ScrollArea>
    <div class="chat-list">
      <ChatListItem
        v-for="item in chatListItems"
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
@media (max-width: 1024px) {
  .chat-list {
    width: 90%;
    margin: auto;
  }
}
</style>
