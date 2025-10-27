<script setup>
import { isLogged } from '../store';
import LoggedNavComponent from './loggedNavComponent.vue';
import LoggedOutNavComponent from './loggedOutNavComponent.vue';

</script>

<template>
    <nav class="bg-red-700 p-5 relative">
        <main>
            <div class="container mx-auto">
                <div class="flex justify-between items-center relative">
                    <!-- Logo -->
                    <router-link to="/">
                        <div class="text-white font-bold text-lg flex items-center space-x-2">
                            GameStore
                            <img src="/src/assets/icons/controle.png" class="h-8 w-8" />
                        </div>
                    </router-link>

                    <LoggedNavComponent v-if="isLogged"/>
                    <LoggedOutNavComponent v-else/>
                </div>
            </div>
        </main>
    </nav>
</template>

