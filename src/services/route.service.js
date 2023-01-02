import { routes } from "../constants/routes";

const getRoute = (name) => {
    return routes[name]
}

export const makeFetch = async (name) => {
    const url = getRoute(name);
    const response = await fetch(url, {
      method: "GET",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
}