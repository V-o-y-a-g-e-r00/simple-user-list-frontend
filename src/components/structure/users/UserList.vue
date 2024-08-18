<template>
  <DefaultBlock>
    <template #content>
      <div v-if="isUsersLoading" class="loading-placeholder">
        <h2>Users are loading please wait...</h2>
      </div>
      <div v-else class="user-list">
        <UserEntry v-for="user in users" :key="user.id" class="user-entry-positioner" :user="user"/>
      </div>
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
    },
    isUsersLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  },
}
</script>

<style scoped>
.user-list {
  min-width: 25rem;
}
.user-entry-positioner:not(:last-child) {
  margin-bottom: 0.9375rem;
}
.loading-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>