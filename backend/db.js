import { join, dirname } from 'path'
import { Low, JSONFile } from 'lowdb'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url));

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter);
let instance;

class DB {
    constructor() {
        this.db = db;
    }

    init() {
        this.db.data = {
            users:  [
                {
                    "user_id": 1,
                    "username": "user1",
                    "password": "654321"
                },
                {
                    "user_id": 2,
                    "username": "user2",
                    "password": "123456",
                }
            ],
            restaurants: [
                {
                    "id": "1",
                    "store_name": "Restaurant 1",
                    "UUID": "01",
                    "store_image": "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGZvb2R8ZW58MHx8MHx8&w=1000&q=80",
                    "available_slots": [
                        {
                            "slot_id": "1",
                            "duration": "09.00 - 10.00",
                            "status": 0
                        },
                        {
                            "slot_id": "2",
                            "duration": "10.00 - 11.00",
                            "status": 1
                        },
                        {
                            "slot_id": "3",
                            "duration": "11.00 - 12.00",
                            "status": 1
                        },
                        {
                            "slot_id": "4",
                            "duration": "13.00 - 14.00",
                            "status": 1
                        },
                        {
                            "slot_id": "5",
                            "duration": "14.00 - 15.00",
                            "status": 1
                        }
                    ]
                },
                {
                    "id": "2",
                    "UUID": "02",
                    "store_name": "Restaurant 2",
                    "store_image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    "available_slots": [
                        {
                            "slot_id": "1",
                            "duration": "09.00 - 10.00",
                            "status": 1
                        },
                        {
                            "slot_id": "2",
                            "duration": "10.00 - 11.00",
                            "status": 1
                        },
                        {
                            "slot_id": "3",
                            "duration": "11.00 - 12.00",
                            "status": 1
                        },
                        {
                            "slot_id": "4",
                            "duration": "13.00 - 14.00",
                            "status": 1
                        },
                        {
                            "slot_id": "5",
                            "duration": "14.00 - 15.00",
                            "status": 1
                        },
                        {
                            "slot_id": "6",
                            "duration": "15.00 - 16.00",
                            "status": 0
                        }
                    ]
                },
            ],
            reservation_logs: [],
        }


        this.db.write();
    }
}

export const createDB = () => {
    if (!instance) {
        instance = new DB();
    } else {
        console.log("Instance is already created");
    }

    return instance;
}