<template>
  <div class="user-entry" :class="{selected: isSelected}">
    <div class="avatar-holder">
      <svg width="84" height="84" viewBox="0 0 84 84" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="84" height="84" fill="var(--theme-color-2)"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M54.6005 33.6C54.6005 40.5588 48.9593 46.2 42.0005 46.2C35.0417 46.2 29.4005 40.5588 29.4005 33.6C29.4005 26.6412 35.0417 21 42.0005 21C48.9593 21 54.6005 26.6412 54.6005 33.6ZM50.4005 33.6C50.4005 38.2392 46.6397 42 42.0005 42C37.3613 42 33.6005 38.2392 33.6005 33.6C33.6005 28.9608 37.3613 25.2 42.0005 25.2C46.6397 25.2 50.4005 28.9608 50.4005 33.6Z" fill="var(--header-font-color)"/>
        <path d="M42.0005 52.5C28.4043 52.5 16.82 60.5397 12.4072 71.8033C13.4822 72.8708 14.6146 73.8804 15.7994 74.8273C19.0854 64.4862 29.3936 56.7 42.0005 56.7C54.6074 56.7 64.9157 64.4862 68.2016 74.8274C69.3864 73.8805 70.5188 72.8708 71.5938 71.8033C67.1811 60.5397 55.5967 52.5 42.0005 52.5Z" fill="var(--header-font-color)"/>
      </svg>
    </div>
    <div class="user-info">
      <h2>{{ user.first_name }} {{ user.last_name }}</h2>
      Возраст: {{ user.age }} <a :href="getEmailHref(user.email)">{{ user.email }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserEntry",
  props: {
    user: {
      type: Object,
      required: true,
    },
    selectedUserId: {
      type: Number,
      required: false,
      default: null,
    }
  },
  methods: {
    getEmailHref(email){
      return `mailto:${email}`;
    }
  },
  computed: {
    isSelected() {
      return this.$props.selectedUserId === this.user.id;
    }
  }

}
</script>

<style scoped>
  .user-entry {
    background: var(--theme-color-1);
    border-radius: var(--default-border-radius);
    padding: 0.8125rem;
    display: flex;
    column-gap: 0.8125rem;
    cursor: pointer;
    transition: var(--default-transition);
    overflow: hidden;
    flex-shrink: 0;
    min-width: 25rem;
  }
  .user-entry:hover:not(.selected) {
    background: var(--theme-hover-color);
    transition: var(--default-transition);
  }
  .avatar-holder {
    width: 5.25rem;
    height: 5.25rem;
    flex-shrink: 0;
    border-radius: 50%;
    overflow: hidden;
  }
  .user-info h2 {
    margin-bottom: 7px;
  }
  .selected {
    background: var(--theme-active-color);
  }
</style>