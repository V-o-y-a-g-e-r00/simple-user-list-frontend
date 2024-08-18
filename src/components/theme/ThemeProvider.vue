<template>
  <div></div>
</template>
<script>
export default {
  name: "ThemeProvider"
}
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

  --header-font-color: #424242;
  --default-font-color: #1D1D1D;
  --link-color: #0032E4;

  --default-border-radius: 0.9375rem;

  --theme-color-1: #FFFFFF;
  /* --default-theme-color-2: #F4F4F4; */
  --theme-color-2: #656565;
}
* {
  margin: 0;
}
*, *::before, *::after {
  box-sizing: border-box;
}
html, body {
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
h1, h2 {
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


</style>
