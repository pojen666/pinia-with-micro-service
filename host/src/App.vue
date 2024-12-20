<script setup>
import {definedStore} from './stores/DefinedStore'
import store from './stores'

const msgStore = definedStore()

function setAsParent() {
  msgStore.setMsg('Parent')
}

function show() {
  alert(msgStore.getMsg())
}

// 動態載入子應用
async function loadSubApp() {
  const subApp = await import('../../child/dist/child.js') // 替換為子應用的入口 URL
  const el = document.getElementById('demo')
  subApp.mount({
    el: el,
    definedStore: msgStore
  })
}

loadSubApp()

</script>

<template>
  <div>
    <button type="button" @click="setAsParent">parent set alert as Parent</button>
    <button type="button" @click="show">parent alert</button>
    <div id="demo"></div>
  </div>
</template>

<style scoped>
</style>
