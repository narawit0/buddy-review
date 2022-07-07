import {createDB} from "../../db.js";

export default class User {
    constructor() {
        this.db = createDB();
    }

    findByUsername(username) {
        const { users } = this.db.db.data;
        const user = users
            .find((item) => {
                return item.username === username;
            });

        return user;
    }
}