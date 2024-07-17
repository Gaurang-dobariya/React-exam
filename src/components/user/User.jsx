import React, { useState } from 'react'
import Navbar from '../admin/Navbar'
import { useSelector } from 'react-redux'

const User = () => {

    let [filter, setfilter] = useState('');

    let recipesData = useSelector((state) => state.adminReducer)

    // filter recipes
    let handleFilter = (e) => {
        setfilter(e.target.value)
    }

    let filterRecipes = recipesData.recipes.filter(recipes =>
        recipes.recipeName.toLowerCase().includes(filter.toLowerCase()) &&
        (filter === '' || recipes.recipeName.toLowerCase().startsWith(filter.toLowerCase()))
    )

    return (
        <>
            <Navbar handleFilter={handleFilter} />
            <div className="container my-5">
                <div className="row">
                    {filterRecipes.map((val, index) => {
                        return (
                            <>
                                <div className="col-md-3 my-3">
                                    <div class="card border border-danger-subtle h-100">
                                        <img style={{ width: "300px",height:"225px",objectFit:"cover", padding: "20px" }} src={val.image} class="mx-auto" alt="Image" />
                                        <div class="card-body d-flex flex-column justify-content-between">
                                            <h4 class="card-title text-center">{val.recipeName}</h4>
                                            <p class="card-text">{val.desc}</p>
                                            <button class="btn btn-danger" style={{ width: "100%" }}>More Details</button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default User