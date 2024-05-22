<script setup>
import { ref } from "vue";
import Message from "../components/Message.vue";
import Input from "../components/Input.vue";
import ChatList from "./ChatList.vue";
const data = ref([
  {
    userInfo: {
      avatar: "src/assets/icons/user-avatar.svg",
      name: "Nursultan",
      status: "Offline",
    },
  },
]);
const messages = [
  {
    content: "Hello",
    myMessage: false,
  },
  {
    content: "Hello",
    myMessage: true,
  },
  {
    content: "How are you today?",
    myMessage: false,
  },
  {
    content: "iam fine thank you and you?",
    myMessage: true,
  },
  {
    content: "m2",
    myMessage: false,
  },
  {
    content: "thats good . What you want to do in your birthday?",
    myMessage: true,
  },
  {
    content: "I want watch football and i want win of my team",
    myMessage: false,
  },
  {
    content: "real madrid today is worst",
    myMessage: true,
  },
  {
    content: "yes i know",
    myMessage: false,
  },
  {
    content: "Hello",
    myMessage: false,
  },
  {
    content: "Hello",
    myMessage: true,
  },
  {
    content: "How are you today?",
    myMessage: false,
  },
  {
    content: "iam fine thank you and you?",
    myMessage: true,
  },
  {
    content: "m2",
    myMessage: false,
  },
  {
    content: "thats good . What you want to do in your birthday?",
    myMessage: true,
  },
  {
    content: "I want watch football and i want win of my team",
    myMessage: false,
  },
  {
    content: "real madrid today is worst",
    myMessage: true,
  },
  {
    content: "yes i know",
    myMessage: false,
  },
];
</script>

<template>
  <div class="chat-page">
    <div class="chat-list">
      <ChatList />
    </div>
    <div class="current-chat">
      <div class="current-chat-header">
        <img :src="data[0].userInfo.avatar" class="user-avatar" alt="avatar" />
        <div class="user-info">
          <h3 class="user-name">{{ data[0].userInfo.name }}</h3>
          <span
            v-if="data[0].userInfo.status === 'Online'"
            class="user-status user-status-online"
            >{{ data[0].userInfo.status }}</span
          >
          <span
            v-else-if="data[0].userInfo.status === 'Busy'"
            class="user-status user-status-busy"
            >{{ data[0].userInfo.status }}</span
          >
          <span
            v-else-if="data[0].userInfo.status === 'Offline'"
            class="user-status user-status-offline"
            >{{ data[0].userInfo.status }}</span
          >
        </div>
      </div>
      <div class="messages-container">
        <Message
          v-for="message in messages"
          :content="message.content"
          :my-message="message.myMessage"
        />
      </div>
      <div>
        <Input />
      </div>
    </div>
  </div>
</template>

<style scoped>
.chat-page {
  display: flex;
}
.chat-list {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.current-chat {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.current-chat-header {
  display: flex;
  gap: 20px;
  height: 100px;
  align-items: center;
  border-bottom: 2px solid #dbdbdb;
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
  height: 600px;
  overflow-y: scroll;
  padding: 0 30px;
  gap: 20px 0;
}
@media (max-width: 1024px) {
  .chat-list {
    display: none;
  }
  .messages-container {
    display: flex;
    flex-direction: column;
    width: 95vw;
    height: 600px;
    overflow-y: scroll;
    padding: 0 30px;
    gap: 20px 0;
  }
}
</style>
