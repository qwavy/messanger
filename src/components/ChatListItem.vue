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
import { ref } from "vue";

const props = defineProps({
  chatId: Number,
  chatName: String,
  chatImg: String,
  lastMessage: String,
  readed: Boolean,
  muted: Boolean,
});
const readedClass = ref(props.readed ? "" : "message-info");
const mutedClass = ref(props.muted ? "unreaded-message" : "muted-message");

const showMutedIcon = ref(props.muted ? "none" : "inline-block");
</script>

<template>
  <ContextMenu>
    <ContextMenuTrigger>
      <div class="chat-list-item">
        <Avatar>
          <AvatarImage :src="chatImg" alt="@radix-vue" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div class="chat-item-info">
          <h3 class="chat-item-name">
            {{ chatName }}
          </h3>

          <span>{{ lastMessage }}</span>
        </div>
        <div :class="[readedClass, mutedClass]"></div>
      </div>
    </ContextMenuTrigger>
    <ContextMenuContent>
      <ContextMenuItem>
        <span class="menu-item">
          <img src="/src/assets/icons/user-black.svg" class="icon" alt="" />
          Profile
        </span>
      </ContextMenuItem>
      <ContextMenuItem>Billing</ContextMenuItem>
      <ContextMenuItem>Team</ContextMenuItem>
      <ContextMenuItem
        ><span class="menu-item delete-chat">
          <img
            class="delete-chat-icon icon"
            src=".././assets/icons/trash.svg"
            alt=""
          />
          Delete Chat</span
        ></ContextMenuItem
      >
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
  display: flex;
  gap: 5px;
}
.chat-item-name::after {
  display: v-bind(showMutedIcon);

  content: url(".././assets/icons/muted.svg");
}
.menu-item {
  display: flex;
  gap: 0 10px;
}

.delete-chat {
  color: #d61313;
}
.icon {
  width: 16px;
  height: 16px;
}
.message-info {
  width: 16px;
  height: 16px;
  border-radius: 50%;
  margin-left: auto;
}
.unreaded-message {
  background-color: #01c73f;
}
.muted-message {
  background-color: #c4c9cc;
}
</style>
