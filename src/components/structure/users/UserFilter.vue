<template>
  <div>
    <DefaultBlock class="user-filter" :isOverflowAuto="false">
      <template #header>
        <h2>Filters and sorting</h2>
      </template>
      <template #content>
        <div class="content-wrapper">
          <div class="multi-range-slider-wrapper">
            <MultiRangeSlider
              :min="filters.ageFilter.lowestRangeValue"
              :max="filters.ageFilter.highestRangeValue"
              :min-value="filters.ageFilter.minAge"
              :max-value="filters.ageFilter.maxAge"
              :rangeMargin="0"
              :ruler="false"
              @input="multiRangeSliderHandler"
            />
          </div>
          <ToggleSorter
            :is-active="sorters.lastNameSorter.isActive"
            :sort-direction="sorters.lastNameSorter.sortDirection"
            parameter-name="Last name"
            @toggle-sorter-changed="lastNameToggleSorterChanged"
          />
          <ToggleSorter
            :is-active="sorters.ageSorter.isActive"
            :sort-direction="sorters.ageSorter.sortDirection"
            parameter-name="Age"
            @toggle-sorter-changed="ageToggleSorterChanged"
          />
        </div>
      </template>
    </DefaultBlock>
  </div>
</template>

<script>
import DefaultBlock from "@/components/common/DefaultBlock.vue";
import MultiRangeSlider from "@/components/common/MultiRangeSlider.vue";
import ToggleSorter from "@/components/common/ToggleSorter.vue";

export default {
  name: "UserFilter",
  emits: [
    "age-filter-changed",
    "last-name-sorter-changed",
    "age-sorter-changed",
  ],
  components: {
    DefaultBlock,
    MultiRangeSlider,
    ToggleSorter,
  },
  props: {
    filters: {
      type: Object,
      required: true,
    },
    sorters: {
      type: Object,
      reuqired: true,
    },
  },
  methods: {
    multiRangeSliderHandler({ minValue, maxValue }) {
      this.$emit("age-filter-changed", { minValue, maxValue });
    },
    lastNameToggleSorterChanged({ isActive, sortDirection }) {
      console.log("lastNameToggleSorterChanged: start");
      this.$emit("last-name-sorter-changed", { isActive, sortDirection });
    },
    ageToggleSorterChanged({ isActive, sortDirection }) {
      this.$emit("age-sorter-changed", { isActive, sortDirection });
    },
  },
};
</script>

<style scoped>
.user-filter {
}
.content-wrapper > *:not(:last-child) {
  margin-bottom: 0.625rem;
}
.multi-range-slider-wrapper {
  /* padding: 0 20px; */
}
</style>
