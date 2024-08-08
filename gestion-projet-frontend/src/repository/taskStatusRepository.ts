import Repository from "./Repository";

const URL = "task-status-api";

export default {
    findAll() {
        return Repository.get(`${URL}/task-statuses`);
    }
}