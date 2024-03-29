import {Table} from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeName, plueAge} from '../store/userSlice.js'
import { plusStock } from '../store.js'
function  Cart() {
    
    // Redux store에 있던 모든 state가 남음
    let states = useSelector((state)=> {
        return state
    })
    console.log(states)
    let carts = states.cart;
    console.log(carts)

    let dispatch = useDispatch()

    return (
        <>
        <h6>{states.user.name} {states.user.age}</h6>
        <button onClick={ () => {
            dispatch(plueAge(1))
        }}> 떡국 🍲 </button>
        <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>상품명</th>
                        <th>수량</th>
                        <th>변경하기</th>
                    </tr>
                </thead>
                <tbody>
                    {carts.map((cart) => 
                        <CartTable cart={cart} key={cart.id}/>
                    )}
                </tbody>
            </Table> 

        </>
    )

    function CartTable ({cart }) {
        return (
            <tr >
                <td>{cart.id}</td>
                <td>{cart.name}</td>
                <td>{cart.count}</td>
                <td><button onClick={() => {
                    dispatch(plusStock(cart.id))
                }}>🤍</button></td>
            </tr>
        )  
    }
}

export default Cart


// Redux 
// ⭐️ 컴포넌트들이 props 없이 state 공유 가능! ⭐️ (최상위 컴포넌트에 넣어주기)
// 0) redux tookit 라이브러리 설치 == redux의 개선버전 (문법이 더 쉬워짐)
// 1) store.js 만들어서 기본 형식 코드 넣어주기 
//import { configureStore } from '@reduxjs/toolkit'
// export default configureStore({
//     reducer: { }
//   }) 
// 2) 최상위 파일 (index.js)에서 <Provider store={import해온거}> 로 <App> 감싸기 

// Redux store에 store 보관하는 법 
// 1) createSlice({     like. state 만들어주기   
//  name: 'state 이름 넣어주기',
//  initialState: '값'
// }) 


// useSelector 참고! 
// 
// Redux store 안에 모든걸 넣진 말자!   