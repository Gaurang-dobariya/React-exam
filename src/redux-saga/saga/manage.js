import { call, put } from "redux-saga/effects";
import { delete_recipes, get_recipes, post_recipes, update_recipes } from "../main/api";
import { DELETE_RECIPES_ERROR, DELETE_RECIPES_SUCCESS, GET_RECIPES_ERROR, GET_RECIPES_SUCCESS, POST_RECIPES_ERROR, POST_RECIPES_SUCCESS, UPDATE_RECIPES_ERROR, UPDATE_RECIPES_SUCCESS } from "../main/action";

function* handle_get_recipes(action) {
    try {
        console.log(action, "action from get manage");

        let { data, status } = yield call(get_recipes, action)

        yield put({ type: GET_RECIPES_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: GET_RECIPES_ERROR, payload: err })
    }
}

function* handle_post_recipes(action) {
    try {
        // console.log(action, "action from get manage");

        let { data, status } = yield call(post_recipes, action)

        yield put({ type: POST_RECIPES_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: POST_RECIPES_ERROR, payload: err })
    }
}

function* handle_delete_recipes(action) {
    try {
        // console.log(action, "action from delete manage");

        let { data, status } = yield call(delete_recipes, action)

        yield put({ type: DELETE_RECIPES_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: DELETE_RECIPES_ERROR, payload: err })
    }
}

function* handle_update_recipes(action) {
    try {
        console.log(action, "action from update manage");

        let { data, status } = yield call(update_recipes, action)

        yield put({ type: UPDATE_RECIPES_SUCCESS, payload: data })

    } catch (err) {
        yield put({ type: UPDATE_RECIPES_ERROR, payload: err })
    }
}

export { handle_get_recipes, handle_post_recipes, handle_delete_recipes, handle_update_recipes }