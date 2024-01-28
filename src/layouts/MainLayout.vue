<template>
    <header style="margin-top: 90px">
        <NavBar />
    </header>
    <slot />
    <MainFooter />
</template>

<script setup lang="ts">
import NavBar from "../components/NavBar.vue"
import MainFooter from "../components/MainFooter.vue"
</script>
