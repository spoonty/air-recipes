<template>
  <app-controller />
</template>

<script setup>
    import AppController from "@/controllers/AppController"
</script>

<style lang="scss">
    html, body, #app {
        height: 100%;
    }
    @font-face {
        font-family: "Gilroy ExtraBold";
        src: url("assets/fonts/gilroy-extrabold.ttf") format("truetype");
        font-style: normal;
        font-weight: normal;
    }
</style>