<template>
  <DefaultBlock>
    <template #content>
      <UserEntry v-for="user in users" :key="user.id" class="user-entry-positioner" :user="user"/>
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
  },
  props: {
    users: {
      type: Object,
      required: true,
    }
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