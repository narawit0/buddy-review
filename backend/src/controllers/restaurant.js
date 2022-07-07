import Restaurant from "../models/restaurant.js";
import User from "../models/user.js";
import { createDB } from "../../db.js";
import ReservationLogs from "../models/reservation_logs.js";

export default class RestaurantController {
    all(req, res) {
        let result;

        const { store_name } = req.query;
        const restaurant = new Restaurant();

        if (!store_name) {
            result = restaurant.getAll();
        } else {
            result = restaurant.findByName(store_name);
        }

        return res.json({
            'data': result ?? []
        })
    }

    reserve(req, res) {
        let db = createDB();
        const userModel = new User();
        const restaurant = new Restaurant();

        const { UUID, slot_id } = req.body;

        const result = restaurant.findByUUID(UUID);

        if (result) {

            let slot_index = null;

            result.available_slots.find((available_slot, index) => {
                if (available_slot.slot_id == slot_id) {
                    slot_index = index;
                }
            })

            if (slot_index !== null) {
                if (result.available_slots[slot_index].status == 1) {
                    result.available_slots[slot_index].status = 0;

                    const user = userModel.findByUsername(req.user.username);

                    db.db.data.reservation_logs.push({
                        "user_id":   user.user_id,
                        "store_id": result.id,
                        "store_name": result.store_name,
                        "slot_id": slot_id,
                        "duration": result.available_slots[slot_index].duration,
                        "status": "reserved"
                    })

                    db.db.write();

                    res.json({
                        msg: "your reservation is successfully reserved",
                        status: 200
                    })
                } else {
                    res
                        .status(400)
                        .json({
                            msg: "slot is not available",
                            status: 400
                        })
                }
            }
        }
    }

    reservationLogs(req, res) {
        const userModel = new User();
        const reservationLogsModel = new ReservationLogs()

        const user = userModel.findByUsername(req.user.username);

        const logs = reservationLogsModel.findByUserID(user.user_id);

        return res.json({
            data: logs ?? []
        })
    }
}