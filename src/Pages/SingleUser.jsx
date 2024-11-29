import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { singleUser } from '../Redux/UserSlice'

const SingleUser = () => {

    const { userList } = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const { id } = useParams()

    useEffect(() => {
        dispatch(singleUser(id))
    }, [dispatch, id])
    console.log(userList);

    return (
        <div>
            <ul className='col-6 mx-auto my-5 p-5 shadow'>
                <li>Product Name: {userList.pname}</li>
                <li>Product Date: {userList.pdate}</li>
                <li>Product Description: {userList.pdesc}</li>
            </ul>
        </div>
    )
}

export default SingleUser
