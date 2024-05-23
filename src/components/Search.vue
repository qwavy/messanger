<script setup>
import { Input } from "@/components/ui/input";
</script>

<template>
  <Input class="search-input" placeholder="Search" />
</template>

<style scoped>
.search-input {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 30px;
  border-radius: 12px;
  background-image: url("src/assets/icons/search.svg");
  background-repeat: no-repeat;
  background-position: 4%;
  width: 50%;
}
</style>
