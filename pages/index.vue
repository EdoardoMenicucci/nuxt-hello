<script setup>
// COSI INDICO DI UTILIZZARE UNO SPECIFICO LAYOUT
definePageMeta({
    layout: 'darklayout',
})
// IMPORTO LA FUNZIONE DAL FILE useUtils.ts
const { sayHello } = useUtils()


</script>


<template>
    <h1>
        hello Nuxt
    </h1>
    <!-- Cosi utilizzo un componente (anchesso segue la convenzione delle cartelle per poterlo importare)-->
    <banner />
    <button @click="sayHello()">Saluta</button>
</template>
