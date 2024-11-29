import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { addUser } from '../Redux/UserSlice'
import { useNavigate } from 'react-router-dom'

const AddUser = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const submitData = (data) => {
        dispatch(addUser(data))
        alert("Data has been inserted")
        navigate('/viewuser')
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitData)} method='post'> {/* Moved onSubmit to the form tag */}
                <div className="col-6 mx-auto my-5 p-5 shadow">
                    <div className="my-3">
                        <label>Product Title</label>
                        <input
                            type="text"
                            {...register("pname")}
                            className='form-control'
                            placeholder='Enter Product Name'
                        />
                    </div>
                    <div className="my-3">
                        <label>Product Date</label>
                        <input
                            type="date"
                            {...register("pdate")} 
                            className='form-control'
                        />
                    </div>
                    <div className="my-3">
                        <label>Product Description</label>
                        <textarea
                            className='form-control'
                            {...register("pdesc")}
                            placeholder='Enter Product Description'
                        />
                    </div>
                    <button type="submit" className='btn btn-danger'>Submit</button> 
                </div>
            </form>
        </div>
    )
}

export default AddUser
