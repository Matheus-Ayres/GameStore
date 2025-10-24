<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { login } from '../store';

const openEye = "/src/assets/icons/open.png";
const closedEye = "/src/assets/icons/closed.png";
const eyeState = ref(closedEye);
const see = ref(false);
const visibleState = ref("password");
const router = useRouter();

// fictitious user login data
const userLogin = ref("tarcisio123");
const userPassword = ref("dioninho");


// holder user data
const user = ref("");
const password = ref("");

function seePassword() {
    if (see.value) {
        visibleState.value = "text";
        eyeState.value = openEye;
    } else {
        visibleState.value = "password";
        eyeState.value = closedEye;
    }
}

function submitLogin() {
    if (user.value === userLogin.value && password.value === userPassword.value) {
        login()
        router.push('/');
    } else {
        alert("Usuário ou senha incorretos!.");
    }
}
</script>

<template>
    <form class="bg-red-700 w-full max-w-md p-5 rounded-2xl flex flex-col justify-center shadow-2xl"
        @submit.prevent="submitLogin">
        <h1 class="text-center text-white font-bold text-2xl mb-8">LOGIN</h1>

        <div>
            
            <div class="flex flex-col">
                <label class="text-white font-semibold">USER</label>
                <input type="text" class="w-full p-2 rounded-lg mt-2 mb-5"
                    placeholder="Coloque seu usuário" required v-model="user" />
            </div>

            
            <div class="flex flex-col">
                <label class="text-white font-semibold">SENHA</label>
                <input :type="visibleState" class="w-full p-2 rounded-md mt-2 mb-1"
                    placeholder="Insira sua senha" required v-model="password" />

                <div class="flex items-center justify-between flex-wrap gap-2">
                    <div class="flex items-center space-x-2">
                        <input type="checkbox" class="scale-150 cursor-pointer accent-white" v-model="see"
                            @change="seePassword" />
                        <label class="text-white font-semibold">Mostrar Senha</label>
                        <img :src="eyeState" class="h-6 w-6" alt="Mostrar Senha Icon" />
                    </div>

                    <span class="text-white font-semibold cursor-pointer underline hover:text-gray-200">
                        Esqueci minha senha
                    </span>
                </div>
            </div>

            <div class="flex justify-center mt-8">
                <button class="bg-white text-black font-bold px-10 py-2 rounded-lg border-2 border-transparent 
                    hover:bg-red-800 hover:border-white hover:text-white transition duration-300">
                    ENTRAR
                </button>
            </div>

            <div class="flex flex-col items-center space-y-2 mt-6">
                <span class="text-white font-semibold">Não possui uma conta?</span>
                <router-link to="/registerPage">
                    <span class="text-white font-semibold underline cursor-pointer rounded-2xl border-2 border-transparent p-2 
            hover:bg-red-800 hover:text-white hover:border-white transition duration-300">
                        CADASTRAR
                    </span>
                </router-link>
            </div>
        </div>
    </form>
</template>
