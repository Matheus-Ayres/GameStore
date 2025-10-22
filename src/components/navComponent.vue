<template>
    <nav class="bg-red-600 p-5">
        <div class="container mx-auto">
            <div class="flex justify-between items-center">
                <router-link to="/">
                    <div class="text-white font-bold text-lg flex items-center space-x-2">
                        GameStore
                        <img src="/src/assets/icons/controle.png" class="h-8 w-8"></img>
                    </div>
                </router-link>
                <div class="flex justify-center items-center space-x-4">
                    <router-link to="/loginPage">
                        <img src="/src/assets/icons/user.png" class= "h-8 w-8" alt="User Icon">
                    </router-link>
                    <img src="/src/assets/icons/cart.png" class= "h-8 w-8 " alt="Cart Icon">
                    <img src="/src/assets/icons/menu.png" class= "h-8 w-8" alt="Menu Icon">
                </div>
            </div>
        </div>
    </nav>
</template>
