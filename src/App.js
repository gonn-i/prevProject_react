/* exlint-disable */

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  let post = '회기 파스타 맛도리';
  let [ datas, setDatas ]= useState(['트위드 추천', '봄원피스 추천', '가방 추천'])
  let [like, setLike] = useState([0,0,0])
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [input, setInput] = useState("");

  return (
    // js 파일에서 HTML 대용품으로 사용하는 JSX!!
    //  리엑트에서 <div>를 만들기 위해서는 React.createElement('div', null, 'Hello World') 이런식으로 해야함
    // But, jsx 덕분에 쉽게 구현 <div></div> 
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color: 'lightblue', fontWeight: 900}}>ReactBlog</h4>
      </div>
      <button onClick={() => {
          let copy = [...datas];
          setDatas(copy.sort())
        }}>가나다순정렬</button>
        <button 
          onClick={()=> {
            const copy = [... datas];
            copy[0] = "남자 트위드 추천";
            setDatas(copy)
          }}> ➡️ </button>

      {
      datas.map((data, i) => {
        return (
        <>
          <div className="list">
            <h4 onClick={() =>{ 
              setModal(!modal);
              setTitle(i);
              }}>{data} <span onClick={(e)=> {
              e.stopPropagation()
              let copy = {...like};
              copy[i] += 1;
              setLike(copy)}}> 💙 </span> {like[i]} </h4>
            <p>2월 17일 발행</p>
            <button onClick={() => {
              let copy = [...datas];
              setDatas(copy.filter((e) => e !== copy[i]));
          }}>🗑️</button>
          </div>
        </> 
        )
        })
      }

      <input onChange={(e) => {
        setInput(e.target.value)
      }} />
      <button onClick={()=> {
        let copy = [...datas];
        copy.push(input);
        setDatas(copy);
      }}>➕</button>

      { modal? <Modal datas={datas} setDatas={setDatas} title={title} input={input}></Modal>: null}
    </div>
  );
}

function Modal (props) {
  return (
    <div className='modal'>
      <h4>{props.datas[props.title]}</h4>
      <p>날짜</p>
      <p>{props.input}</p>
      <button onClick={() =>{
        props.setDatas([ "여자코트 추천",'봄원피스 추천', '가방 추천' ])
      }}>글수정</button>
    </div>
  )
}

export default App;

//JSX 문법 규칙 
// 규칙1. className 으로 클래스명 설정
// 규칙2. css 연결시, css 파일 import 
// 규칙3. 변수 꽂을땐 {중괄호안에 변수 넣기}  --> 데이터 바인딩 
// 규칙4. style 넣을땐 style= {{ 스타일명: '값'}} 
// 규칙5. style 속성명에 카멜 케이스로 작성 fontSize 


//State 
// 1. State는 언제 써야하나? 
// "변동시 자동으로 html에 반영"되게 만들고 싶으면 state 사용!!!!
// 그래서 온갖것들 state로 만들지 말고 변경되는 값만.
// 2. State 변경하는 법
//  state변경함수(새로운state) 하기!! => 변경함수를 통해야 재랜더링이 됨 
// 3. array, object State 변경하는 방법 
// 독립적인 array/object의 사본을 만들어서, 변경하고 -> 변경함수에 넣어주기
// why? ) state 변경함수의 동작 원리 => (기존 state) === (신규 state) 인지를 먼저 검사헤서 같다면 변경 ❌
// 단순 변수만 바꿔주거나, 사본을 넘겨준게 아니라면 / 결과적으로 상자를 바꿔주지 않고 내용물만 바꿔주어, 변경된 상태임을 판별하지 못함 


//Component 
// 그래서 그게 뭔데? => "복잡한 html을 한 단어로 치환할 수 있는 Component 문법" (HTML 덩어리)
// (컴포넌트명 대문자로 만들기!!)
// 1. 어떤걸 컴포넌트로 만들면 좋은가? 👍
//   1) 반복적인 html 축약할때
//   2) 큰 페이지들
//   3) 자주 변경되는 것들
//   4) 협업할때 컴포넌트 단위로 나눠서 분배하기도 함
// 2. 어떤걸 신경써야 하나? ⛔️
//   1) 다른 컴포넌트의 state를 사용하기 위해서는 props로 가져와야 함

// 동적인 UI 만드는 법 
// 1) html css 로 미리 디자인 완성
// 2) UI의 현재 상태를 state로 저장
// 3) state에 따라 UI가 어떻게 보일지 작성
// + JSX 에서 조건문 쓰는법 -- > "삼항연산자" 써야함 (if문 X)

// map 하고 각 요소에 실행할 함수에 return을 해주면 array에 담아서 넘겨줌 


// Props 
// ⭐️ 부모 -> 자식 state 전송⭐️ 하기 위해서 쓰임! (자식 -> 자식 / 자식 -> 부모 불가 🔥)
// 자식이 부모의 state를 가져다쓰고 싶을때는 props 
// 1) <자식 컴포넌트 작명 ={state 이름}>
// 2) props 파라미터 등록 후 props.작명 사용
// (참고1) props는 <Modal 이런거={이런거}  저런거={저런거}> 이렇게 10개 100개 1000개 무한히 전송이 가능
// (참고2) 꼭 state만 전송할 수 있는건 아님 <Modal 글제목={변수명}> ⭐️일반 변수, 함수 전송도 가능⭐️
// state를 만드는 곳은 state를 사용하는 컴포넌트들 중 "최상위 컴포넌트"!!

// 이벤트 버블링 
// 이벤트가 발생한 요소부터 => 점점 부모 요소로 이벤트를 전파하는 현상
// e.stopPropagation() 으로 해결 가능!