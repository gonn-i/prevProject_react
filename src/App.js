import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


function App() {
  let post = '회기 파스타 맛도리';
  let [ data, setData ]= useState('여자 트위드 추천')
  let [ data2, setData2 ]= useState('여자 봄원피스 추천')
  let [ data3, setData3 ]= useState('여자 가방 추천')

  return (
    // js 파일에서 HTML 대용품으로 사용하는 JSX!!
    //  리엑트에서 <div>를 만들기 위해서는 React.createElement('div', null, 'Hello World') 이런식으로 해야함
    // But, jsx 덕분에 쉽게 구현 <div></div> 
    <div className="App">
      <div className='black-nav'>
        <h4 style={{color: 'lightblue', fontWeight: 900}}>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>{data}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{data2}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4>{data3}</h4>
        <p>2월 17일 발행</p>
      </div>
    </div>
  );
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
// ⭐️변동시 자동으로 html에 반영⭐️ 되게 만들고 싶으면 state 사용!!!!
// 그래서 온갖것들 state로 만들지 말고 변경되는 값만.