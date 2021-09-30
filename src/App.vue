<template>
  <router-view></router-view>
</template>

<script setup>
import { provide } from "vue";
import { useStore } from "vuex";

const store = useStore();
provide("store", store);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
