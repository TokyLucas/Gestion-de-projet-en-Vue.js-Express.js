import Repository from "./Repository";

const URL = "user-role-api";

export default {
    findAll() {
        return Repository.get(`${URL}/user-roles`);
    }
}