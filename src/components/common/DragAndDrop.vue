<template>
  <div class="drag-and-drop">
    <div class="drag-and-drop-inner">
      <h2>Drag and drop image</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "DragAndDrop",

}
</script>

<style scoped>
.drag-and-drop {
  width: 100%;
  height: 100%;
  background: var(--theme-color-1);
  padding: 1rem;
  border-radius: var(--default-border-radius);
  cursor: pointer;
  user-select: none;
  transition: var(--default-transition);
}
.drag-and-drop:hover {
  background: var(--theme-hover-color);
  transition: var(--default-transition);
}
.drag-and-drop-inner {
  height: 100%;
  border-radius: var(--default-border-radius);
  border: 0.625rem dashed var(--header-font-color);
  /* border-width: 0.625rem;
  border-style: dashed;
  border-color: var(--header-font-color); */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}
</style>