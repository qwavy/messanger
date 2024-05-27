<script setup>
import { onMounted, ref, computed } from "vue";
import Message from "../components/Message.vue";
import Input from "../components/CustomInput.vue";
import ChatList from "./ChatList.vue";
import Search from "../components/Search.vue";
import BurgerMenu from "../components/BurgerMenu.vue";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

import { useRoute, useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();

import { ScrollArea } from "@/components/ui/scroll-area/index.js";

import { getData } from "@/api/api.js";

const messages = ref([]);
const user = ref();
const index = +route.params.id[0];
onMounted(async () => {
  user.value = await getData("/data/users.json");
  user.value = user.value[index];
  console.log(user.value.chats);
  messages.value = await getData("/data/messages.json");
});

const search = computed({
  get() {
    return route.query.search ?? "";
  },
  set(search) {
    router.replace({ query: { search } });
  },
});

console.log(search);
</script>

<template>
  <div v-if="user">
    <ResizablePanelGroup direction="horizontal">
      <ResizablePanel id="left-side-panel">
        <div class="left-side">
          <div class="left-side-header">
            <BurgerMenu />
            <Search />
          </div>
          <ChatList :chat-list-data="user.chats" />
        </div>
      </ResizablePanel>
      <ResizableHandle />
      <ResizablePanel id="right-side-panel">
        <div class="current-chat">
          <div class="current-chat-header">
            <div class="current-chat-info">
              <img
                :src="user.userInfo.avatar"
                class="user-avatar"
                alt="avatar"
              />
              <button class="current-chat-leave-btn">
                <img
                  src="../assets/icons/arrow-left.svg"
                  alt="leave from current chat button"
                />
              </button>
              <div class="user-info">
                <h3 class="user-name">{{ user.userInfo.name }}</h3>
                <span
                  v-if="user.userInfo.status === 'Online'"
                  class="user-status user-status-online"
                  >{{ user.userInfo.status }}</span
                >
                <span
                  v-else-if="user.userInfo.status === 'Busy'"
                  class="user-status user-status-busy"
                  >{{ user.userInfo.status }}</span
                >
                <span
                  v-else-if="user.userInfo.status === 'Offline'"
                  class="user-status user-status-offline"
                  >{{ user.userInfo.status }}</span
                >
              </div>
              <div class="current-chat-actions"></div>
            </div>
          </div>
          <ScrollArea>
            <div class="messages-container">
              <Message
                v-for="message in messages"
                :content="message.content"
                :my-message="message.myMessage"
              />
            </div>
          </ScrollArea>
          <div>
            <Input />
          </div>
        </div>
      </ResizablePanel>
    </ResizablePanelGroup>
  </div>
</template>

<style scoped>
.chat-page {
  display: flex;
  justify-content: center;
  width: 100vw;
}
#left-side-panel {
  min-width: 20%;
  max-width: 35%;
}
#right-side-panel {
  min-width: 65%;
  max-width: 80%;
}
.left-side {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.left-side-header {
  height: 100px;
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  border-bottom: 2px solid #dbdbdb;
  border-right: 2px solid #dbdbdb;
}
.current-chat {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
  width: 100%;
}
.current-chat-header {
  display: flex;
  border-bottom: 2px solid #dbdbdb;
  padding: 20px 30px;
}
.current-chat-info {
  display: flex;
  gap: 0 20px;
  height: 100px;
  align-items: center;
}
.user-avatar {
  width: 48px;
  height: 48px;
}
.user-name {
  font-family: "Roboto Bold";
}
.user-status {
  opacity: 0.6;
}
.user-status::before {
  content: "ㅤ";
  display: inline-block;
  position: relative;
  top: 3px;
  right: 8px;
  border-radius: 50%;
  width: 16px;
  height: 16px;
}
.user-status-online::before {
  background-color: #68d391;
}
.user-status-busy::before {
  background-color: #d61313;
}
.user-status-offline::before {
  background-color: #c0c0c0;
}
.messages-container {
  display: flex;
  flex-direction: column;
  width: 95%;
  padding: 0 30px;
  gap: 20px 0;
}

.current-chat-leave-btn {
  display: none;
}
@media (max-width: 1024px) {
  #left-side-panel {
    display: none;
  }
  #right-side-panel {
    max-width: 100%;
    width: 100%;
    margin: auto;
  }
  .current-chat {
    width: 100%;
  }
  .left-side {
    display: none;
  }
  .messages-container {
    display: flex;
    flex-direction: column;
    width: 95vw;
    height: 60vh;
    overflow-y: scroll;
    padding: 0 30px;
    gap: 20px 0;
  }
  .send-message-container {
    display: flex;
    justify-content: space-between;
    width: 90%;
    margin: auto;
  }
  .message-input {
    padding: 14px 15px;
  }
  .current-chat-leave-btn {
    display: block;
  }
}
</style>
