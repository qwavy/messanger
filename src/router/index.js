import { createMemoryHistory, createRouter } from "vue-router";
import ChatPage from "@/pages/ChatPage.vue";
import AuthPage from "@/pages/AuthPage.vue";

const routes = [
  { path: "/", component: AuthPage },
  { path: "/chat/:id", component: ChatPage },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
