import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'kim'
})

let stock = createSlice({
    name: 'stock',
    initialState: [10,11,12]
})

let cart = createSlice({
    name: 'cart',
    initialState: [
        {id : 0, name : 'White and Black', count : 2},
        {id : 2, name : 'Grey Yordan', count : 1}] 
})

export default configureStore({
    reducer: { 
        user: user .reducer,
        stock: stock.reducer,
        cart: cart.reducer
    }
}) 


// Redux store에 state 보관하는 방법 
// 1) createSlice() 로 state 만들고 -> useState와 용도가 비슷
// 2) condigureStore() 안에 등록하기 { 작명 : createSlice만든거.reducer } 

// Reduce store에 있는 state 가져다쓰는법
//  useSelector((state) => { return state } ) -> store의 모든 state가 return 

