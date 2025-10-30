<script setup>
import { ref } from 'vue';


const props = defineProps({
    image: String,
    name: String,
    price: Number,
    quantity: Number
})

const quantityInCard = ref(props.quantity)

function incrementQuantity() {
    quantityInCard.value += 1;
}

function decrementQuantity() {
    if (quantityInCard.value > 1) {
        quantityInCard.value -= 1;
    }
}
</script>

<template>
    
    <div class="flex items-center bg-gray-50 rounded-lg p-4 shadow-sm">
        <img class="w-24 h-auto rounded-md mr-4" :src="image"
            alt="Xbox Series X">
        <div class="info">
            <h2 class="text-lg text-gray-800">{{name}}</h2>
            <p class="text-red-600 font-bold mt-1">R${{price}}</p>
            <div class="text-sm">
                <span>
                    Quantidade 
                </span>

                <section class=" flex items-center justify-bewtween gap-4 mt-2">
                    <div class="bg-red-600 text-white font-bold p-1 rounded-l-full cursor-pointer" @click="decrementQuantity">
                        -
                    </div>
                    <div class="">
                        {{ quantityInCard }}
                    </div>
                    <div class="bg-red-600 text-white font-bold p-1 rounded-r-full cursor-pointer" @click="incrementQuantity">
                        +
                    </div>
                </section>
            </div>
        </div>
        
    </div>
</template>