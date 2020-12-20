import React, { useEffect } from 'react';
import { useStateValue } from '../../../stateProvider/StateProvider';
import './Product.css'
import {db} from '../../../module/firebase'
// import {abc} from '../../../js/script'
function Product({id,title,price,price_sale,rating,image}){
    const [{basket,user} ,dispatch ] = useStateValue();
    // useEffect(()=>{
    //     abc();
    // })
    const addToBasket = () =>{
         dispatch({
            type:'ADD_BASKET',
            basket: {
                id: id,
                title: title,
                price: price,
                rating: rating,
                image: image,
                quantity: 1,
            }
        })
        // db.collection('user')
        //     .doc(user?.uid)
        //     .collection('basket')
        //     .add({
        //         basket: {
        //             id: id,
        //             title: title,
        //             price: price,
        //             rating: rating,
        //             image: image,
        //         }
        // }).then(() => console.log('insert db success'))
    }
    return(
        <div className='product'>
            <img src={image} alt="" className='product__image'/>
            <div className="product__sale">
                <p>20%</p>
            </div>
            <div className="product__info">
                <p className="product__title">{title}</p>
                <div className='product__price'>
                    <p className='product__price__goc'><small>$</small><strong>{price}</strong></p>
                    <p className='product__price__sale'><small>$</small><strong>10</strong></p>
                </div>
            </div>
            <div className="product__rating">
                {/*{Array(rating).fill().map((_,i)=>( */}
                    <img src="https://laz-img-cdn.alicdn.com/tfs/TB19ZvEgfDH8KJjy1XcXXcpdXXa-64-64.png" alt=""/>
                {/* ))} */}
            </div>
            {/* <button onClick={addToBasket}>Add Cart</button> */}
        </div>
    )
}
export default Product;