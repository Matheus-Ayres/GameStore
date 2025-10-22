<script setup>
import CardRegister from '../components/cardRegisterComponent.vue';
import NavBar from '../components/navComponent.vue';
</script>

<template>
    <NavBar />
    <main class="flex flex-col md:grid md:grid-cols-2 h-auto md:h-[90vh]">
        <!-- Card vem primeiro no mobile -->
        <section class="order-1 md:order-none bg-gray-100 flex justify-center items-center py-10 px-5 ">
            <CardRegister />
        </section>

        <!-- Imagem vai pra baixo no mobile -->
        <section class="order-2 h-full md:order-none h-[31vh] md:h-full overflow-hidden">
            <img src="/src/assets/icons/bluePrince.jpg" class="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
        </section>
    </main>
</template>
