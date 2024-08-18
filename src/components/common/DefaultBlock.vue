<template>
  <div class="default-block">
    <div class="header">
      <slot name="header"></slot>
    </div>
    <div class="content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "DefaultBlock"
}
</script>
<style scoped>
  .default-block {
    width: 100%;
    height: 100%;
    background: var(--theme-color-2);
    border-radius: var(--default-border-radius);
    padding: 1.875rem;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }
  .content {
    min-height: 100%;
    display: flex;
    flex-direction: column;
    overflow: auto;
  }
</style>