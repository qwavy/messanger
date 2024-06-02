import { createWebHistory, createRouter } from "vue-router";
import ChatPage from "@/pages/ChatPage.vue";
import AuthPage from "@/pages/AuthPage.vue";
import ChatList from "@/pages/ChatList.vue";
import RegisterPage from "@/pages/RegisterPage.vue";

const routes = [
  { path: "/", component: ChatList },
  { path: "/chat/:id?", component: ChatPage },
  { path: "/login", component: AuthPage },
  { path: "/register", component: RegisterPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
