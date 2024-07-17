import React, { useEffect, useRef, useState } from 'react'
import Navbar from './Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_RECIPES_PENDING, GET_RECIPES_PENDING, POST_RECIPES_PENDING, UPDATE_RECIPES_PENDING } from '../../redux-saga/main/action'

const Admin = () => {

    let [filter, setfilter] = useState('');
    let [view, setview] = useState({})
    let dispatch = useDispatch()

    let image = useRef()
    let recipeName = useRef()
    let desc = useRef()

    // add recipes
    let addRecipes = () => {
        let recipes = {
            image: image.current.value,
            recipeName: recipeName.current.value,
            desc: desc.current.value
        }

        console.log(recipes);

        dispatch({ type: POST_RECIPES_PENDING, payload: recipes })
    }

    // fetch recipes
    let result = useSelector((state) => state.adminReducer)

    // delete recipes
    let deleteRecipes = (id) => {
        // console.log(id, "id from admin");
        dispatch({ type: DELETE_RECIPES_PENDING, payload: id })
    }

    // update recipes
    function viewData(recipes) {
        // console.log(recipes);
        setview(recipes)
    }

    function handle(e) {
        setview({ ...view, [e.target.name]: e.target.value })
    }

    function updateRecipes() {
        dispatch({ type: UPDATE_RECIPES_PENDING, payload: view })
    }

    useEffect(() => {
        dispatch({ type: GET_RECIPES_PENDING })
    }, [])


    // filter recipes
    let handleFilter = (e) => {
        setfilter(e.target.value)
    }

    let filterRecipes = result.recipes.filter(recipes =>
        recipes.recipeName.toLowerCase().includes(filter.toLowerCase()) &&
        (filter === '' || recipes.recipeName.toLowerCase().startsWith(filter.toLowerCase()))
    )

    return (
        <>
            <Navbar handleFilter={handleFilter} />

            <div className='container my-5'>
                <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Add Recipes</button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">Add Recipes</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label fw-semibold">Image:</label>
                                    <input type="text" ref={image} class="form-control text-center" placeholder='Image Url' />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label fw-semibold">RecipeName:</label>
                                    <input type="text" ref={recipeName} class="form-control text-center" placeholder='recipe name' />
                                </div>
                                <div class="mb-3">
                                    <label for="recipient-name" class="col-form-label fw-semibold">Description:</label>
                                    <input type="text" ref={desc} class="form-control text-center" placeholder='recipe decription' />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" data-bs-dismiss="modal" class="btn btn-danger" onClick={addRecipes}>ADD RECIPES</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <table class="table border border-danger-subtle text-center">
                    <thead>
                        <tr>
                            <th scope="col" className='bg-danger text-light text-opacity-75'>No</th>
                            <th scope="col" className='bg-danger text-light text-opacity-75'>Image</th>
                            <th scope="col" className='bg-danger text-light text-opacity-75'>Recipe-Name</th>
                            <th scope="col" className='bg-danger text-light text-opacity-75'>Decription</th>
                            <th scope="col" className='bg-danger text-light text-opacity-75'>Delete</th>
                            <th scope="col" className='bg-danger text-light text-opacity-75'>Update</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            filterRecipes.map((val, index) => {
                                return (
                                    <tr>
                                        <th>{index + 1}</th>
                                        <td><img src={val.image} width={75} height={75} className='rounded-circle' /></td>
                                        <td className='fw-semibold'>{val.recipeName}</td>
                                        <td>{val.desc}</td>
                                        <td><button onClick={() => deleteRecipes(val.id)} className='btn btn-outline-danger'>Delete</button></td>
                                        <td><button onClick={() => viewData(val)} class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#updateModal" data-bs-whatever="@mdo">Update</button></td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div class="modal fade" id="updateModal" tabindex="-1" aria-labelledby="updateModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="updateModalLabel">Update Recipes Details</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <div class="mb-3">
                                    <label class="col-form-label fw-semibold">Image:</label>
                                    <input name='image' value={view.image} onChange={handle} type="text" class="form-control border border-secondary" />
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label fw-semibold">RecipeName:</label>
                                    <input type="text" name='recipeName' value={view.recipeName} onChange={handle} class="form-control border border-secondary" />
                                </div>
                                <div class="mb-3">
                                    <label class="col-form-label fw-semibold">Description:</label>
                                    <input type="text" name='desc' value={view.desc} onChange={handle} class="form-control border border-secondary" />
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="button" onClick={updateRecipes} data-bs-dismiss="modal" class="btn btn-danger">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Admin