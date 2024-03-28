import react, {useState, useEffect, useContext} from 'react';
import { useParams } from 'react-router-dom'
import {Nav} from 'react-bootstrap'
import styled from 'styled-components'
import  data  from '../data.js'
import axios from 'axios'
import { Context1 } from '../App.js'


function Detail (props) {

    let { stock }= useContext(Context1)

    let [showState, setShowState] = useState(true);
    let [input, setInput] = useState('');
    let [tab, setTab] = useState(0);
    let [fadeMain, setFadeMain] = useState('');

    useEffect(() => {
        setTimeout(()=>{
            setShowState(false)
        }, 2000)
    }, []);

    useEffect(() => {
        if(isNaN(input)) alert('그러지마세요')
    }, [input])

    useEffect(() => {
        setTimeout(()=> {
            setFadeMain('end')
        }, 100)
        return () => {
            setFadeMain('')
        }
    }, [])

    let {id} = useParams();

    return (
        <div className={"start " + fadeMain}>
            {stock[0]}
            <div className="container">
                <input value={input} onChange={(e) => {setInput(e.target.value)}}></input>
                {showState && <div className="alert alert-warning">2초 이내 구매시 할인</div>}
                <div className="row">
                    <div className="col-md-6">
                    <img src={props.products[id].img} width="100%" />
                    </div>
                    <div className="col-md-6">
                    <h4 className="pt-5">{props.products[id].title}</h4>
                    <p>{props.products[id].contents}</p>
                    <p>{props.products[id].price}</p>
                    <button className="btn btn-danger">주문하기</button> 
                    </div>
                </div>
                <Nav variant="tabs"  defaultActiveKey="link0">
                    <Nav.Item>
                    <Nav.Link eventKey="link0" onClick={()=> { setTab(0)}}>버튼0</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link1" onClick={()=> { setTab(1)}}>버튼1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                    <Nav.Link eventKey="link2" onClick={()=> { setTab(2)}}>버튼2</Nav.Link>
                    </Nav.Item>
                </Nav>
                <TabContent tab={tab} products={props.products} />

            </div> 
        </div>
    )
}

function TabContent ({tab, products}) {
    let [fade, setFade] = useState('');
    let { stock }= useContext(Context1)

    useEffect(()=> {
        let a = setTimeout(() => {
            setFade('end')
        }, 100)
        return () => {
            clearTimeout(a)
            setFade('')
        }
    }, [tab])

    // if(tab ==0) return <div>내용0</div>
    // else if(tab ==1) return <div>내용1</div>
    // else if(tab ==2) return <div>내용2</div>
    return (<div className={"start " + fade}>
        {[ <div>{products[0].title}</div>, <div>{stock[0]}</div>, <div>내용2</div>][tab]}
    </div>)
}


export default Detail;

// styled-components 
// (형식) 
// let Box = styled.div`
//   padding : 20px;
//   color : grey
// `;

// 장점1) css 파일 오픈할 필요없이 js에서 바로 스타일 넣을 수 있음
// 장점2) 한 파일에서 적은 스타일이 다른 js 파일로 오렴되지 않음
// 장점3) 페이지 로딩시간이 단축됨 

// props로 컴포넌트 재활용 가능 
// let YellowBtn = styled.button`
//   background : ${ props => props.bg };
//   color : black;
//   padding : 10px;
// `;



// Components의 cycle 
// 페이지에 장착되기도 하고 (mount) 
// 가끔 업데이트 되고 (update)
// 필요 없으면 제거됨 (unmount)

// useEffect (sideEffect 같아서 )
// 이게 왜 중요함 👀 ?? 
// => 중간중간 코드 실행에 간섭할 수 있기 때문에!!!
// 쓰는 이유)) useEffect 안에 있는 코드는 html 랜더링 후에 동작함 
// 무겁게 돌아가는 코드를 넣으면 좋음!! (html 먼저 보여주고, 무거운거 돌리는게 반응성이 좋음 )
// 1) 어려운 연산
// 2) 서버에서 데이터 가져오는 작업 
// 3) 타이머 장착하는거 

// useEffect의 2번째 인자는 실행조건!🤙 -> dependency라고도 함 
// useEffect(실행할 함수, 실행조건)

// 1) useEffect(()=> { })  ... 재랜더링마다 코드실행
// 2) useEffect(() => { }, []) ... mount시 1회만 코드실행 
// 3) useEffect(() => {       ... unmount시 1회 코드실행 (useEffect 실행 전에 뭔가 실행하고 싶으면 return ()=> {}에 담아주기)
// return () => {
//     }
//})
// 4) useEffect(() => {}, [state]) ... 특정 state 변경시에 실행됨 

// useEffect 동작 전에, return 문 먼저 실행됨 
// 예시 
// useEffect(() => {
//     어쩌구 ~~~
//     return () => {
//         저쩌구 ~~~ (cleanup function)
//     }
// }, []);
// + cleanup function은 mount시 실행안됨/ 하지만 unmount시 실행됨!! 


// 삼항연산자말고 if 문 작성하는 방법
// => 컴포넌트화해서 넣기 (line: 59 - 64)


// props 쉽게 쓰고 싶으면, 파라미터에 { 프롭요소1, 프롭요소2, ... } 이렇게 쓰기


// automatic batching 
// state변경함수가 도처에 여러개 있는 경우, 각각 재랜더링을 하는게 아니라 마지막에 딱 한번만 재랜더링 됨.


// 부모컨포넌트 => 자식컨포넌트로 props 전달 가능! 
// <App> -> <Detail> -> <TabContent>  (props를 전달할때의 불편함)
// 중첩의 깊이가 깊다면! too 복잡 
// sol) 1) Context API 
// props 전송없이 state 공유가능  -> 하지만 성능상 문제 때문에 많이 쓰진 않음
//  사용법) 
// 1) createContext()로 state 보관함 만들어주기 
// 2) <보관함.Provider value={}>로 원하는 컴포넌트 감싸기 
// 3) value={{ 전달하길 원하는 state, ...}}
// 4) 사용하는 컴포넌트에 useContext(보관함이름) -> 사용할 수 있게 해체해주는 역할
// (단점) 1. state 변경시, 쓸데없는 컴포넌트까지 전부 재랜더링 됨 / 2. useContext를 쓰는 컴포넌트를 다시 재사용할때 Context import 하기 귀찮

// sol) 2) Redux 라이브러리 사용
