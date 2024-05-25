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
import { ref, watch } from "vue";

const props = defineProps({
  chatId: Number,
  chatName: String,
  chatImg: String,
  lastMessage: String,
  readed: Boolean,
  muted: Boolean,
});

const mutedData = ref(props.muted);
const mutedClass = ref(mutedData.value ? "unreaded-message" : "muted-message");

const readedData = ref(props.readed);
const readedClass = ref(readedData.value ? "" : "message-info");

const showMutedIcon = ref(mutedData.value ? "none" : "inline-block");

watch(mutedData, () => {
  if (showMutedIcon.value === "inline-block") {
    showMutedIcon.value = "none";
    mutedClass.value = "unreaded-message";
  } else {
    mutedClass.value = "muted-message";
    showMutedIcon.value = "inline-block";
  }
});
watch(readedData, () => {
  if (readedClass.value === "message-info") {
    return (readedClass.value = "");
  }
  return (readedClass.value = "message-info");
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
      <ContextMenuItem>
        <span
          v-if="mutedData"
          class="menu-item"
          @click="mutedData = !mutedData"
        >
          <img src="/src/assets/icons/muted.svg" alt="" class="icon" />
          Mute
        </span>
        <span v-else class="menu-item" @click="mutedData = !mutedData">
          <img src="/src/assets/icons/unmute.svg" alt="" class="icon" />
          Unmute
        </span>
      </ContextMenuItem>
      <ContextMenuItem>
        <span
          v-if="readedData"
          class="menu-item"
          @click="readedData = !readedData"
        >
          <img
            src="/src/assets/icons/mark-as-unreaded.svg"
            alt=""
            class="icon"
          />
          Mark as unreaded
        </span>
        <span v-else class="menu-item" @click="readedData = !readedData">
          <img src="/src/assets/icons/mark-as-readed.svg" alt="" class="icon" />
          Mark as readed
        </span>
      </ContextMenuItem>
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
