import Repository from "./Repository";

import { getCookie, setCookie } from 'typescript-cookie'

const URL = "user-api";

export default {
    login(body: any) {
        return Repository.post(`${URL}/login`, body);
    },

    create(body: any) {
        var authHeader = undefined;
        if(getCookie("token")) {
            authHeader = { "Authorization": `Bearer ${getCookie("token")}` } 
        }

        return Repository.post(`${URL}/user`, body, {
            headers: authHeader
        });
    },

    findAll(page = 1) {
        return Repository.get(`${URL}/users?page=${page}`);
    },

    update(body: any, id: number) {
        var authHeader = undefined;
        if(getCookie("token")) {
            authHeader = { "Authorization": `Bearer ${getCookie("token")}` } 
        }
        return Repository.put(`${URL}/user/${id}`, body, {
            headers: authHeader
        });
    },

    delete(id: number) {
        var authHeader = undefined;
        if(getCookie("token")) {
            authHeader = { "Authorization": `Bearer ${getCookie("token")}` } 
        }
        return Repository.delete(`${URL}/user/${id}`, {
            headers: authHeader
        });
    },
}