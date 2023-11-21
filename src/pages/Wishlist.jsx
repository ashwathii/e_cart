import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import {  removeWishlist } from './redux/slices/wishslice';
import {Link} from 'react-router-dom'


function Wishlist() {
  const wishlistArray=useSelector((state)=>state.wishlistReducer)
  console.log(wishlistArray);
  const dispatch=useDispatch()

  return (
    <div >

<Row>
 
{ wishlistArray?.length>0?
wishlistArray?.map((item)=>(
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
       <Button onClick={()=>dispatch(removeWishlist(item.id))} variant="outline-danger rounded"><i class="fa-solid fa-trash"></i></Button>
        <Button variant="outline-warning rounded"><i class="fa-solid fa-cart-plus"></i></Button>
       </div>

      </Card.Body>
    </Card>
    </Col>
))
:
<div style={{height:'100vh'}} className='d-flex flex-column justify-content-center align-items-center'>
  <img src="https://cdn.dribbble.com/users/2046015/screenshots/4591856/first_white_girl_drbl.gif" alt=""  height={'300px'}/>
  <h4 className='text-danger mt-3'>Your wishlist is empty</h4>
  <Button className='btn btn-success rounded mt-3'><Link style={{textDecoration:'none', color:'white'}} to={'/'}>back to home</Link></Button>
  </div>
  
  }
  
  </Row>

    </div>
  )
}

export default Wishlist