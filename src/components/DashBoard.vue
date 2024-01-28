<template>
    <div class="bg-primary">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "DashBoard",
    props: {
        msg: String,
    },
});
</script>


