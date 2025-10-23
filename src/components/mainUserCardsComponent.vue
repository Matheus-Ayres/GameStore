<script setup>
import UserInfosComponent from './userInfosComponent.vue';

</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-10 bg-gray-100 p-10 rounded-2xl">
        <UserInfosComponent
            image="/src/assets/icons/orders.png"
            title="Meus Pedidos"
            description="Rastrear, devolver ou comprar novamente"
        />
        <UserInfosComponent
            image="/src/assets/icons/adress.png"
            title="Meus Endereços"
            description="Visualizar, alterar ou adicionar novos endereços de entrega    "
        />
        <UserInfosComponent
            image="/src/assets/icons/paycard.png"
            title="Meus Pedidos"
            description="Rastrear, devolver ou comprar novamente"
        />
        <UserInfosComponent
            image="/src/assets/icons/orders.png"
            title="Meus Pedidos"
            description="Rastrear, devolver ou comprar novamente"
        />
    </div>
</template>