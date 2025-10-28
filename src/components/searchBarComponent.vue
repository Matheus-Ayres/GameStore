<script setup>

const props = defineProps({
    width: String
});

</script>

<template>
    <div class="flex">
        <input placeholder="Busque na GameStore!" class="p-2 outline-gray-400 rounded-lg"
        :class="width"/>
        <button class="bg-gray-200 rounded-lg ml-2 px-4 hover:bg-gray-300 transition">
            Pesquisar
        </button>
    </div>
</template>