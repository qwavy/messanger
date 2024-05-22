<script setup>
import { ref } from "vue";
import Message from "../components/Message.vue";
import Input from "../components/Input.vue";
import ChatList from "./ChatList.vue";
import Search from "../components/Search.vue";
import BurgerMenu from "../components/BurgerMenu.vue";
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
    <div class="left-side">
      <div class="left-side-header">
        <BurgerMenu />
        <Search />
      </div>
      <ChatList />
    </div>
    <div class="current-chat">
      <div class="current-chat-header">
        <button class="current-chat-leave-btn">
          <img
            src="../assets/icons/arrow-left.svg"
            alt="leave from current chat button"
          />
        </button>
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
  justify-content: center;
  width: 100vw;
}
.left-side {
  width: 30%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}
.left-side-header {
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #dbdbdb;
  border-right: 2px solid #dbdbdb;
}
.current-chat {
  width: 65%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 30px;
}
.current-chat-header {
  display: flex;
  gap: 0 20px;
  height: 100px;
  align-items: center;
  border-bottom: 2px solid #dbdbdb;
  padding: 20px 30px;
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
  overflow-y: scroll;
  padding: 0 30px;
  gap: 20px 0;
}

.current-chat-leave-btn {
  display: none;
}
@media (max-width: 1024px) {
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
