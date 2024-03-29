import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from './store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <React.StrictMode>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


// localStorage 
// 브라우저 단에서 정보 저장 
// localStorage.setItem('이름', '값')    ... 로컬스토리지에 값 입력하기
// localStorage.getItem('이름')         ... 로컬스토리지에 값 출력하기
// localStorage.removeItem('이름')      ... 로컬스토리지에 값 삭제하기
// 로컬스토리지에 값 수정하기  => 꺼내서 다시 만들어서 집어넣어야함

//sessionStorage 에 넣고 싶으면 localStorage  대신에 써주기 

// localStorage 안에는 배열과 객체를 넣을 수 없음 (array/object)
// 따라서 JSON 형태로 변환해서 넘기기 
// JSON.stringify(obj) ⭐️
// JSON.stringify(array)
// JSON으로 넣었기 때문에, data.name 과 같이 사용할 수는 없음 
// 따라서 다시 obj로 변환해야함 ... JSON.parse(data) ⭐️
