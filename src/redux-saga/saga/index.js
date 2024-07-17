import { all } from "redux-saga/effects";
import { handle_delete_recipes_saga, handle_get_recipes_saga, handle_post_recipes_saga, handle_update_recipes_saga } from "./saga";

function* rootSaga() {
    yield all([
        handle_get_recipes_saga(),
        handle_post_recipes_saga(),
        handle_delete_recipes_saga(),
        handle_update_recipes_saga()
    ])
}

export default rootSaga