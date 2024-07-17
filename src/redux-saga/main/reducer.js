import { DELETE_RECIPES_ERROR, DELETE_RECIPES_PENDING, DELETE_RECIPES_SUCCESS, GET_RECIPES_ERROR, GET_RECIPES_PENDING, GET_RECIPES_SUCCESS, POST_RECIPES_ERROR, POST_RECIPES_PENDING, POST_RECIPES_SUCCESS, UPDATE_RECIPES_ERROR, UPDATE_RECIPES_PENDING, UPDATE_RECIPES_SUCCESS } from "./action";

let initialState = {
    recipes: [],
    isLoading: false,
    isError: true
}

let adminReducer = (state = initialState, action) => {
    console.log(action, "action from reducer");

    switch (action.type) {
        case (GET_RECIPES_PENDING, POST_RECIPES_PENDING, DELETE_RECIPES_PENDING, UPDATE_RECIPES_PENDING): {
            return {
                ...state,
                isLoading: true
            }
        }

        // get recipes
        case GET_RECIPES_SUCCESS: {
            return {
                isLoading: false,
                recipes: action.payload
            }
        }

        // post recipes
        case POST_RECIPES_SUCCESS: {
            return {
                isLoading: false,
                recipes: state.recipes.concat(action.payload)
            }
        }

        // delete recipes
        case DELETE_RECIPES_SUCCESS: {
            return {
                isLoading: false,
                recipes: state.recipes.filter((val) => val.id !== action.payload.id)
            }
        }

        // update recipes
        case UPDATE_RECIPES_SUCCESS: {
            return {
                isLoading: false,
                recipes: state.recipes.map((val) => val.id == action.payload.id ? { ...action.payload } : val)
            }
        }

        case (GET_RECIPES_ERROR, POST_RECIPES_ERROR, DELETE_RECIPES_ERROR, UPDATE_RECIPES_ERROR): {
            return {
                isLoading: false,
                recipes: action.payload
            }
        }

        default: {
            return {
                ...state
            }
        }
    }
}

export default adminReducer