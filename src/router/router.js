import { createWebHistory, createRouter } from "vue-router";
import ChatPage from "@/pages/ChatPage.vue";
import AuthPage from "@/pages/AuthPage.vue";

const routes = [
  { path: "/", component: AuthPage },
  { path: "/chat/:id", component: ChatPage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
