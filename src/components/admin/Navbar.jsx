import React from 'react'
import image from "../../images/logo.png"
import { Link } from 'react-router-dom'

const Navbar = ({ handleFilter }) => {
    return (
        <>
            <nav class="navbar navbar-expand-lg bg-danger-subtle">
                <div class="container-fluid">
                    <Link class="navbar-brand"><img src={image} width={175} alt="" /></Link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <form class="d-flex" role="search">
                        <input class="form-control border border-danger me-2 text-center rounded-pill" style={{width:"300px"}} type="search" onChange={handleFilter} placeholder="Search" aria-label="Search" />
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar