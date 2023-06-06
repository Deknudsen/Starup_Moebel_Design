<template>
    <div>
        <v-row>
            <v-col md="6" xs="12" offset-md="3">
                <h1>Administrator Login</h1>

                <div class="info">
                    <v-text-field 
                        v-model="email"
                        label="Email"
                        required
                    >
                    </v-text-field>
                    <v-text-field 
                        v-model="password"
                        label="Password"
                        :type="show1 ? 'text' : 'password'"
                        required
                    >
                    </v-text-field>
                    <v-btn
                        color="#3a744e"
                        @click.prevent="logIn()"
                    >
                        Login
                    </v-btn>
                    
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script setup >

import useUsers from '@/modules/useUsers'
import { onMounted, ref } from 'vue'
import { getAuth, onAuthStateChanged } from '@firebase/auth';
import router from '@/router/index.js'

const { logIn, password, email } = useUsers()

let auth
const isLoggedin = ref(false)
onMounted(() => {
    auth = getAuth();
    onAuthStateChanged(auth, (user) => {
        if(user) {
            router.push({ path: '/adminHome'}),
            isLoggedin.value = true
        }
        else {
            isLoggedin.value = false
        }
    })
})

</script>

<style lang="scss">
    .v-row {
    justify-content: center;
    padding: 170px;
}

</style>

