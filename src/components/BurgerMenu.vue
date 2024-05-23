<script setup>
import { ref } from "vue";

const isActive = ref(false);
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
</script>

<template>
  <button @click="isActive = !isActive"></button>
  <div :class="isActive ? 'active-burger-menu' : ''" class="content"></div>
  <Menubar>
    <MenubarMenu>
      <MenubarTrigger>
        <img
          class="burger-menu"
          src=".././assets/icons/burger-menu.svg"
          alt="burger menu icon"
        />
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem>
          Settings

          <MenubarShortcut>
            <img src=".././assets/icons/settings.svg" alt="settings icon" />
          </MenubarShortcut>
        </MenubarItem>
        <MenubarItem>
          My Account

          <MenubarShortcut>
            <img src=".././assets/icons/user-black.svg" alt="user icon" />
          </MenubarShortcut>
        </MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Share</MenubarItem>
        <MenubarSeparator />
        <MenubarItem>Print</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  </Menubar>
</template>

<style scoped>
.content {
  display: none;
  position: relative;
  height: 300px;
  width: 300px;
  top: 30px;
  left: 100px;
  align-items: center;
}
.active-burger-menu.content:nth-child(1n) {
  display: flex;
}
.active-burger-menu {
  display: flex;
}
</style>
