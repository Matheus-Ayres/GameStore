<script setup>
import CardLogin from '../components/cardLoginComponent.vue';
import NavBar from '../components/navComponent.vue';
</script>

<template>
    <NavBar />
    <main class="grid grid-cols-2 h-[90vh]">
        <section class="h-full overflow-hidden">
            <img src="/src/assets/icons/mario.jpeg" class="w-full h-full object-cover" alt="Imagem Mario">
        </section>

        <section class="bg-gray-100">
            <CardLogin />
        </section>
    </main>
</template>