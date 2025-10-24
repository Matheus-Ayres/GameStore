<script setup>
import CarouselComponent from './carouselComponent.vue';
</script>

<template>
    <main class="flex flex-col items-center text-2xl mt-10 
            md:flex md:flex-row
            bg-yellow-300/90 shadow-lg py-6">
        <div class="text-black-800 font-bold flex flex-col items-center">
            <img src="/src/assets/icons/megaOff.png" class="hidden md:block md:w-20 mb-2 "/>
            <span>OFERTAS DESSA SEMANA</span>
            <span class="text-red-600">50% OFF</span>
        </div>

        <div class="flex justify-center mt-4">
            <div>
                <CarouselComponent />
            </div>
        </div>
    </main>
</template>
