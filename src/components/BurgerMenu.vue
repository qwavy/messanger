<script setup>
import { ref } from "vue";

const isActive = ref(false);
</script>

<template>
  <button @click="isActive = !isActive">
    <img
      class="burger-menu"
      src=".././assets/icons/burger-menu.svg"
      alt="burger menu icon"
    />
  </button>
  <div :class="isActive ? 'active-burger-menu' : ''" class="content">
    <span>
      <img src=".././assets/icons/settings.svg" alt="settings icon" />
      Settings
    </span>
  </div>
</template>

<style scoped>
.content {
  display: none;
  position: absolute;
  height: 300px;
  width: 300px;
  top: 50px;
  align-items: center;
}
.content:nth-child(1n) {
  display: flex;
  align-items: center;
}
.active-burger-menu {
  display: flex;
}
</style>
