import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { editUser } from '../Redux/UserSlice'

const Update = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { id } = useParams()

    const { userList } = useSelector((state) => state.users)
   

    useEffect(() => {
        const SingleUSer = userList.find((users) => {
            return users.id == id
        })
        reset(SingleUSer)
    }, [])

    const submitData = async (data) => {
        // console.log(data);
        await dispatch(editUser(data))
        navigate('/viewuser')
        alert("data has been updated..")
    }

    return (
        <div>
            <form onSubmit={handleSubmit(submitData)} method='post'>
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
                    <button type="submit" className='btn btn-danger'>Update</button>
                </div>
            </form>
        </div>
    )
}

export default Update
