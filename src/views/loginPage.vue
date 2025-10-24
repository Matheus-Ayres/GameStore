<script setup>
import CardLogin from '../components/cardLoginComponent.vue';
import NavBar from '../components/navComponent.vue';
</script>

<template>
    <NavBar />

    <main class="relative flex justify-center items-center h-[95vh] bg-cover bg-center bg-no-repeat"
        style="background-image: url('/src/assets/icons/mario.jpeg')">
        
        <div class="absolute inset-0 bg-black/40"></div>

        <section class="relative z-10  p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
            <CardLogin />
        </section>
    </main>
</template>
