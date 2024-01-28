<template>
    <section class="container">
        <div>{{ feedback }}</div>
        <form>
            <div class="row mb-3">
                <label for="inputState" class="col-sm-2 col-form-label">{{ $t("registerScreen.lbl.role") }}</label>
                <div class="col-sm-10">
                    <select id="inputState" class="form-select" v-model="roleId">
                        <option selected>Choose...</option>
                        <option value="Manager">Encargado</option>
                        <option value="Administrative">Administrativo</option>
                        <option value="Technician">Técnico</option>
                        <option value="Trainee">Aprendiz</option>
                        <option value="Admin">Administrador</option>
                    </select>
                </div>
            </div>

            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">{{ $t("registerScreen.lbl.firstName") }}</label>
                <div class="col-sm-10">
                    <input :placeholder="$t('registerScreen.ph.firstName')" type="text" class="form-control" id="nombres"
                        v-model="firstName" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">{{ $t("registerScreen.lbl.lastName") }}</label>
                <div class="col-sm-10">
                    <input :placeholder="$t('registerScreen.ph.lastName')" type="text" class="form-control" id="apellidos"
                        v-model="lastName" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">{{ $t("registerScreen.lbl.address") }}</label>
                <div class="col-sm-10">
                    <input :placeholder="$t('registerScreen.ph.address')" type="text" class="form-control" id="direccion"
                        v-model="address" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputEmail3" class="col-sm-2 col-form-label">{{ $t("registerScreen.lbl.email") }}</label>
                <div class="col-sm-10">
                    <input :placeholder="$t('registerScreen.ph.email')" type="email" class="form-control" id="email"
                        v-model="email" />
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">{{ $t("registerScreen.lbl.password") }}</label>
                <div class="col-sm-10">
                    <input :placeholder="$t('registerScreen.ph.password')" type="password" class="form-control"
                        id="password" v-model="password">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label">{{ $t("registerScreen.lbl.confirm") }}</label>
                <div class="col-sm-10">
                    <input :placeholder="$t('registerScreen.ph.confirm')" type="password" class="form-control" id="confirm"
                        v-model="confirm">
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputPassword3" class="col-sm-2 col-form-label"></label>
                <div class="col-sm-10">
                    <button type="submit" class="btn btn-primary" @click.prevent="register">{{
                        $t("registerScreen.btn.submit") }}</button>
                    <p>{{ $t("registerScreen.txt.haveAccount") }}</p>
                    <router-link class="btn btn-outline-success" to="/login">{{ $t("registerScreen.link.login")
                    }}</router-link>
                </div>
            </div>
        </form>
    </section>
</template>

<script lang="ts" setup>
import { ref } from "vue"
import useAuth from "@/store/auth";
import router from "@/router";
const store = useAuth()

let roleId = ref("")
let firstName = ref("")
let lastName = ref("")
let address = ref("")
let email = ref("")
let password = ref("")
let confirm = ref("")
let feedback = ref("")
let Sign = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPoAAACWCAYAAAD32pUcAAAAp0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBrSqQAAZytjkAAAAAASUVORK5CYII="

const register = async () => {
    feedback.value = "Registrando..."

    const success = await store.register(email.value, password.value, email.value, firstName.value, lastName.value, confirm.value, roleId.value, Sign)
    if (success) {
        router.push("tasks")
    } else {
        feedback.value = "Error al registrar usuario"
    }
}

</script>