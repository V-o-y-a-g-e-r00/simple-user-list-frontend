<template>
  <div class="users-page">
    <header>
      <h1>Users</h1>
    </header>
    <main>
      <section class="left-column">
        <UserFilter
          :filters="filters"
          :sorters="sorters"
          @age-filter-changed="ageFilterChangedHandler"
          @last-name-sorter-changed="lastNameSorterChangedHandler"
          @age-sorter-changed="ageSorterChangedHandler"
        />
      </section>
      <section class="central-column">
        <UserList
          :users="sortedUsers"
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
import { SORT_DIRECTIONS } from "@/components/common/ToggleSorter.vue";
const axiosInstance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
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
      filters: {
        ageFilter: {
          isActive: true,
          lowestRangeValue: 18,
          highestRangeValue: 100,
          minAge: 18,
          maxAge: 100,
        },
      },
      sorters: {
        lastNameSorter: {
          isActive: false,
          sortDirection: SORT_DIRECTIONS.SMALLEST_TO_LARGEST,
        },
        ageSorter: {
          isActive: false,
          sortDirection: SORT_DIRECTIONS.SMALLEST_TO_LARGEST,
        },
      },
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
      const fileInBase64 = await fileToBase64(file);
      const result = await axiosInstance.patch(
        `/users/${this.selectedUserId}`,
        {
          profile_image: fileInBase64,
        }
      );
      const userImageUri = result.data.profile_image_uri;
      console.log("userImageUri=", userImageUri);
      this.selectedUser.profile_image_uri = userImageUri;
    },
    ageFilterChangedHandler({ minValue, maxValue }) {
      console.log("ageFilterChangedHandler: start");

      this.filters.ageFilter.minAge = minValue;
      this.filters.ageFilter.maxAge = maxValue;
    },
    lastNameSorterChangedHandler({ isActive, sortDirection }) {
      console.log("lastNameSorterChangedHandler: start");
      this.sorters.lastNameSorter.isActive = isActive;
      this.sorters.lastNameSorter.sortDirection = sortDirection;
    },
    ageSorterChangedHandler({ isActive, sortDirection }) {
      console.log("ageSorterChangedHandler: sortDirection=", sortDirection);
      this.sorters.ageSorter.isActive = isActive;
      this.sorters.ageSorter.sortDirection = sortDirection;
    },
  },
  computed: {
    selectedUser() {
      return this.users.find((user) => user.id === this.selectedUserId);
    },
    filteredUsers() {
      return this.users.filter((user) => {
        if (!this.filters.ageFilter.isActive) {
          return this.users;
        }
        if (
          this.filters.ageFilter.minAge <= user.age &&
          this.filters.ageFilter.maxAge >= user.age
        ) {
          return true;
        } else {
          return false;
        }
      });
    },
    sortedUsers() {
      const compare = (a, b) => {
        if (this.sorters.lastNameSorter.isActive) {
          console.log("point1");
          if (
            this.sorters.lastNameSorter.sortDirection ===
            SORT_DIRECTIONS.SMALLEST_TO_LARGEST
          ) {
            console.log("point2");
            if (a.last_name < b.last_name) {
              return -1;
            } else {
              return 1;
            }
          } else {
            console.log("point3");
            if (a.last_name > b.last_name) {
              return -1;
            } else {
              return 1;
            }
          }
        }
        if (this.sorters.ageSorter.isActive) {
          if (
            this.sorters.ageSorter.sortDirection ===
            SORT_DIRECTIONS.SMALLEST_TO_LARGEST
          ) {
            if (a.age < b.age) {
              return -1;
            } else {
              return 1;
            }
          } else {
            if (a.age > b.age) {
              return -1;
            } else {
              return 1;
            }
          }
        }
        return 0;
      };
      const sortedUsers = this.filteredUsers.slice().sort(compare);
      console.log("sortedUsers=", sortedUsers);
      return sortedUsers;
    },
  },
};
</script>

<style scoped>
.users-page {
  margin: 0 3.125rem;
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
}
.left-column {
  flex-basis: 16%;
}
.central-column {
  flex-basis: 44%;
  overflow: hidden;
  max-height: 100%;
}
.right-column {
  flex-basis: 40%;
}
</style>
