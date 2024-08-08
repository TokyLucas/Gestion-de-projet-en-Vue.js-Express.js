import { defineStore } from 'pinia'

export const userStore = defineStore('user', {
    state: () => {
        return { 
            user: JSON.parse(JSON.parse(JSON.stringify(localStorage.getItem('user')))),
        }
    },
    actions: {
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            window.location.href = '/connexion';
        }
    }
})