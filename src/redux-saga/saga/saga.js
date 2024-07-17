import { takeLatest } from "redux-saga/effects";
import { DELETE_RECIPES_PENDING, GET_RECIPES_PENDING, POST_RECIPES_PENDING, UPDATE_RECIPES_PENDING } from "../main/action";
import { handle_delete_recipes, handle_get_recipes, handle_post_recipes, handle_update_recipes } from "./manage";

function* handle_get_recipes_saga() {
    yield takeLatest(GET_RECIPES_PENDING, handle_get_recipes)
}

function* handle_post_recipes_saga() {
    yield takeLatest(POST_RECIPES_PENDING, handle_post_recipes)
}

function* handle_delete_recipes_saga() {
    yield takeLatest(DELETE_RECIPES_PENDING, handle_delete_recipes)
}

function* handle_update_recipes_saga() {
    yield takeLatest(UPDATE_RECIPES_PENDING, handle_update_recipes)
}

export { handle_get_recipes_saga, handle_post_recipes_saga, handle_delete_recipes_saga, handle_update_recipes_saga }