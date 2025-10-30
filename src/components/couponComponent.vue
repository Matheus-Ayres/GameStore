<script setup>
import { ref } from 'vue';

const couponCode = ref('GAMER10');
const correctCoupon = ref();
const inputCoupon = ref('');

function applyCoupon() {
    console.log('Aplicando cupom:', inputCoupon.value);
    if (inputCoupon.value === couponCode.value ) {
        console.log('Cupom aplicado com sucesso!');
        correctCoupon.value = true;
    } else {
        correctCoupon.value = false;
    }
}

</script>

<template>
    <form @submit.prevent="applyCoupon" class="mt-6">
        <div class="coupon-area flex items-center gap-2 mt-5">
            <label for="cupom" class="font-bold">Cupom:</label>
            <input v-model="inputCoupon" type="text" id="cupom" placeholder="Digite seu cupom"
                class="flex-1 p-2 border border-gray-300 rounded-md">
            <button type="submit"
                class="apply bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
                Aplicar
            </button>
        </div>
    </form>
    <span v-if="correctCoupon" class=" text-green-600 font-semibold">
        Cupom aplicado: <strong>GAMER10</strong> - Desconto de 10%
    </span>
    <span v-if="correctCoupon == false" class="text-red-800 font-semibold">
        Cupom inválido
    </span>
</template>