<template>
  <div class="users-page">
    <header>
      <h1>Users</h1>
    </header>
    <main>
      <section class="left-column">
        <UserFilter />
        <!-- <DefaultBlock>
          <template #header>
              <h2>Filters</h2>
          </template>
          <template #content>
            <div>
              name
            </div>
            <div>
              age
            </div>
          </template>
        </DefaultBlock> -->
      </section>
      <section class="central-column">
        <UserList />
        <!-- central-column -->
      </section>
      <section class="right-column">
        <!-- right-column -->
         <UserCard />
      </section>
    </main>
  </div>
</template>

<script>
// import DefaultBlock from "@/components/common/DefaultBlock.vue";
import UserFilter from '@/components/structure/users/UserFilter.vue';
import UserList from '@/components/structure/users/UserList.vue';
import UserCard from '@/components/structure/users/UserCard.vue';
export default {
  name: "UserPage",
  components: {
    // DefaultBlock,
    UserFilter,
    UserList,
    UserCard,
  }
}
</script>

<style scoped>
.users-page {
  margin: 0 3.125rem;
  border: 1px solid red;
  height: 100%;
  display: flex;
  flex-direction: column;
}
header {
  height: 9.375rem;
  display: flex;
  align-items: center;
}
main {
  padding-bottom: 3.125rem;
  flex-grow: 1;
  display: flex;
  column-gap: 3.125rem;
  border: 1px solid blue;
}
.left-column {
  flex-basis: 16%;
  border: 1px solid green;
}
.central-column {
  flex-basis: 44%;
  border: 1px solid green;
}
.right-column {
  flex-basis: 40%;
  border: 1px solid green;
}
</style>