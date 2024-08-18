<template>
  <div class="user-card">
    <DefaultBlock>
      <template #content>
        <div v-if="false">
          Image
        </div>
        <div v-else>
          <DragAndDrop class="drag-and-drop-positioner" />
        </div>
        user-data
      </template>
    </DefaultBlock>
  </div>
</template>

<script>
import DefaultBlock from '@/components/common/DefaultBlock.vue';
import DragAndDrop from '@/components/common/DragAndDrop.vue';
export default {
  name: "UserCard",
  components: {
    DefaultBlock,
    DragAndDrop,
  }
}
</script>

<style scoped>
.user-card {

}
.drag-and-drop-positioner {
  height: 25rem;
}
</style>