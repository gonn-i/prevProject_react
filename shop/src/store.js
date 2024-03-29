import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: 'kim',
    reducers: {
        changeName(state) {
            return 'john ' + state
        }
    }
})

export let { changeName } = user.actions

let stock = createSlice({
    name: 'stock',
    initialState: [10,11,12], 
    }
)

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


// store 의 state 변경하는 방법 
// 1. store에서 reducers: { 변경함수 }  -> 로 변경방법 적어주기 
// 2. 변경함수 export 해주기 
// 3. 만든 함수 import + let dispatch = useDispatch() -> store 로 요청을 보내주는 함수 
// dispatch(state변경함수()) .... 실제 사용 방법

// store 안에 state를 수정해주는 함수를 넣고 보관, 컴포넌트를 이걸 부르기만 하는 식으로 state를 수정하게 되어 있음
// 직접 컴포넌트에서 state 수정하지 않는 이유?? 
// -> 100개의 컴포넌트에서 직접 수정하다가 버그 생기면 근원을 찾기 힘듦, 
// -> 따라서 컴포넌트에서 " 실행해달라고 부탁하는 식으로 " 하면 버그의 뿌리 찾기 쉬움 