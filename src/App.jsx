import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import { BrowserRouter as Routers, Routes, Route, BrowserRouter } from 'react-router-dom'
import AddUser from './Pages/AddUser'
import Header from './Layouts/Header'
import ViewUser from './Pages/ViewUser'
import Update from './Pages/Update'
import Signup from './Pages/authentication/Signup'
import Login from './Pages/authentication/Login'
import GoogleLogin from './Pages/authentication/GoogleLogin'
import SingleUser from './Pages/SingleUser'
const App = () => {
  return (
    <div>
      <Routers>
        <Header />
        <Routes>
          <Route path='/' element={<AddUser />}></Route>
          <Route path='/viewuser' element={<ViewUser />}></Route>
          <Route path='/singleuser/:id' element={<SingleUser />}></Route>
          <Route path='/updateuser/:id' element={<Update />}></Route>
          <Route path='/signup' element={<Signup />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/googleAuth' element={<GoogleLogin />}></Route>
        </Routes>
      </Routers>
    </div>
  )
}

export default App
