<script setup>
import { ref } from 'vue';
import { logout } from '../store';

const showModal = ref(false);

function exit(){
    showModal.value = false;
    logout();
}

</script>

<template>
    <span class="text-white hover:underline cursor-pointer" @click="showModal = true">
        Sair
    </span>

    
    <div v-if="showModal" class="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <!-- Conteúdo do modal -->
        <div class="bg-white rounded-2xl p-6 w-80 shadow-lg relative">
            <h2 class="text-xl font-semibold mb-3">Confirmar saída</h2>
            <p class="text-gray-700 mb-4">
                Ao confirmar, você será desconectado da sua conta. Tem certeza que deseja sair?
            </p>

            <div class="flex justify-end gap-2">
                <button class="px-3 py-2 bg-gray-200 rounded-lg hover:bg-gray-300" @click="showModal = false">
                    Cancelar
                </button>
                <button class="px-3 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                    @click="exit()" >
                    Confirmar
                </button>
            </div>

            <!-- Botão X -->
            <button class="absolute top-3 right-3 text-gray-500 hover:text-gray-700" @click="showModal = false" >
                ✕
            </button>
        </div>
    </div>
</template>
