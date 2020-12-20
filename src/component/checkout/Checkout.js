import React from 'react';
import './Checkout.css'
import Subtotal from './Subtotal'
import CheckoutItem from './CheckoutItem'
import { useStateValue } from '../../stateProvider/StateProvider';

function Checkout({id,image,title,rating,price}){
    const [{basket},dispatch] = useStateValue();
    return(
        <div className='checkout'>
            <div className='checkoutItem'>
            <table>
                <tr>
                    <th>All Product</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                    <th></th>
                </tr>
                {basket?.map(item=>(
                    <CheckoutItem
                        quantity={item.quantity}
                        id={item.id}
                        title={item.title}
                        price={item.price}
                        image={item.image}
                />
                ))}
            
             </table>
        </div>
            <Subtotal/>
        </div>
    )
}
export default Checkout;