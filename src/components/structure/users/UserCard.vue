<template>
  <div class="user-card">
    <DefaultBlock>
      <template #content>
        <div class="img-holder">
          <img
            v-if="user.profile_image_uri"
            :src="user.profile_image_uri"
            alt=""
          />
          <DragAndDrop
            v-else
            @file-chosen="imageChosenHandler"
            class="drag-and-drop-positioner"
          />
        </div>

        <h2 class="user-name">{{ user.first_name }} {{ user.last_name }}</h2>
        Возраст: {{ user.age }}
        <a :href="getEmailHref(user.email)">{{ user.email }}</a>
      </template>
    </DefaultBlock>
  </div>
</template>

<script>
import DefaultBlock from "@/components/common/DefaultBlock.vue";
import DragAndDrop from "@/components/common/DragAndDrop.vue";
export default {
  name: "UserCard",
  components: {
    DefaultBlock,
    DragAndDrop,
  },
  props: {
    user: {
      type: Object,
      required: false,
      default: null,
    },
  },
  methods: {
    getEmailHref(email) {
      return `mailto:${email}`;
    },
    imageChosenHandler(file) {
      this.$emit("file-chosen", file);
    },
  },
};
</script>

<style scoped>
.user-card {
}
.img-holder {
  display: flex;
}
.img-holder > * {
  width: 100%;
  max-height: calc(100vh - 9.375rem - 12.125rem);
  object-fit: contain;
}
.drag-and-drop-positioner {
  height: 25rem;
}
.user-name {
  margin-bottom: 0.4375rem;
}
</style>
