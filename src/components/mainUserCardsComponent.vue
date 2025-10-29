<script setup>
import UserInfosComponent from './userInfosComponent.vue';

</script>

<template>
    <div class="grid md:grid-cols-2 gap-10 m-10 bg-gray-200 p-10 rounded-2xl">
        <UserInfosComponent
            image="/src/assets/icons/orders.png"
            title="Meus Pedidos"
            description="Rastrear, devolver ou comprar novamente."
        />
        <UserInfosComponent
            image="/src/assets/icons/adress.png"
            title="Meus Endereços"
            description="Visualizar, alterar ou adicionar novos endereços de entrega."
        />
        <UserInfosComponent
            image="/src/assets/icons/paycard.png"
            title="Formas de Pagamento"
            description="Gerenciar cartões de crédito e débito salvos."
        />
        <UserInfosComponent
            image="/src/assets/icons/shield.png"
            title="Segurança"
            description="Gerenciar senhas, e-mail e número de telefone."
        />
        <UserInfosComponent
            image="/src/assets/icons/headphone.png"
            title="Atendimento"
            description="Suporte e atendimento ao cliente."
        />
        <UserInfosComponent
            image="/src/assets/icons/coin.png"
            title="Saldo e Resgates"
            description="Ver saldo ou resgatar boletos e PIX."
        />
    </div>
</template>