<script setup>
import { ref } from 'vue';
import LogoutComponent from './logoutComponent.vue';

const profileHover = ref(false);
const cartHover = ref(false);
</script>

<template>
    <div class="flex justify-center items-center gap-6 relative">
        <div class="relative flex items-center">
            <Transition name="slide">
                <span v-if="profileHover" class=" text-white whitespace-nowrap">
                    Meu Perfil
                </span>
            </Transition>

            <router-link to="/profilePage">
                <img src="/src/assets/icons/user.png" @mouseenter="profileHover = true"
                    @mouseleave="profileHover = false" class="h-8 w-8" alt="User Icon" />
            </router-link>
        </div>


        <div class="relative flex items-center">
            <Transition name="slide">
                <span v-if="cartHover" class=" text-white whitespace-nowrap">
                    Meu Carrinho
                </span>
            </Transition>

            <router-link to="/cartPage">
                <img src="/src/assets/icons/cart.png" @mouseenter="cartHover = true" @mouseleave="cartHover = false"
                    class="h-8 w-8" alt="Cart Icon" />
            </router-link>
        </div>

        <LogoutComponent/>
    </div>
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
