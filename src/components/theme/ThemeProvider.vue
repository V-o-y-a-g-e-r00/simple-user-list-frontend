<template>
  <div></div>
</template>
<script>
export default {
  name: "ThemeProvider",
};
</script>
<style>
:root {
  --h1-font-size: 3rem;
  --h1-font-weight: 600;
  --h2-font-size: 1.5rem;
  --h2-font-weight: 600;

  --default-font-family: "Inter", sans-serif;
  --default-font-size: 1.25rem;
  --default-font-weight: 400;

  --default-border-radius: 0.9375rem;

  --theme-color-1: #ffffff;
  --theme-color-2: #f4f4f4;
  --theme-color-3: #424242;

  --theme-color-error: red;

  --theme-hover-color: #dff4ff;
  --theme-active-color: #afe2ff;

  --theme-color-test-1: #a739b6;
  --theme-color-test-2: #39b6a5;
  --theme-color-test-3: #8eb639;

  --header-font-color: var(--theme-color-3);
  --default-font-color: #1d1d1d;
  --link-color: #0032e4;

  --default-transition: 0.4s;
  --default-transition-test: 1s;
}
* {
  margin: 0;
}
*,
*::before,
*::after {
  box-sizing: border-box;
}
html,
body {
  width: 100%;
  height: 100%;
}
html {
  font-size: 16px;
}
body {
  font-family: var(--default-font-family);
  font-optical-sizing: auto;
  font-size: var(--default-font-size);
  font-weight: var(--default-font-weight);
  font-style: normal;
  color: var(--default-font-color);

  position: relative;
}
h1,
h2 {
  color: var(--header-font-color);
}
h1 {
  font-size: var(--h1-font-size);
  font-weight: var(--h1-font-weight);
}
h2 {
  font-size: var(--h2-font-size);
  font-weight: var(--h2-font-weight);
}
a {
  color: var(--link-color);
}
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}
::-webkit-scrollbar-track {
  /* background: #f1f1f1; */
}
::-webkit-scrollbar-thumb {
  background: var(--theme-color-3);
  border-radius: 5px;
}
</style>
