<script setup>
const props = defineProps({
    image: String,
    name: String,
    price: Number
})
</script>

<template>

    <router-link to="/productPage/" class=" flex flex-col bg-red-700 shadow-lg rounded-lg p-4 w-60 gap-3 
        hover:shadow-xl hover:-translate-y-1 transition duration-300 cursor-pointer">

        <div class="bg-white p-2 rounded-md w-full h-48 flex items-center justify-center overflow-hidden">
            <img :src="image" alt="Product image" class="object-contain max-h-full max-w-full">
        </div>

        <div class="flex flex-col flex-1 justify-between">
            <div>
                <h2 class="text-lg text-white font-semibold">{{ name }}</h2>
                <p class="text-white font-bold mt-1">R${{ price }}</p>
            </div>
            <span class="text-white hover:underline self-end mt-auto">Ver mais</span>
        </div>
    </router-link>


</template>
