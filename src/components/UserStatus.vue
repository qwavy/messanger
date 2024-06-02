<script setup>
const props = defineProps({
  status: String,
});
</script>

<template>
  <span v-if="status === 'Online'" class="user-status user-status-online">{{
    status
  }}</span>
  <span v-else-if="status === 'Busy'" class="user-status user-status-busy">{{
    status
  }}</span>
  <span
    v-else-if="status === 'Offline'"
    class="user-status user-status-offline"
    >{{ status }}</span
  >
</template>

<style scoped>
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
</style>
