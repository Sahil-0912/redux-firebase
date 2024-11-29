import { signInWithEmailAndPassword } from 'firebase/auth'
import React from 'react'
import { useForm } from 'react-hook-form'
import { auth } from '../../Redux/FireBase'

const Login = () => {
    const { register, handleSubmit } = useForm()
    function signin(data) {
        signInWithEmailAndPassword(auth, data.email, data.password)
            .then((res) => {
                console.log(res.user)
            })
            .catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            <h1>signin</h1>
            <form action="" method="post" onSubmit={handleSubmit(signin)} className='col-4 mx-auto my-5 p-5 shadow' >
                <div className="my-3">
                    <input type="text" {...register('email')} placeholder='enter email' className='form-control' />
                </div>
                <div className="my-3">
                    <input type="password" {...register('password')} placeholder='enter password' className='form-control' />
                </div>
                <div className="my-3">
                    <button className='btn btn-outline-success'>signin</button>
                </div>
            </form>
        </div>
    )
}

export default Login
