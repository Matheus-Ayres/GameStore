<script setup lang="ts">
import NavBar from '../components/navComponent.vue';
import CartItem from '../components/itemInCartComponent.vue';
import CouponComponent from '../components/couponComponent.vue';

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
                :quantity="1"
            />

            <CartItem
                image="/src/assets/icons/xbox.jpg"
                name="Console Xbox Series X"
                :price="4999.90"
                :quantity="1"
            />
            
            <CouponComponent />
            
            <div class="total-area flex justify-between items-center mt-6 text-lg">
                <p><strong>Total:</strong> R$ 5.199,80</p>
                <button
                    class="finalizar bg-red-600 text-white px-4 py-2 rounded-lg font-bold hover:bg-red-700 transition-colors">Finalizar
                    Compra</button>
            </div>
        </section>
    </main>

</template>