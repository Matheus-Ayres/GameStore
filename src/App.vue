<script setup lang="ts">
import { Notification, Notivue } from 'notivue';

</script>

<template>
    <router-view/>

    <Notivue v-slot="item" >
        <Notification :item="item" />
    </Notivue>
</template>
