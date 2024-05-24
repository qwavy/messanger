<script setup>
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  ContextMenu,
  ContextMenuCheckboxItem,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuLabel,
  ContextMenuRadioGroup,
  ContextMenuRadioItem,
  ContextMenuSeparator,
  ContextMenuShortcut,
  ContextMenuSub,
  ContextMenuSubContent,
  ContextMenuSubTrigger,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
const props = defineProps({
  chatId: Number,
  chatName: String,
  chatImg: String,
});
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>
      <div class="chat-list-item">
        <Avatar>
          <AvatarImage :src="chatImg" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h3 class="chat-item-name">{{ chatName }}</h3>
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>Profile</ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
      <ContextMenuItem>Team</ContextMenuItem>
      <ContextMenuItem>Subscription</ContextMenuItem>
    </ContextMenuContent>
  </ContextMenu>
</template>

<style scoped>
.chat-list-item {
  width: 100%;
  height: 72px;
  display: flex;
  align-items: center;
  gap: 30px;
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
