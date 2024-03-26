import react, {useState} from 'react';
import { useParams } from 'react-router-dom'
import  data  from '../data'

function Detail (props) {
    let {id} = useParams();

    return (
        <>
            <div className="container">
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
            </div> 
        </>
    )
}

export default Detail;