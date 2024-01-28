<template>
    <section class="container">
        {{ feedback }}
        <form>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">{{ $t("loginScreen.lbl.email") }}
                </label>
                <div class="col-sm-10">
                    <input :placeholder="$t('loginScreen.ph.email')" type="email" class="form-control" id="email"
                        v-model="email" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">{{ $t("loginScreen.lbl.password") }}</label>
                <div class="col-sm-10">
                    <input :placeholder="$t('loginScreen.ph.password')" type="password" class="form-control" id="passwor3"
                        v-model="password">
                </div>
            </div>
            <button type="submit" class="btn btn-primary" @click.prevent="login">{{ $t("loginScreen.btn.submit") }}</button>
            <p>{{ $t("loginScreen.txt.newAccount") }}</p>
            <router-link class="btn btn-outline-success" to="/register">{{ $t("loginScreen.link.register")
            }}</router-link>

        </form>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import useAuth from "@/store/auth";
import router from "@/router";
const store = useAuth()

let email = ref("")
let password = ref("")
let feedback = ref("")

const login = async () => {
    feedback.value = "ingresando..."
    const success = await store.login(email.value, password.value)
    if (success) {
        router.push({ name: "tasks" })
    } else {
        feedback.value = "Ha habido un error"
    }
}

</script>