import React, { useState, useContext } from 'react';
import './ProductDisplay.css'
import star_icon from '../assets/star_icon.png'
import star_dull_icon from '../assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
const ProductDisplay = (props) => {
    const {product}= props;
    const {addToCart}= useContext(ShopContext);

    // State for managing comments
    const [comments, setComments] = useState([]);

    // Function to handle comment submission
    const handleCommentSubmission = (event) => {
        event.preventDefault();
        const newComment = event.target.comment.value;
        setComments([...comments, newComment]);
        event.target.reset();
    };

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
             
            </div>

            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-star">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" /> 
                <p>{}</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">
                ₹{product.old_price}
                </div>
                <div className="productdisplay-right-price-new">
                ₹{product.new_price}
                </div>
            </div>
            <div className="productdisplay-right-description">
                    {product.description}
            </div>
            <button onClick={()=>{addToCart(product.id)}} >ADD TO CART</button>
            <div className="productdisplay-comments">
                    <h2>Review this Product</h2>
                    <form onSubmit={handleCommentSubmission}>
                        <textarea name="comment" placeholder="write your comment here" rows="2"></textarea>
                        <button type="submit">Submit</button>
                    </form>
                    <div className="comment-list">
                        {comments.map((comment, index) => (
                            <div key={index} className="comment">
                                <p>{comment}</p>
                            </div>
                        ))}
                    </div>
                </div>

        </div>
    </div>
  )
}

export default ProductDisplay