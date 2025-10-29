<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { createUser } from '../store';

const openEye = "/src/assets/icons/open.png";
const closedEye = "/src/assets/icons/closed.png";
const eyeState = ref(closedEye);
const see = ref(false);
const visibleState = ref("password");
const router = useRouter();

// Dados do usuário
const confirmPassword = ref("");
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

function submitResgister() {
    if (password.value === confirmPassword.value) {
        createUser(user.value, password.value);
        router.push('/loginPage');
    } else {
        alert("As senhas devem ser iguais!");
    }
}
</script>

<template>
    <form class="bg-blue-800  p-6 rounded-2xl flex flex-col justify-center shadow-2xl"
        @submit.prevent="submitResgister">
        <h1 class="text-center text-white font-bold text-2xl mb-8">REGISTRAR</h1>

        <div>
            <!-- Usuário -->
            <div class="flex flex-col">
                <label class="text-white font-semibold">NOVO USER</label>
                <input type="text" class="w-full p-2 rounded-lg mt-2 mb-5 outline-none"
                    placeholder="Crie seu nome de usuário" required v-model="user" />
            </div>

            <!-- Senhas -->
            <div class="flex flex-col">
                <label class="text-white font-semibold">CRIAR SENHA</label>
                <input :type="visibleState" class="w-full p-2 rounded-md mt-2 mb-3 outline-none"
                    placeholder="Insira sua senha" required v-model="password" />

                <label class="text-white font-semibold">CONFIRMAR SENHA</label>
                <input :type="visibleState" class="w-full p-2 rounded-md mt-2 mb-2 outline-none"
                    placeholder="Confirme sua senha" required v-model="confirmPassword" />

                <!-- Mostrar senha -->
                <div class="flex items-center flex-wrap gap-2 mt-2">
                    <input type="checkbox" class="scale-150 cursor-pointer accent-white" v-model="see"
                        @change="seePassword" />
                    <label class="text-white font-semibold">Mostrar Senhas</label>
                    <img :src="eyeState" class="h-6 w-6" alt="Mostrar Senha Icon" />
                </div>
            </div>

            <!-- Botão -->
            <div class="flex justify-center mt-8">
                <button class="bg-white text-black font-bold px-10 py-2 rounded-lg border-2 border-transparent 
                    hover:bg-blue-700 hover:border-white hover:text-white transition duration-300">
                    CRIAR
                </button>
            </div>

            <!-- Já tenho conta -->
            <div class="flex flex-col items-center space-y-2 mt-6">
                <span class="text-white font-semibold">Já tenho uma conta</span>
                <router-link to="/loginPage">
                    <span class="text-white font-semibold underline cursor-pointer rounded-2xl border-2 border-transparent p-2 
            hover:bg-blue-700 hover:text-white hover:border-white transition duration-300">
                        ENTRAR
                    </span>
                </router-link>
            </div>
        </div>
    </form>
</template>
