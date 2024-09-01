export default defineNuxtRouteMiddleware((to, from) => {

// Questo non e' un middleware globale e deve essere richiamato dove si necessita

    const isLoggedIn = false

    console.log(to);
    console.log(from);
    
    
    if (!isLoggedIn) {
        return navigateTo('/login')
    } else {
        return navigateTo(to.fullPath)
    } 
})