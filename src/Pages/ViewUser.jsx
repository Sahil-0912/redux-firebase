import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { viewUser, deleteUser } from '../Redux/UserSlice'
import { NavLink } from 'react-router-dom'
import { FaEye, FaPencilAlt, FaTrash } from "react-icons/fa";

const ViewUser = () => {
    const { userList } = useSelector((state) => state.users)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(viewUser())
    }, [dispatch])
    console.log(userList);

    function trash(id) {
        if (confirm("do you want to delete this item.?")) {
            dispatch(deleteUser(id))
        }
    }
    return (
        <div>
            <div className='table-responsive container my-5'>
                <table className='table table-hover table-stripped table-dark table-bordered'>
                    <thead className='table-success text-uppercase'>
                        <tr>
                            <th>SRNO</th>
                            <th>ProductName</th>
                            <th>ProductDate</th>
                            <th>ProductDescription</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            userList.map((product, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{product?.pname}</td>
                                        <td>{product?.pdate}</td>
                                        <td>{product?.pdesc}</td>
                                        <td>
                                            <NavLink to={`/updateuser/${product.id}`}>
                                                <button className='btn btn-success mx-2 edit'><FaPencilAlt /></button>
                                            </NavLink>

                                            <NavLink to={`/singleuser/${product.id}`}>
                                                <button className='btn btn-danger mx-2 edit'><FaEye /></button>
                                            </NavLink>

                                            <button className='btn btn-warning trash' onClick={() => trash(product.id)}><FaTrash />
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ViewUser
