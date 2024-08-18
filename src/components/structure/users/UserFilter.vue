<template>
  <div>
    <DefaultBlock class="user-filter">
      <template #header>
        <h2>Filter</h2>
      </template>
      <template #content>
        age-slider
        name-sorting
        age-sorting
      </template>
    </DefaultBlock>
  </div>

</template>

<script>
import DefaultBlock from '@/components/common/DefaultBlock.vue';
export default {
  name: "UserFilter",
  components: {
    DefaultBlock,
  }
}
</script>

<style scoped>
.user-filter {

}
</style>