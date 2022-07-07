import {createDB} from "../../db.js";

export default class ReservationLogs {
    constructor() {
        this.db = createDB();
    }

    findByUserID(user_id) {
        const { reservation_logs } = this.db.db.data;

        const result = reservation_logs.filter((reservation_log) => reservation_log.user_id == user_id)

        return result;
    }
}