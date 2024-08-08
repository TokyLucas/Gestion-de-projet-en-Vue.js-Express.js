import Repository from "./Repository";

import { getCookie, setCookie } from 'typescript-cookie'

const URL = "task-api";

export default {

    create(body: any) {
        return Repository.post(`${URL}/task`, body, {
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            }
        });
    },

    findAll() {
        return Repository.get(`${URL}/tasks`);
    },

    update(body: any, id: number) {
        return Repository.put(`${URL}/task/${id}`, body, {
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            }
        });
    },

    delete(id: number) {
        return Repository.delete(`${URL}/task/${id}`, {
            headers: {
                "Authorization": `Bearer ${getCookie("token")}`
            }
        });
    },
}