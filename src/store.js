import { ref } from 'vue';
import router from './router';

export const isLogged = ref(false);
export const userName = ref('');
export const userPassword = ref('');

export function login(user, password) {
    if (user === userName.value && password === userPassword.value){
        isLogged.value = true;
        router.push('/');
    }else {
        alert("Usuário e/ou senha incorretos!");
    }
}

export function logout() {
    isLogged.value = false;
}

export function createUser (user, password) {
    userName.value = user;
    userPassword.value = password;
}