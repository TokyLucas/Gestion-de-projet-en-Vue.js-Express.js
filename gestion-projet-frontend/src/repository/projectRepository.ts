import Repository from "./Repository";

import { getCookie, setCookie } from 'typescript-cookie'

const URL = "project-api";

export default {

    create(body: any) {
        var authHeader = undefined;
        if(getCookie("token")) {
            authHeader = { "Authorization": `Bearer ${getCookie("token")}` } 
        }

        return Repository.post(`${URL}/project`, body, {
            headers: authHeader
        });
    },

    findAll() {
        return Repository.get(`${URL}/projects`);
    },

    findById(id: any) {
        return Repository.get(`${URL}/project/${id}`);
    },

    update(body: any, id: number) {
        var authHeader = undefined;
        if(getCookie("token")) {
            authHeader = { "Authorization": `Bearer ${getCookie("token")}` } 
        }
        return Repository.put(`${URL}/project/${id}`, body, {
            headers: authHeader
        });
    },

    delete(id: number) {
        var authHeader = undefined;
        if(getCookie("token")) {
            authHeader = { "Authorization": `Bearer ${getCookie("token")}` } 
        }
        return Repository.delete(`${URL}/project/${id}`, {
            headers: authHeader
        });
    },
}