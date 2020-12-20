import React, { useState,useEffect } from 'react';
import './CheckoutItem.css'
import CloseIcon from '@material-ui/icons/Close';
import { useStateValue } from '../../stateProvider/StateProvider';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import {getTotalItem} from '../../stateProvider/reducer'
function CheckoutItem({image,title,price,id,quantity}){
    const [{basket,user},dispatch] = useStateValue();
    const [count,setCount] = useState(quantity)
    const [priceTotal,setPriceTotal] = useState(price);

    useEffect(()=>{
        setPriceTotal(getTotalItem(price,count))
       
    })
    const handleAdd = async(e) =>{ 
        e.preventDefault();
        await setCount(count + 1);
        console.log(count);
        dispatch({
                type: 'SET_PRICE_BASKET',
                quantity: count+1,
                id: id,
        })
    }
    
    
    const handleRemove = (e) =>{
        e.preventDefault();
        
        dispatch({
            type: 'SET_PRICE_BASKET',
            quantity: count-1,
            id: id,
        })
        {count>1 && setCount(count -1)}
    }
    const handleRemoveItem = () =>{
        dispatch({
            type: 'REMOVE_BASKET',
            id: id,
        })
    }
    return(
            <>
                {/* {basket?.map(item=>( */}
                    <tr>
                    <td>
                        {/* <p className='checkoutItem__id'>{item.id}</p> */}
                        <a href="#"><img className='checkoutItem__image' src={image} alt=""/>{title}</a>
                    </td>
                    <td>
                        <p className="checkoutItem__price">$ {price}</p>
                    </td>
                    <td className='checkoutItem__quantity'>
                    
                        <p><RemoveIcon onClick={handleRemove}/></p>
                        <input type="text" value={count} onChange={e=> setCount(e.target.value)}/>
                        <p id='add'><AddIcon onClick={handleAdd}/></p>
                    </td>
                    <td>
                        $ {priceTotal}
                    </td>
                    <td>
                        <CloseIcon onClick={handleRemoveItem}/> 
                    </td>
                </tr>
                {/* ))} */}

            </>
           
    )
}
export default CheckoutItem;