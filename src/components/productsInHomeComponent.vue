<script setup>
import CardProductComponent from './cardProductComponent.vue';
import CategoriesComponent from './categoriesComponent.vue';
import CategoriesMobileComponent from './categoriesMobileComponent.vue';


</script>

<template>
    <main class="md:grid md:grid-cols-[25%_75%] md:gap-10 md:m-10">
        <section>
            <div class="hidden md:block bg-red-700 p-5 rounded-md text-white w-60">
                <CategoriesComponent/>
            </div>
            <div class=" bg-red-700 p-5 mt-2 text-white w-full mb-10 
                md:hidden" >
                <CategoriesMobileComponent />
            </div>
        </section>

        <section class="flex flex-col gap-10 m-20 mt-1
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