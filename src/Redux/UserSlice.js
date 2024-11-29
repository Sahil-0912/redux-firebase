import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./FireBase";
const initialState = {
    userList: []
}
export const addUser = createAsyncThunk('user/addUser', async (data) => {
    const res = await addDoc(collection(db, "blogs"), data)
    console.log(res.id)
    const newUser = {
        // id: res.id,
        ...data
    }
    return newUser
})
export const viewUser = createAsyncThunk('user/viewUser', async () => {
    const res = await getDocs(collection(db, "blogs"));

    const arr = []
    res.forEach((doc) => {
        console.log(doc.data())
        const newdata = {
            id: doc.id,
            ...doc.data()
        }
        arr.push(newdata)
    })
    return arr
})

export const deleteUser = createAsyncThunk('user/deleteUser', async (id) => {
    await deleteDoc(doc(db, "blogs", id))
    return id
})

export const singleUser = createAsyncThunk('/user/singleUser', async (id) => {
    const res = await getDoc(doc(db, "blogs", id))
    return res.data()
})

export const editUser = createAsyncThunk('user/editUser', async (data) => {
    console.log("data...................")
    console.log(data)
    const { id } = data;
    console.log("id..............")
    console.log(id)
    await setDoc(doc(db, "blogs", id), data)
    return data
})


const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {},
    extraReducers: (response) => {
        response
            .addCase(addUser.fulfilled, (state, action) => {
                state.userList.push(action.payload)
            })
            .addCase(viewUser.fulfilled, (state, action) => {
                state.userList = action.payload
            })
            .addCase(deleteUser.fulfilled, (state, action) => {
                const id = action.payload
                console.log(id);

                const fliter_Data = state.userList.filter((product) => {
                    return product.id !== id
                })
                state.userList = fliter_Data
            })

            .addCase(editUser.fulfilled, (state, action) => {
                const { id } = action.payload
                console.log("id.............");
                console.log(id)
                const indexno = state.userList.findIndex((product) => {
                    return product.id == id
                })
                if (indexno != -1) {
                    state.userList[indexno] = action.payload
                }
            })

            .addCase(singleUser.fulfilled, (state, action) => {
                state.userList = action.payload
            })
    }
})
export default userSlice.reducer