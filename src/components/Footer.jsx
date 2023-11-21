import React from 'react'
import { Link } from 'react-router-dom'


function Footer() {
  return (
    <div style={{height:'300px',color:'black'}} className='d-flex justify-content-center w-100 align-items-center flex-column bg-primary'>
        <div className='d-flex justify-content-evenly align-items-center w-100'>

            <div style={{width:'400px'}} className="websites">
            <h4 className='mb-3' style={{overflowY:'hidden'}}>
            <i class="fa-solid fa-cart-shopping"></i>
            E-Cart
            </h4>
            <h6 style={{overflowY:'hidden'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis culpa sit qui consectetur, quod animi expedita aliquid nam illum dolorem incidunt. Alias repellat nihil est, amet eius modi suscipit eum?</h6>
            </div>

            <div className="links d-flex flex-column">
            <h4 className='mb-3' style={{overflowY:'hidden'}}>Links</h4>
                <Link to={'/'} style={{textDecoration:'none', color:'black'}}>Home Page</Link>
                <Link to={'/cart'} style={{textDecoration:'none', color:'black'}}>Cart</Link>
                <Link to={'/Wishlist'} style={{textDecoration:'none', color:'black'}}>WishList</Link>
            </div>

            <div className="guides d-flex flex-column">
            <h4 className='mb-3' style={{overflowY:'hidden'}}>Guides</h4>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'black'}}>React</Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'black'}}>React Bootstrap</Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'black'}}>Bootswatch</Link>
            </div>

            <div className="contacts d-flex flex-column">
                <h4 className='mb-3' style={{overflowY:'hidden'}}>Contact us</h4>
                <div className='d-flex'>
                    <input type="text" className='form-control' placeholder='Enter e-mail id'/>
                    <button className='btn btn-warning ms-2 align-items-center justify-content-center d-flex'>Subscribe</button>
                </div>
                <div className='d-flex justify-content-evenly align-items-center mt-3'>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
                <Link to={'https://react-bootstrap.netlify.app/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-whatsapp fa-2x"></i></Link>
                <Link to={'https://bootswatch.com/'} style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin-in fa-2x"></i></Link>
                </div>
            </div>
            
        </div>
        <p>Copyright @ 2023 E-Cart</p>
    </div>
  )
}

export default Footer