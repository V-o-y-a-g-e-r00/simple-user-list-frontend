<template>
  <div class="drag-and-drop" :class="{ active: isDragOver }" @drop.prevent="dropHandler" @dragover.prevent="dragoverHandler" @dragenter.prevent="dragoverHandler" @dragend.prevent="dragendHandler" @dragleave.prevent="dragendHandler" @click="addFileButtonHandler">
    <div class="drag-and-drop-inner">
      <h2>Drag and drop image</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "DragAndDrop",
  emits: ["file-chosen"],
  data() {
    return {
      isDragOver: false
    }
  },
  methods: {
    dragoverHandler() {
      this.isDragOver = true;
    },
    dragendHandler() {
      this.isDragOver = false;
    },
    checkFileTypeIsImage(file) {
      return file.type.match('image.*');
    },
    emitFile(file) {
      this.$emit("file-chosen", file);
    },
    checkFileTypeAndEmit(file) {
      if(this.checkFileTypeIsImage(file)) {
        this.emitFile(file);
      }
    },
    dropHandler(event) {
      this.isDragOver = false;
      const files = [];
      if (event.dataTransfer.items) {
        [...event.dataTransfer.items].forEach((item) => {
          if (item.kind === "file") {
            files.push(item.getAsFile());
          }
        });
      } else {
        files.push(...event.dataTransfer.files);
      }
      this.checkFileTypeAndEmit(files[0]);
    },
    addFileButtonHandler() {
      const input = document.createElement("input");
      input.type = "file";
      const changeCallback = () => {
        this.checkFileTypeAndEmit(input.files[0]);
      };
      input.addEventListener("change", changeCallback);
      input.click();
    },
  }
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
.active {
  background: var(--theme-active-color);
  border-color: var(--sound-splitter-color-1);
}
</style>