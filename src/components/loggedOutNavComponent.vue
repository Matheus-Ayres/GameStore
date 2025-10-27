<script setup>

</script>

<template>

    <section>
        <div class="space-x-2">
            <RouterLink to="/registerPage">
                <button class=" text-white font-semibold py-2 px-4 rounded 
                hover:bg-white hover:text-red-600 transition duration-300">
                    REGISTRAR
                </button>
            </RouterLink>

            <RouterLink to="/loginPage">
                <button class=" text-red-600 border border-transparent font-bold py-2 px-4 rounded  bg-white
                hover:bg-red-800 hover:border-white hover:text-white transition duration-300">
                    ENTRAR
                </button>
            </RouterLink>

        </div>
    </section>
</template>