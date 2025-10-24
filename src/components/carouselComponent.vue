<script setup>
import { ref, computed, onMounted } from 'vue'

const slides = [
    { id: 1, img: '/src/assets/icons/indianaJones.jpg', text: 'DLC Indiana Jones and The Great Circle' },
    { id: 2, img: '/src/assets/icons/persona.jpeg', text: 'Melhor Jogo do Mundo!' },
    { id: 3, img: '/src/assets/icons/zelda.jpeg', text: 'The Legend Of Zelda: Breath of The Wild' }
]

const current = ref(0)
const intervalTime = 3000 
let interval = null

const next = () => {
    current.value = (current.value + 1) % slides.length //usei chatgpt, é uma doidera (modulo serve evitar acessar índice fora do array)
}
const prev = () => {
    current.value = (current.value - 1 + slides.length) % slides.length //usei chatgpt, é uma doidera (modulo serve evitar acessar índice fora do array)
}

const currentSlide = computed(() => 
    slides[current.value]
)

// autoplay automático
onMounted(() => {
    interval = setInterval(next, intervalTime)
})


</script>

<template>
    <div class="relative w-xl max-w-xl h-full mx-auto overflow-hidden rounded-2xl shadow-lg">
        <div class="transition-all max-h-[30vh] duration-700">
            <img :src="currentSlide.img" alt="slide">
            <div class="absolute inset-0 bg-black/20 flex items-end">
                <p class="text-white text-xl p-4 font-semibold">{{ currentSlide.text }}</p>
            </div>
        </div>

        <button @click="prev"
            class="absolute top-1/2 -translate-y-1/2 left-3 bg-black/40 text-white rounded-full p-2 hover:bg-black/60">
            <
        </button>
        <button @click="next"
            class="absolute top-1/2 -translate-y-1/2 right-3 bg-black/40 text-white rounded-full p-2 hover:bg-black/60">
            >
        </button>

        <div class="absolute bottom-3 left-0 right-0 flex justify-center space-x-2">
            <button v-for="(slide, index) in slides" :key="slide.id" @click="current = index"
                class="w-3 h-3 rounded-full transition-all"
                :class="current === index ? 'bg-white scale-125' : 'bg-gray-400/70'"></button>
        </div>
    </div>
</template>
