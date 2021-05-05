import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory } from "react-router-dom";


function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  
    return (
        <div className='login'>
           
           <div
                    className="login__logo"
  
                />
            <div className='login__container'>
                <h3>Make Payment</h3>

                <form>
                    <h5>Amount</h5>
                    <input type='text' placeholder={'amount'} value={email} onChange={e => setEmail(e.target.value)} />

                    <button type='submit'  className='login__signInButton'>Proceed</button>
                </form>                
            </div>
        </div>
    )
}

export default Login


// nucleonprojects.com. 14400
