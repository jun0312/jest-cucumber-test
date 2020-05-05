<template>
  <div class="home d-flex flex-column align-center">
    <v-btn class="mt-8" color="primary" dark width="1200" large @click="toColors">顏色選擇器</v-btn>
    <v-btn class="mt-8" color="primary" dark width="1200" large @click="toComponents">高複用組件</v-btn>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Home extends Vue {
  toColors() {
    this.$router.push('colors');
  }

  toComponents() {
    this.$router.push('components');
  }
}
</script>

<style lang="scss">
  .home {
    width: 100vw;
    height: 100vh;
  }
</style>
