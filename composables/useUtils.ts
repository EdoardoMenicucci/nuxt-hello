import { ref } from "vue"

export const useUtils = () => {
  const sayHello = () => {
    console.log('hello from useUtils')
  }
  return{
    sayHello,
  }
}
