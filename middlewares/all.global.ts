export default defineNuxtRouteMiddleware((to, from) => {

// Questo e' un middleware globale e viene triggherato in tutte le pagine

    console.log(to);
    console.log(from);

})