<script setup>
import { ref } from 'vue';
import { isLogged } from '../store';

const profileHover = ref(false);
const cartHover = ref(false);
</script>

<template>
    <nav class="bg-red-700 p-5 relative">
        <div class="container mx-auto">
            <div class="flex justify-between items-center relative">
                <!-- Logo -->
                <router-link to="/">
                    <div class="text-white font-bold text-lg flex items-center space-x-2">
                        GameStore
                        <img src="/src/assets/icons/controle.png" class="h-8 w-8" />
                    </div>
                </router-link>

                <!-- Ícones -->
                <div class="flex justify-center items-center space-x-6 relative">

                    <!-- Perfil -->
                    <div class="relative flex items-center">
                        <Transition name="slide">
                            <span v-if="profileHover" class=" text-white whitespace-nowrap">
                                Meu Perfil
                            </span>
                        </Transition>

                        <router-link :to="isLogged ? '/profilePage' : '/loginPage'">
                            <img src="/src/assets/icons/user.png" @mouseenter="profileHover = true"
                                @mouseleave="profileHover = false" class="h-8 w-8" alt="User Icon" />
                        </router-link>
                    </div>

                    <!-- Carrinho -->
                    <div class="relative flex items-center">
                        <Transition name="slide">
                            <span v-if="cartHover" class=" text-white whitespace-nowrap">
                                Meu Carrinho
                            </span>
                        </Transition>

                        <router-link to="/cartPage">
                            <img src="/src/assets/icons/cart.png" @mouseenter="cartHover = true"
                                @mouseleave="cartHover = false" class="h-8 w-8" alt="Cart Icon" />
                        </router-link>
                    </div>

                    <img src="/src/assets/icons/menu.png" class="h-8 w-8" alt="Menu Icon" />
                </div>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.slide-enter-active,
.slide-leave-active {
    transition: all 0.3s ease;
}

.slide-enter-from {
    opacity: 0;
    transform: translateX(10px);
}

.slide-leave-to {
    opacity: 0;
    transform: translateX(10px);
}
</style>
