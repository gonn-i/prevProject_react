import { configureStore, createSlice } from '@reduxjs/toolkit'

let user = createSlice({
    name: 'user',
    initialState: {name: 'kim', age: 20},
    reducers: {
        changeName(state) {
            state.name = 'park'
        }, plueAge (state, a){
            state.age += a.payload;
        }

    }
})

export let { changeName, plueAge } = user.actions

export default user;

// store.js 분할 방법 


// state 변경함수의 둘째 파라미터를 작명하면, 인자를 더 받아서 함수 사용이 가능!!! 
// 단, reducer 함수 내부에 파라미터를 넣은 자료들은 a.payload 헤야 나옴 (line: 9-10)
//( a 말고 action 이런식으로 많이 작명, action.type하면 state 변경함수 이름이 나옴)

