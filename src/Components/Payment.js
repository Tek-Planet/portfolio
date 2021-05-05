import React, { useState } from 'react';
import PayPal from "./PayPal";
import './Login.css'

function Payment() {
    const [checkout, setCheckOut] = useState(false);
    const [amount, setAmount] = useState('');

  return (
      <section id="resume">
 <div className="App">
      {checkout ? (
        <PayPal amount = {amount} />
      ) : (
       


<div className='login'>
           

 <div className='login__container'>
     <h3>Make Payment</h3>

     <form>
         <h5>Amount</h5>
         <input type='text' placeholder={'amount'} value={amount} onChange={e => setAmount(e.target.value)} />

         <button type='submit'     onClick={() => {
            if(amount)setCheckOut(true);
            else alert('Enter Amount to be paid')
          }}  className='login__signInButton'>Proceed</button>
     </form>                
 </div>
</div>
      )}
    </div>

   </section>
    );
  
}

export default Payment;
