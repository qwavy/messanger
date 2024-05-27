import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";

import { createWebHistory, createRouter } from "vue-router";
import ChatPage from "./pages/ChatPage.vue";
import AuthPage from "@/pages/AuthPage.vue";

const routes = [
  { path: "/", component: AuthPage },
  { path: "/chat/:id", component: ChatPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// import "firebase/compat/firestore";
// import "firebase/compat/auth";
// import firebase from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyD4QimdsqDaTbYY4pIr7g-BqznrkAd0VXc",
  authDomain: "messenger-654cc.firebaseapp.com",
  projectId: "messenger-654cc",
  storageBucket: "messenger-654cc.appspot.com",
  messagingSenderId: "1004683648120",
  appId: "1:1004683648120:web:e5f0c20055ce73a101e18d",
  measurementId: "G-1FDFZY0V4M",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// const firestore = firebase.firestore();

createApp(App).use(router).mount("#app");
