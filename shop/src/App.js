import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './App.css';
import data from './data'
import Detail from './routes/detail'

import { useState } from 'react';
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'

function App() {
  let [products, setProducts] = useState(data);
  let navigate = useNavigate();

  return (
    <div className="App">

      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">Gons SHOP</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link onClick={()=> { navigate('/')}}>홈으로</Nav.Link>
              <Nav.Link onClick={()=> { navigate('/detail')}}>상세페이지</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={
          <>
            <div className="main-bg"></div>
              <div className="contatiner">
                <div className="row">
                {
                  products.map((product, i) => {
                    return(
                      <Box src={product.img} title={product.title} price={product.price} key={i}></Box>
                    )
                  })
                }
              </div>
            </div>
          </>
        }/>
        <Route path="/detail/:id" element={
          <><Detail products={products}/></>
        }/>
        <Route path="/event" element={<> <Event/> </>}>
          <Route path="one" element={<> 첫 주문시 양배추즙 서비스</>}></Route>
          <Route path="two" element={<> 생일기념 쿠폰받기</>}></Route>
        </Route>
      </Routes>
    </div>
  );

  function Event () {
    return (
      <div>
        <h3>오늘의 이벤트</h3>
        <Outlet></Outlet>
      </ div>
    )
  }

  function Box (props){
    return (
      <div className="col-md-4">
        <img src={props.src} width="250" height="250"/>
        <h4>{props.title}</h4>
        <p>{props.price}</p>
    </div>
    )
  }
}

export default App;

// public 폴더의 용도 
// 1) build 작업시, 파일을 압축하는 과정을 거치는데, public에 있는 것들은 그대로 보존됨.
// txt나 json 등 수정이 필요없는 static 파일의 경우에 public 폴더에 보관해도 상관없음.


// Routing 
// 1) npm i react-router-dom@6 설치
// 2) 초기 세팅으로는 index.js <BrowserRouter> 안에 컴포넌트 넣어주기 
// 3) 필요한 컴포넌트 import 하고, 아래와 같이 작성 
{/* <Routes>
<Route path='/url 경로' element={보여줄 jsx}></Route>
</Routes> */}
// 4) 버튼을 통한 이동은 <Link> 를 이용
{/* <Link to="/경로">홈</Link> */}


// Navigate
// 1) useNavigate() ... 페이지 이동기능 
// Link -> a 태그와 동일 vs useNavigate()  -> 어떠한 이벤트나 조건 만족시 이동할 수 있도록 조절할 수 있음
// <button onClick={()=>{ navigate(-1) }}>뒤로가기</button>  .. 이렇게하면 뒤로 가기도 가능!


// 404 페이지 처리 방법 
// <Route path="*" element={ <div>Page Not Found!!!</div> } />

// nested routes, Outlet 
// 중첩 라우팅 관리! ... <Route> 안에 <Route> 넣기 
{/* <Route path="/about" element={ <About/> } >  
  <Route path="member" element={ <div>멤버들</div> } />
  <Route path="location" element={ <div>회사위치</div> } />
</Route> */}
// 다만, 부모 컨포넌트에서 Outlet으로 구멍을 뚫어줘야 하위의 요소가 들어갈 수 있음! 

// URL 파라미터 
// path 작성시  "/:주소값" 형태로 쓰기 (백엔드 엔드포인트 설정과 동일) 
// ex) 상세 페이지에서 데이터 값을 props로 넘겨주는게 좋음 (컴포넌트에서 따로 또 상태관리해주면 변경사항 있을때 2번 수정해야 함)