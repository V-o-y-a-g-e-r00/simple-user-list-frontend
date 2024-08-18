<template>
  <DefaultBlock>
    <template #content>
      <div v-if="isUsersLoading" class="user-list-placeholder">
        <h2>Users are loading please wait...</h2>
      </div>
      <div v-if="usersLoadingError" class="user-list-placeholder">
        <h2>{{ usersLoadingError }}</h2>
      </div>
      <div class="user-list">
        <UserEntry v-for="user in users" :key="user.id" class="user-entry-positioner" :user="user" :selected-user-id="selectedUserId" @click="selectUser(user.id)"/>
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
  emits: ['user-selected'],
  props: {
    users: {
      type: Object,
      required: true,
    },
    isUsersLoading: {
      type: Boolean,
      required: false,
      default: false
    },
    usersLoadingError: {
      type: Error,
      required: false,
      default: null,
    },
    selectedUserId: {
      type: Number,
      required: false,
      default: null
    }
  },
  methods: {
    selectUser(userId) {
      this.$emit('user-selected', userId);
    }
  }
}
</script>

<style scoped>
/* .user-list {
  min-width: 25rem;
} */
.user-entry-positioner:not(:last-child) {
  margin-bottom: 0.9375rem;
}
.user-list-placeholder {
  height: 100%;
  display: flex;
  align-items: center;
}
</style>