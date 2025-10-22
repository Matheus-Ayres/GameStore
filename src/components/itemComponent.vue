<script setup>

const props = defineProps({
    image: String,
    name: String,
    price: Number
})

</script>

<template>
    <div class="flex items-center bg-gray-50 rounded-lg p-4 shadow-sm">
        <img class="w-24 h-auto rounded-md mr-4" :src="image"
            alt="Xbox Series X">
        <div class="info">
            <h2 class="text-lg text-gray-800">{{name}}</h2>
            <p class="text-red-600 font-bold mt-1">{{price}}</p>
        </div>
    </div>
</template>