<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const openEye = "/src/assets/icons/open.png";
const closedEye = "/src/assets/icons/closed.png";
const eyeState = ref(closedEye);
const see = ref(false);
const visibleState = ref("password")
const router = useRouter();

//fictional user login data
const userLogin = ref("user123");
const userPassword = ref("batata");

//holder user data
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
        alert("Login successful!");
        router.push('/');
    } else {
        alert("Usuário ou senha incorretos!.");
    }
}
</script>
<template>
    <form class="bg-red-600 m-24 p-5 rounded-2xl flex flex-col justify-center shadow-2xl" @submit.prevent="submitLogin">
        <h1 class="text-center text-white font-bold text-2xl mb-10">LOGIN</h1>

        <div class="mx-5">

            <div class="flex flex-col">
                <label class="text-white font-semibold">USER</label>
                <input type="text" class="w-full p-2 rounded-lg mt-2 mb-5" placeholder="Coloque seu usuário" required
                    v-model="user">
            </div>

            <div class="flex flex-col">

                <label class="text-white font-semibold">SENHA</label>
                <input :type="visibleState" class="w-full p-2 rounded-md mt-2 mb-1" placeholder="Insira sua senha"
                    required v-model="password">

                <div class="flex items-center space-x-2">
                    <input type="checkbox" class="p-2 mt-2 ml-2 self-start scale-150 cursor-pointer" v-model="see"
                        @change="seePassword">
                    <label class="text-white font-semibold">Mostrar Senha</label>
                    <img :src="eyeState" class="h-6 w-6 mt-2 mr-2" alt="Mostrar Senha Icon">
                </div>

            </div>

            <div class="flex justify-center mt-10">
                <button class="bg-white text-black font-bold px-10 py-2 rounded-lg border-2 border-transparent 
                                hover:bg-red-800 hover:border-white hover:text-white transition duration-300">
                    ENTRAR
                </button>

            </div>

            <span class="text-white font-semibold mt-5 flex justify-center">
                Não possui uma conta?
            </span>
            <span
                class="text-white font-semibold mt-1 flex justify-center underline cursor-pointer hover:text-gray-300">
                CADASTRAR
            </span>
        </div>
    </form>
</template>