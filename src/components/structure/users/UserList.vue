<template>
  <DefaultBlock>
    <template #content>
      user-entry
      user-entry
      <UserEntry class="user-entry-positioner"/>
      <UserEntry class="user-entry-positioner"/>
    </template>
  </DefaultBlock>
</template>

<script>
import DefaultBlock from '@/components/common/DefaultBlock.vue';
import UserEntry from './UserList/UserEntry.vue';
export default {
  name: "UserList",
  components: {
    DefaultBlock,
    UserEntry
  }
}
</script>

<style scoped>
.user-list {
  
}
.user-entry-positioner:not(:last-child) {
  margin-bottom: 0.9375rem;
}
</style>