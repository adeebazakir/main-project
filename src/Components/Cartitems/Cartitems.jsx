import React, { useContext, useState } from 'react'
import './Cartitems.css'
import remove_icon from '../assets/cart_cross_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import { Link } from 'react-router-dom'

const Cartitems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(ShopContext);
    const [message, setMessage] = useState('');

    const handleCheckout = () => {
        const mes = []
        
        all_product.map(e => {
            if (cartItems[e.id]>0){
                mes.push(`Name : ${e.name}\n Price : ${e.new_price} \n Quantity : ${cartItems[e.id]} \n Total : ${e.new_price*cartItems[e.id]}`)      
            }
        })
        mes.push(`TO Pay : ${getTotalCartAmount()}`)
        console.log(mes)
        message.join(mes)
        console.log(message)
    }

      // const SendMessage = () => {
  
  //   const sendMessage = async () => {
  //     const phoneNumber = '7248250246'; // Replace with recipient's phone number
  //     const apiKey = 'YOUR_WHATSAPP_API_KEY'; // Replace with your WhatsApp API key
  //     const apiUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}&apikey=${apiKey}`;
  
  //     try {
  //       const response = await axios.get(apiUrl);
  //       console.log(response.data);
  //       // Optionally, you can handle the response here
  //     } catch (error) {
  //       console.error('Error sending message:', error);
  //       // Optionally, you can handle errors here
  //     }
  //   };


  return (
    <div className='cartitems'>
        <div className="cartitems-format-main">
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
        <hr />
      {all_product.map((e)=>{
            if (cartItems[e.id]>0)
            {
                return   <div>
                <div className="cartitems-format cartitems-format-main">
                    <img className='carticon-product-icon' src={e.image} alt="" />
                    <p>{e.name}</p>
                    <p>₹{e.new_price}</p>
                    <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                    <p>{e.new_price*cartItems[e.id]}</p>
                    <img className='carticon-remove-icon' src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                </div>
                <hr />
            </div>
            }
            return null;
      })}
      <div className="cartitems-down">
        <div className="cartitems-total">
            <h1>Cart Totals</h1>
                <div>
                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>₹{getTotalCartAmount()}</p>
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>    
                    </div>
                    <hr />
                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>₹{getTotalCartAmount()}</h3>
                    </div>
                </div>
                {/* <button><Link to='/payment'> Proceed to Checkout </Link></button> */}
                <button onClick={handleCheckout} >PROCEED TO CHECKOUT</button>
        </div>
      </div>
    </div>
  )
}

export default Cartitems