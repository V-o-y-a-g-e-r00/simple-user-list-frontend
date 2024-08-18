<template>
  <DefaultBlock>
    <template #content>
      drag-and-drop/profile-image
      user-data
    </template>
  </DefaultBlock>
</template>

<script>
import DefaultBlock from '@/components/common/DefaultBlock.vue';
export default {
  name: "UserCard",
  components: {
    DefaultBlock,
  }
}
</script>

<style scoped>
.user-card {

}
</style>