import React, { useState } from 'react';
import PayPal from "./PayPal";
import './Payment.css'

function Payment() {
    const [checkout, setCheckOut] = useState(false);
    const [amount, setAmount] = useState('');
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null);

    const setErrors = () =>{
      setError(null)
    }

  return (
      <section id="payment">
 <div className="App">
      {checkout ? (
        <div className='login'>
           

        <div className='login__container'>
        <PayPal description = {description} amount = {amount} />
        </div>
        </div>
      ) : (
       


<div className='login'>
           

 <div className='login__container'>
     <h3>Make Payment</h3>

     <form>
     <h5>Description </h5>
         <input type='text' placeholder={'short note'} value={description} onChange={e => setDescription(e.target.value)} />
         <h5>Amount</h5>
         <input type='text' placeholder={'amount'} value={amount} onChange={e => setAmount(e.target.value)} />

          {
           error ?  <p className='error'>{error}</p> : <p></p>
          }
         <button type='submit'     onClick={() => {
            if(amount && description){
              setCheckOut(true) 
              setError(null)
            }
            else setError('Fill Form as required')
          }}  className='proceed'>Proceed</button>
     </form>                
 </div>
</div>
      )}
    </div>

   </section>
    );
  
}

export default Payment;
