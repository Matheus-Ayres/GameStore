<script setup lang="ts">
import NavBar from '../components/navComponent.vue';
import CartItem from '../components/itemInCartComponent.vue';
import { ref } from 'vue';

const couponCode = ref('GAMER10');
const correctCoupon = false;
const inputCoupon = ref('');

function applyCoupon() {
    if (inputCoupon.value === couponCode) {
        correctCoupon.value = true;
    } else {
        correctCoupon.value = false;
    }
}

</script>

<template>
    <NavBar />

    <main class="max-w-3xl mx-auto my-10 p-5 bg-white rounded-xl shadow-md">
        <h1 class="mb-5 text-2xl text-gray-800 font-bold">Meu Carrinho</h1>
        <section class="cart space-y-4">

            <CartItem
                image="/src/assets/icons/crash.jpg"
                name="Crash Bandicoot (Xbox One)" 
                :price="199.90" 
            />

            <CartItem
                image="/src/assets/icons/xbox.jpg"
                name="Console Xbox Series X"
                :price="4999.90"
            />
            
            <div class="coupon-area flex items-center gap-2 mt-5">
                <label for="cupom" class="font-bold">Cupom:</label>
                <input v-model="inputCoupon" type="text" id="cupom" placeholder="Digite seu cupom"
                    class="flex-1 p-2 border border-gray-300 rounded-md">
                <button class="apply bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors">
                    Aplicar
                </button>
            </div>
            <span v-if="correctCoupon" class="applied-coupon text-green-600 font-semibold">
                Cupom aplicado: <strong>GAMER10</strong> - Desconto de 10%
            </span>
            
            <div class="total-area flex justify-between items-center mt-6 text-lg">
                <p><strong>Total:</strong> R$ 5.199,80</p>
                <button
                    class="finalizar bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors">Finalizar
                    Compra</button>
            </div>
        </section>
    </main>

</template>