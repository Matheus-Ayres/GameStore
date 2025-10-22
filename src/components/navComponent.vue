<script setup>
import { ref } from 'vue';
import { isLogged } from '../store';

const profileHover = ref(false);
const cartHover = ref(false);

</script>

<template>
    <nav class="bg-red-600 p-5">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <router-link to="/">
                    <div class="text-white font-bold text-lg flex items-center space-x-2">
                        GameStore
                        <img src="/src/assets/icons/controle.png" class="h-8 w-8"></img>
                    </div>
                </router-link>
                <div class="flex justify-center items-center space-x-4">
                    
                    <span v-if="profileHover" class="text-white">
                        Meu Perfil
                    </span>
                    <router-link to="/profilePage">
                        <img src="/src/assets/icons/user.png" @mouseenter="profileHover = true" @mouseleave="profileHover = false" 
                        class="h-8 w-8" alt="User Icon">
                    </router-link>

                    <span v-if="cartHover" class="text-white">
                        Meu Carrinho
                    </span>

                    <router-link to="/cartPage">
                        <img src="/src/assets/icons/cart.png" @mouseenter="cartHover = true" @mouseleave="cartHover = false"
                        class="h-8 w-8 " alt="Cart Icon">
                    </router-link>
                    <img src="/src/assets/icons/menu.png" class="h-8 w-8" alt="Menu Icon">
                </div>
            </div>
        </div>
    </nav>
</template>
