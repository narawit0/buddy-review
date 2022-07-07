import {createDB} from "../../db.js";

export default class Restaurant {
    constructor() {
        this.db = createDB();
    }

    getAll() {
        const { restaurants } = this.db.db.data;
        return restaurants;
    }

    findByName(storeName) {
        const { restaurants } = this.db.db.data;
        const result = restaurants.filter((restaurant) => {
            return restaurant.store_name.toLowerCase().includes(storeName.toLowerCase());
        })

        return result;
    }

    findByUUID(UUID) {
        const { restaurants } = this.db.db.data;
        const result = restaurants
            .find((item) => {
                return item.UUID === UUID;
            });

        return result;
    }
}