<template>
    <section class="container">
        {{ feedback }}
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import router from "@/router";
import useAuth from "@/store/auth";
const store = useAuth()

let feedback = ref("Saliendo...")

store.logout()

router.push({ name: "login" })
</script>