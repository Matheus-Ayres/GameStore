<script setup>
import NavComponent from '../components/navComponent.vue';
import PriceOffComponent from '../components/priceOffComponent.vue';
import ProductsInHomeComponent from '../components/productsInHomeComponent.vue';
import SearchBarComponent from '../components/searchBarComponent.vue';


</script>

<template>
  <NavComponent />
  <div class="my-3 p-2 bg-gray-300 w-full
    md:hidden lg:hidden">
    <SearchBarComponent class="w-full"/>
  </div>
  <PriceOffComponent />
  <ProductsInHomeComponent/>
</template>
