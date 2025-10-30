import { ref } from 'vue';
import router from './router';
import { push } from 'notivue'

export const isLogged = ref(false);
export const userName = ref('');
export const userPassword = ref('');

export function login(user, password) {
    if (user === userName.value && password === userPassword.value){
        isLogged.value = true;
        push.success({
            title: 'Login realizado com sucesso!',
            message: `Bem-vindo, ${user}!`
        });
        router.push('/');
    }else {
        push.error({
            title: 'Erro no login!',
            message: `Usuário e/ou senha incorretos!`
        });
    }
}

export function logout() {
    push.info({
        title: 'Logout realizado com sucesso!',
        message: `Até mais, ${userName.value}!`
    });
    isLogged.value = false;
}

export function createUser (user, password) {
    userName.value = user;
    userPassword.value = password;
    push.success({
            title: 'Registro realizado com sucesso!',
            message: `Bem vindo, ${userName.value}!`
    });
    login(userName.value, userPassword.value);
}