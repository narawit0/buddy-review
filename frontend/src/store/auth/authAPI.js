import Api from "../../api";

export async function login(data) {
    const response = await Api.post("/auth/login", data);

    return response;
}