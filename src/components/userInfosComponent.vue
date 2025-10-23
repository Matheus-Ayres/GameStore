<script setup>

const props = defineProps({
    image: String,
    title: String,
    description: String
});
</script>

<template>
    <div class="p-6 rounded-2xl shadow-md bg-white hover:shadow-lg hover:-translate-y-1 transition">
        <div class="flex items-center space-x-4">
            <img :src="image" class="w-8 h-8 text-red-600">
            <div>
                <h2 class="font-semibold text-lg">{{title}}</h2>
                <p class="text-gray-500 text-sm">{{description}}</p>
            </div>
        </div>
    </div>
</template>