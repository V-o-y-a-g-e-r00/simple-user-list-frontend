<template>
  <div class="user-entry">
    <div class="avatar-holder">

    </div>
    <div class="user-info">
      <h2>user-first-name user-last-name</h2>
      user-age user-email
    </div>
  </div>
</template>

<script>
export default {
  name: "UserEntry",

}
</script>

<style scoped>
  .user-entry {
    background: var(--theme-color-1);
    border-radius: var(--default-border-radius);
    padding: 0.625rem;
  }
</style>