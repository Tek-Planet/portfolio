import React, { useRef, useEffect, useState } from "react";
import './PayPal.css'
export default function Paypal({amount, description}) {
  const [status, setStatus] = useState('null');
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, err) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: description,
                amount: {
                  currency_code: "USD",
                  value: amount,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
          setStatus(order.status)
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <div>
      <div ref={paypal}></div>
      <div className='payment__complete'>
      {status === 'COMPLETED' ? (
      
              <p className='completed'>Payment {status}. Thank You For Trusting Us.</p>
          
      ) : (
        status !== 'null' ? (
          <p className='failed' >Payment {status}.</p>
        ) :  <p></p>
      )  
      }
       </div>
    </div>
  );
}