<template>
  <ThemeProvider />
  <UsersPage />
</template>

<script>
import ThemeProvider from './components/theme/ThemeProvider.vue'
import UsersPage from './pages/UsersPage.vue'

export default {
  name: 'App',
  components: {
    ThemeProvider,
    UsersPage,
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
}
</style>
