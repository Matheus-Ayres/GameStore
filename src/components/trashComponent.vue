<script setup>
import { ref } from 'vue';


const black = ref('/src/assets/icons/lixoPreto.png')
const red = ref('/src/assets/icons/lixoRed.png')
const actual = ref(black.value)

function hoverTrash() {
    actual.value = red.value;
}

</script>

<template>


        <img :src="actual" class="cursor-pointer w-5" @mouseenter="hoverTrash" @mouseleave="actual = black"/>

</template>
