<template>
  <div class="users-page">
    <header>
      <h1>Users</h1>
    </header>
    <main>
      <section class="left-column">
        <UserFilter />
      </section>
      <section class="central-column">
        <UserList
          :users="users"
          :isUsersLoading="isUsersLoading"
          :usersLoadingError="usersLoadingError"
          :selected-user-id="selectedUserId"
          @user-selected="userSelectedHandler"
        />
      </section>
      <section class="right-column">
        <UserCard
          v-if="selectedUser"
          :user="selectedUser"
          @file-chosen="imageChosenHandler"
        />
      </section>
    </main>
  </div>
</template>

<script>
import { fileToBase64 } from "@/utils/utils.ts";
import UserFilter from "@/components/structure/users/UserFilter.vue";
import UserList from "@/components/structure/users/UserList.vue";
import UserCard from "@/components/structure/users/UserCard.vue";

import axios from "axios";
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  // baseURL: "http://localhost:3000",
});

export default {
  name: "UserPage",
  components: {
    UserFilter,
    UserList,
    UserCard,
  },
  data() {
    return {
      users: [],
      isUsersLoading: false,
      usersLoadingError: null,
      selectedUserId: null,
    };
  },
  async created() {
    await this.getUsersFromBackend();
  },
  methods: {
    async getUsersFromBackend() {
      try {
        this.isUsersLoading = true;
        const result = await axiosInstance.get("/users");
        // console.log(result);
        this.users = result.data;
      } catch (error) {
        this.usersLoadingError = error;
      } finally {
        this.isUsersLoading = false;
      }
    },
    userSelectedHandler(userId) {
      this.selectedUserId = userId;
    },
    async imageChosenHandler(file) {
      console.log(file);
      const fileInBase64 = fileToBase64(file);
      axiosInstance.patch(`/users/${this.selectedUserId}`, {
        profile_image: fileInBase64,
      });
    },
  },
  computed: {
    selectedUser() {
      return this.users.find((user) => user.id === this.selectedUserId);
    },
  },
};
</script>

<style scoped>
.users-page {
  margin: 0 3.125rem;
  /* border: 1px solid red; */
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
header {
  height: 9.375rem;
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
main {
  padding-bottom: 3.125rem;
  flex-grow: 1;
  display: flex;
  column-gap: 3.125rem;
  overflow: hidden;
  /* border: 1px solid blue; */
}
.left-column {
  flex-basis: 16%;
  /* border: 1px solid green; */
}
.central-column {
  flex-basis: 44%;
  /* border: 1px solid green; */
  overflow: hidden;
  max-height: 100%;
}
.right-column {
  flex-basis: 40%;
  /* border: 1px solid green; */
}
</style>
