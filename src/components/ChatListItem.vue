<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
const props = defineProps({
  chatId: Boolean,
  chatName: String,
  chatImg: String,
});
</script>

<template>
  <div class="chat-list-item">
    <Avatar>
      <AvatarImage :src="chatImg" alt="@radix-vue" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
    <h3 class="chat-item-name">{{ chatName }}</h3>
  </div>
</template>

<style scoped>
.chat-list-item {
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
}
.chat-item-img {
  width: 54px;
  height: 54px;
  border-radius: 50%;
  margin-right: 8px;
}
.chat-item-name {
  font-family: "Roboto Bold";
  font-size: 18px;
}
</style>
