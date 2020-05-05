<template>
  <v-app dark :style="!this.$vuetify.theme.dark ? `background: ${blocks[0].color}` : ''">
    <router-view></router-view>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  computed: {
    ...mapState('colors', ['blocks']),
  },

  mounted() {
    console.log(this.$vuetify.theme.dark);
  },
});
</script>
