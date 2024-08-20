<template>
  <div
    class="toggle-sorter"
    :class="{
      active: isActive,
      inverted: sortDirection === SORT_DIRECTIONS.LARGEST_TO_SMALLEST,
    }"
  >
    <div class="svg-holder" @click="directionToggledHandler">
      <svg
        width="60"
        height="60"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_8_648)">
          <path
            d="M22.5 47.4188L16.3312 53.6063V1.875C16.3312 1.37772 16.1337 0.900806 15.7821 0.549175C15.4304 0.197544 14.9535 0 14.4562 0C13.959 0 13.4821 0.197544 13.1304 0.549175C12.7788 0.900806 12.5812 1.37772 12.5812 1.875V53.6063L6.39375 47.4188C6.04244 47.0695 5.56722 46.8735 5.07187 46.8735C4.57652 46.8735 4.1013 47.0695 3.75 47.4188C3.57425 47.5931 3.43477 47.8004 3.33957 48.0289C3.24438 48.2574 3.19537 48.5025 3.19537 48.75C3.19537 48.9975 3.24438 49.2426 3.33957 49.4711C3.43477 49.6996 3.57425 49.9069 3.75 50.0812L13.125 59.4562C13.2978 59.6249 13.5015 59.7586 13.725 59.85C13.9575 59.9445 14.2054 59.9953 14.4562 60C14.9481 59.9979 15.4195 59.8026 15.7687 59.4562L25.1437 50.0812C25.3195 49.9069 25.459 49.6996 25.5542 49.4711C25.6494 49.2426 25.6984 48.9975 25.6984 48.75C25.6984 48.5025 25.6494 48.2574 25.5542 48.0289C25.459 47.8004 25.3195 47.5931 25.1437 47.4188C24.7924 47.0695 24.3172 46.8735 23.8219 46.8735C23.3265 46.8735 22.8513 47.0695 22.5 47.4188Z"
            fill="#1D1D1D"
          />
          <path
            d="M30 3.75H36.2437C36.741 3.75 37.2179 3.55246 37.5696 3.20083C37.9212 2.84919 38.1187 2.37228 38.1187 1.875C38.1187 1.37772 37.9212 0.900806 37.5696 0.549175C37.2179 0.197544 36.741 0 36.2437 0L30 0C29.5027 0 29.0258 0.197544 28.6742 0.549175C28.3225 0.900806 28.125 1.37772 28.125 1.875C28.125 2.37228 28.3225 2.84919 28.6742 3.20083C29.0258 3.55246 29.5027 3.75 30 3.75Z"
            fill="#1D1D1D"
          />
          <path
            d="M30 13.125H42.5063C43.0035 13.125 43.4804 12.9275 43.8321 12.5758C44.1837 12.2242 44.3813 11.7473 44.3813 11.25C44.3813 10.7527 44.1837 10.2758 43.8321 9.92418C43.4804 9.57254 43.0035 9.375 42.5063 9.375H30C29.5027 9.375 29.0258 9.57254 28.6742 9.92418C28.3225 10.2758 28.125 10.7527 28.125 11.25C28.125 11.7473 28.3225 12.2242 28.6742 12.5758C29.0258 12.9275 29.5027 13.125 30 13.125Z"
            fill="#1D1D1D"
          />
          <path
            d="M30 22.5H48.75C49.2473 22.5 49.7242 22.3025 50.0758 21.9508C50.4275 21.5992 50.625 21.1223 50.625 20.625C50.625 20.1277 50.4275 19.6508 50.0758 19.2992C49.7242 18.9475 49.2473 18.75 48.75 18.75H30C29.5027 18.75 29.0258 18.9475 28.6742 19.2992C28.3225 19.6508 28.125 20.1277 28.125 20.625C28.125 21.1223 28.3225 21.5992 28.6742 21.9508C29.0258 22.3025 29.5027 22.5 30 22.5Z"
            fill="#1D1D1D"
          />
          <path
            d="M54.9937 28.125H30C29.5027 28.125 29.0258 28.3225 28.6742 28.6742C28.3225 29.0258 28.125 29.5027 28.125 30C28.125 30.4973 28.3225 30.9742 28.6742 31.3258C29.0258 31.6775 29.5027 31.875 30 31.875H54.9937C55.491 31.875 55.9679 31.6775 56.3196 31.3258C56.6712 30.9742 56.8687 30.4973 56.8687 30C56.8687 29.5027 56.6712 29.0258 56.3196 28.6742C55.9679 28.3225 55.491 28.125 54.9937 28.125Z"
            fill="#1D1D1D"
          />
        </g>
        <defs>
          <clipPath id="clip0_8_648">
            <rect width="60" height="60" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
    <div class="name-holder" @click="activeToggledHandler">
      {{ parameterName }}
    </div>
  </div>
</template>

<script>
export const SORT_DIRECTIONS = {
  SMALLEST_TO_LARGEST: "SMALLEST_TO_LARGEST",
  LARGEST_TO_SMALLEST: "LARGEST_TO_SMALLEST",
};
export default {
  name: "ToggleSorter",
  emits: ["toggle-sorter-changed"],
  props: {
    isActive: {
      type: Boolean,
      required: true,
    },
    sortDirection: {
      type: String,
      required: true,
    },
    parameterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      SORT_DIRECTIONS,
    };
  },
  methods: {
    activeToggledHandler() {
      const payload = {
        isActive: !this.isActive,
        sortDirection: this.sortDirection,
      };
      this.$emit("toggle-sorter-changed", payload);
    },
    directionToggledHandler() {
      const payload = {
        isActive: true,
        sortDirection:
          this.sortDirection === SORT_DIRECTIONS.SMALLEST_TO_LARGEST
            ? SORT_DIRECTIONS.LARGEST_TO_SMALLEST
            : SORT_DIRECTIONS.SMALLEST_TO_LARGEST,
      };
      this.$emit("toggle-sorter-changed", payload);
    },
  },
};
</script>

<style scoped>
.toggle-sorter {
  height: 2.75rem;
  display: flex;
  align-items: center;
  gap: 0.625rem;
  user-select: none;
}
.svg-holder {
  height: 100%;
  padding: 0.625rem;
  border-radius: var(--default-border-radius);
  cursor: pointer;
  flex-shrink: 0;
  transform: scale(1, 1);
  transition: transform var(--default-transition);
  transition: background-color var(--default-transition);
}

.name-holder {
  padding: 0.625rem;
  border-radius: var(--default-border-radius);
  cursor: pointer;
  transition: background-color var(--default-transition);
  flex-grow: 1;
}
.active .name-holder {
  background-color: var(--theme-active-color);
  transition: background-color var(--default-transition);
}

.svg-holder svg {
  width: 100%;
  height: 100%;
}
.active .svg-holder {
  background-color: var(--theme-active-color);
  transition: background-color var(--default-transition),
    transform var(--default-transition);
}
.inverted .svg-holder {
  transform: scale(1, -1);
  transition: background-color var(--default-transition),
    transform var(--default-transition);
}
</style>
