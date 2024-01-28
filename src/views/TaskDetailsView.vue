<template>
    <h1>{{ tarea.subject }}</h1>
    <button id="back" class="btn btn-primary" @click="volver">Volver</button>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue"
import useAuth from '@/store/auth';
import router from "../router/index"

const store = useAuth()
const tarea = ref({})
const volver = () => {
    router.push("/tasks")
}

onMounted(async () => {
    tarea.value = await store.getTasksById(2)
    // console.log('tareas', tareas)
})


</script>