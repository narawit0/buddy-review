import Api from "../../api";

export async function fetchRestaurants(storeName) {
    const response = await Api.get(`/restaurants?store_name=${storeName}`);

    return response;
}

export async function reserveRestaurant(data) {
    const response = await Api.post("/restaurants/reservation", data)

    return response;
}

export async function fetchReservationLogs() {
    const response = await Api.get("/restaurants/reservation/logs");

    return response;
}