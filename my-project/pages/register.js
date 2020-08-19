import React, {useRef, useState} from 'react';
import Router from 'next/router';

const endpoint = 'http://localhost:1337/auth/local/register';

export default () => {
  const loginRef = useRef();
  const pwdRef = useRef();
  const mailRef = useRef();
  const [error, setError] = useState('');

  const register = async () => {
    const username = loginRef.current.value;
    const email = mailRef.current.value;
    const password = pwdRef.current.value;

    try{
      const {jwt, user} = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          username,
          email,
          password,
        }),  
      }).then(res  => res.json());

      window.sessionStorage.setItem('jwt', jwt);
      window.sessionStorage.setItem('user', JSON.stringify(user));

      Router.push('/');

      }catch (e) {
        setError(e.toString());
      }
    };
    

  return(
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <input type="text" placeholder="Login" ref={loginRef} />
        <input type="mail" placeholder="Email" ref={mailRef} />
        <input type="password" placeholder="Password" ref={pwdRef} />
        <button onClick={ () => register() }>Register</button>  
      </div>
    {error && <div style={{ border: '1px solid red'}}>{error}</div>}
    </>
  );
};

