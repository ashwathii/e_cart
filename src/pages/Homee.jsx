import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../hooks/useFetch';
import { useDispatch } from 'react-redux';
import { addToWishlist } from './redux/slices/wishslice';
import { addToCart } from './redux/slices/cartSlice';

function Homee() {
  const data= useFetch('https://dummyjson.com/products')
  console.log(data);
  //to call function that add state value
  const dispatch=useDispatch()

  return (
  <>
  <Row>
   { data?.length>0?
   data?.map((item)=>(
<Col className='mb-5 mt-5 'sm={12} md={6} lg={4} xl={3}>
    <Card style={{ width: '18rem' }} className='ms-3' >
      <Card.Img variant="top" src={item.thumbnail} style={{height:'200px'}} />
      <Card.Body>
        <Card.Title className='fw-bolder'>{item.title.slice(0,20)}...</Card.Title>
        <Card.Text>
        <p>{item.description.slice(0,40)}...</p>
        <p className='fw-bolder'>Price :  ₹ {item.price}</p>
        </Card.Text>
       <div className='d-flex align-items-center justify-content-between'>
       <Button onClick={()=>dispatch(addToWishlist(item))} variant="outline-danger rounded"><i class="fa-solid fa-heart"></i></Button>
        <Button onClick={()=>dispatch(addToCart(item))} variant="outline-warning rounded"><i class="fa-solid fa-cart-plus"></i></Button>
       </div>

      </Card.Body>
    </Card>
    </Col>
   ))
   :
    <p>Nothing to display</p>
    }
  </Row>
  </>
  )
}

export default Homee