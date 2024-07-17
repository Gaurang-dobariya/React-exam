import axios from "axios"
import { BASE_URL, DELETE_RECIPES, GET_RECIPES, POST_RECIPES, UPDATE_RECIPES } from "../constant";

let get_recipes = async (action) => {
    // console.log(action, "action from get api");

    let { data, status } = await axios.get(BASE_URL + GET_RECIPES)

    return { data, status }
}

let post_recipes = async (action) => {
    // console.log(action, "action from post api");

    let { data, status } = await axios.post(BASE_URL + POST_RECIPES, action.payload)

    return { data, status }
}

let delete_recipes = async (action) => {
    // console.log(action, "action from delete api");

    let { data, status } = await axios.delete(BASE_URL + DELETE_RECIPES + action.payload)

    return { data, status }
}

let update_recipes = async (action) => {
    console.log(action, "action from update api");

    let { data, status } = await axios.put(BASE_URL + UPDATE_RECIPES + action.payload.id, action.payload)

    return { data, status }
}

export { get_recipes, post_recipes, delete_recipes, update_recipes }