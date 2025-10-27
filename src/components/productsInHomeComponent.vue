<script setup>
import CardProductComponent from './cardProductComponent.vue';


</script>

<template>
    <main class=" m-20
        md:grid md:grid-cols-[25%_75%] md:gap-10 md:m-10
        ">
        <section class="hidden md:block bg-red-700 p-5 rounded-md text-white w-60">
            <span class="font-bold text-2xl">Categorias (3)</span>
            <ul class="text-xl mt-2 space-y-2 w-10">
                <li class="cursor-pointer font-semibold hover:underline">Todos</li>
                <li class="cursor-pointer hover:underline">Consoles</li>
                <li class="cursor-pointer hover:underline">Jogos</li>
                <li class="cursor-pointer hover:underline">Periféricos</li>
            </ul>
        </section>

        <section class="flex flex-col gap-10  
            md:grid md:grid-cols-3 ">
            <CardProductComponent
                image="/src/assets/icons/crash.jpg"
                name="Crash Bandicoot (Xbox One)" 
                :price="199.90" 
            />
            <CardProductComponent
                image="/src/assets/icons/xbox.jpg"
                name="Xbox Series X" 
                :price="4999.90" 
            />
            <CardProductComponent
                image="/src/assets/icons/mouse.png"
                name="Mouse sem fio Logitech M280" 
                :price="199.90" 
            />
        </section>
    </main>
</template>