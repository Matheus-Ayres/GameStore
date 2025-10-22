import { ref } from 'vue';

export const isLogged = ref(false);

export function login() {
    isLogged.value = true;
}

export function logout() {
    isLogged.value = false;
}