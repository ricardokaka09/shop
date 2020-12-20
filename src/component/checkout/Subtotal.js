import React, { useEffect, useState } from 'react';
import CurrencyFormat from 'react-currency-format'
import { Link, useHistory } from 'react-router-dom';
import {getBasketTotal} from '../../stateProvider/reducer'
import { useStateValue } from '../../stateProvider/StateProvider';
function Subtotal(){
    const [{basket},dispatch] = useStateValue();
    const history = useHistory();
    const [basketTotal,setBasketTotal] = useState();
    useEffect(()=>{
        setBasketTotal(getBasketTotal(basket))
    })
    const handleCheckout = () =>{
        // dispatch({
        //     type:'REMOVE_BASKET',
        //     id : id
        // })
    }
    return(
        <div className='subtotal'>
            <CurrencyFormat
                renderText={value=>(
                    <>
                       <p>Subtotal {basket?.length}: <span>{value}</span></p>
                    </>
                )}
                decimalScale={2}
                value={basketTotal}
                prefix={'$'}
                displayType={'text'}
                ThousandSeparator={true}
            >

            </CurrencyFormat>
            {/* <Link to='/payment'> */}
             <button onClick={e=> history.push('/payment')}>Process to checkout</button>
            {/* </Link> */}
        </div>
    )
}
export default Subtotal;