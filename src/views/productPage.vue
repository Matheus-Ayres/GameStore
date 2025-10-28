<script setup>
import NavBarComponent from '../components/navComponent.vue';
</script>

<template>
    <NavBarComponent />

    <main class="bg-white p-6 rounded-2xl shadow-lg grid grid-cols-1 
        md:grid-cols-2 gap-8">
        <img src="/src/assets/icons/crash.jpg" class="rounded-xl shadow-md object-cover" />

        <section class="flex flex-col justify-between">
            <div>
                <h1 class="text-2xl font-bold text-gray-900 ">
                    Crash Bandicoot N. Sane Trilogy - Xbox One Standard Edition
                </h1>
            </div>

            <section class="flex flex-col items-center bg-gray-200 p-6 rounded-xl shadow-inner mt-4">
                <h2 class="text-3xl font-bold mb-2 text-gray-800">R$ 199,90</h2>
                <button class="bg-red-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-red-700 transition">
                    Comprar Agora
                </button>
                <button
                    class="mt-3 text-red-600 font-semibold border border-red-600 px-6 py-2 rounded-lg 
                    hover:bg-red-600 hover:text-white transition">
                    Adicionar ao Carrinho
                </button>
            </section>

            <section class="mt-6">
                <h3 class="text-xl font-bold text-gray-800 mb-2">Sobre</h3>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                    <li> Crash Bandicoot 2: Cortex contra-ataca</li>
                    <li>Descrição do conteúdo do Entertainment Software Rating Board (ESRB): violência de desenho animado, travessura cômica</li>
                </ul>
            </section>
        </section>
    </main>
</template>
