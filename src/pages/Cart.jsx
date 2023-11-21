import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { emptyCart, removeFromCart } from './redux/slices/cartSlice';

function Cart() {
  const cartArry = useSelector((state)=>state.cartReducer)
/*   console.log(cartArry); */
const dispatch = useDispatch()
const [total,setTotal]=useState(0)
/* navigate */
const navigate=useNavigate()

const getTotal=()=>{
  if(cartArry.length){
    setTotal(cartArry?.map(item=>item.price).reduce((p1,p2)=>p1+p2))

  }
  else{
    setTotal(0)
  }
}
useEffect(()=>{
  getTotal()
},[cartArry])

const handleCart=()=>{
  alert("Orde Placed Successfully")
  dispatch(emptyCart())
  navigate('/')
}

  
  return (
    <div style={{marginTop:'150px'}}>
      { cartArry?.length>0?
      <div className='row w-100'>
        

        
          <div className='col-lg-6 m-5'>
     <table className='table border shadow'>
      <thead>
        <tr>
          <th>#</th>
          <th>Products</th>
          <th>Image</th>
          <th>Price</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {cartArry?.map((item,index)=>(<tr>
          <td>{index+1}</td>
          <td>{item.title}</td>
          <td><img height={'100px'} width={'100px'} src={item.thumbnail} alt="no image" /></td>
          <td>${item.price}</td>
          <td><Button onClick={()=>dispatch(removeFromCart(item.id))} variant="outline-danger rounded"> <i class="fa-sharp fa-solid fa-trash"></i></Button></td>
        </tr>))
          }

      </tbody>
     </table>


     


        </div>
        <div className='col-lg-4 d-flex justify-content-center  align-items-cneter flex-column'>
      <div className='border shadow p-5' style={{textDecoration:'none', color:'white'}}>
         <h2 className='text-primary' style={{textDecoration:'none', color:'white'}}> Cart Summary</h2>
         <h4 style={{textDecoration:'none', color:'white'}}>Total no of products:{cartArry.length}</h4>
         <h4 style={{textDecoration:'none', color:'white'}}> Total price:₹ {total}</h4>
         <Button onClick={handleCart()} className='btn btn-success rounded w-100 mt-3 '> check</Button>
      </div>
          </div>

       
     </div>
     :
     <div style={{height:'100vh'}} className='d-flex colum justify-content-center align-items-center'>
            <img src="https://cdn.dribbble.com/users/5107895/screenshots/14532312/media/a7e6c2e9333d0989e3a54c95dd8321d7.gif" alt="no image" height={'300px'} />
            <h4 className='text-danger'>Your cart is empty</h4>
          
           <Button  className='btn btn-success rounded ms-3'> <Link style={{textDecoration:'none', color:'white'}} to={'/'}>Back To Home</Link> </Button>
          
        </div> }

    </div>
  )
}

export default Cart