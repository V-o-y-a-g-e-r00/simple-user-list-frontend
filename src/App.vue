<template>
  <ThemeProvider />
  <router-view />
</template>

<script>
import ThemeProvider from "@/components/theme/ThemeProvider.vue";
export default {
  name: "App",
  components: {
    ThemeProvider,
  },
};
</script>

<style lang="scss">
#app {
  width: 100%;
  height: 100%;
}
</style>
