<script setup lang="ts">
</script>

<template>
  <div class="dark:text-white mt-15">
    <h1 class="text-4xl lg:text-6xl">
      Hello... 👋
    </h1>
    <h3 class="text-2xl my-6 lg:text-4xl">
      My name is Erick Hilda.
    </h3>
    <p class="text-xl font-thin lg:text-2xl my-4 max-w-screen-md">
      I am a software engineer base on Indonesia. I am enthusiastic in web
      development and everything in its orbit.
    </p>
    <p class="text-xl font-thin lg:text-2xl max-w-[20em] my-4">
      Outside of programming and stuff, I enjoy video games and One Piece.
    </p>
    <p class="text-xl font-thin lg:text-2xl max-w-[20em] my-4">
      You can find me on
      <a href="https://github.com/erhild" target="_blank">Github</a> or
      <a href="https://twitter.com/hiii_erick" target="_blank">Twitter</a>.
    </p>
  </div>
</template>

<style lang="postcss" scoped>
a {
  text-decoration: none;
  position: relative;
}

a::after {
  content: "";
  position: absolute;
  z-index: -1;
  top: 60%;
  left: -0.1em;
  right: -0.1em;
  bottom: 0;
  background-color: rgba(255, 10, 120, 0.5);
}
</style>

<route lang="yaml">
meta:
  layout: home
</route>
