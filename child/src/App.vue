<script setup>

import {inject} from 'vue'
const msgStore = inject('definedStore');
function show() {
  alert(msgStore.getMsg())
}

function setAsChild() {
  msgStore.setMsg('Child')
}
</script>

<template>
  <button type="button" @click="setAsChild">child set alert as Child</button>
  <button type="button" @click="show">child alert</button>
</template>

<style scoped>
</style>
