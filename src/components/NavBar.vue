<template>
    <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container">
            <router-link class="navbar-brand" to="/"><img src="tasks-logo.png" alt="strTituloEmpresa" width="130"
                    height="48" /></router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <router-link class="nav-link" to="/tasks">Tasks</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link class="nav-link" to="/about">About</router-link>
                    </li>
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">
                            Dropdown
                        </a>
                        <ul class="dropdown-menu">
                            <li><router-link class="dropdown-item" to="/tasks">Tasks</router-link></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr class="dropdown-divider">
                            </li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
                <form class="d-flex" role="search">
                    <div class="px-2">
                        <select class="form-select" v-model="$i18n.locale">
                            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">{{
                                locale }}</option>
                        </select>
                    </div>
                    <router-link v-if="store.token == null" class="btn btn-outline-success" to="/login">Login</router-link>
                    <router-link v-else class="btn btn-outline-danger" to="/logout">Logout</router-link>
                </form>
            </div>
        </div>
    </nav>
</template>

<script lang="ts" setup>
import { Ref } from 'vue';
import useAuth from '@/store/auth';
const store = useAuth()


</script>