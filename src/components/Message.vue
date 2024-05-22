<script setup>
const props = defineProps({
  content: String,
  myMessage: Boolean,
});
</script>

<template>
  <span :class="props.myMessage ? 'myMessage' : ''" class="message">
    {{ content }}
  </span>
</template>

<style scoped>
.message {
  border-radius: 12px;
  padding: 8px 16px;
  margin-right: auto;
  background-color: #f1f1f1;
}
.myMessage {
  background-color: #615ef0;
  color: #fff;
  margin-right: 0;
  margin-left: auto;
}
</style>
