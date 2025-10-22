<script setup>
import CardLogin from '../components/cardLoginComponent.vue';
import NavBar from '../components/navComponent.vue';
</script>

<template>
    <NavBar />

    <main class="flex flex-col-reverse md:grid md:grid-cols-2 h-[90vh] overflow-hidden">
        <section class="h-[40vh] md:h-full overflow-hidden order-2 md:order-1">
            <img src="/src/assets/icons/mario.jpeg"
                class="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                alt="Imagem Mario" />
        </section>

        <section class="bg-gray-100 flex justify-center items-center py-10 px-5 order-1 md:order-2">
            <CardLogin />
        </section>
    </main>
</template>
