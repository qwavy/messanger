import { createApp } from "vue";
import "./assets/index.css";
import App from "./App.vue";

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyD4QimdsqDaTbYY4pIr7g-BqznrkAd0VXc",
  authDomain: "messenger-654cc.firebaseapp.com",
  projectId: "messenger-654cc",
  storageBucket: "messenger-654cc.appspot.com",
  messagingSenderId: "1004683648120",
  appId: "1:1004683648120:web:e5f0c20055ce73a101e18d",
  measurementId: "G-1FDFZY0V4M",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

import { createPinia } from "pinia";
import { router } from "@/router/router.js";

createApp(App).use(createPinia()).use(router).mount("#app");
