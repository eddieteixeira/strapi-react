import React, {useRef, useState} from 'react';
import Router from 'next/router';

const endpoint = 'http://localhost:1337/auth/local';

export default () => {
  const loginRef = useRef();
  const pwdRef = useRef();
  const [error, setError] = useState('');

  const login = async () => {
    const identifier = loginRef.current.value;
    const password = pwdRef.current.value;

    try{
      const {jwt, user} = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({
          identifier,
          password,
        }),  
      }).then(res  => {
          if (res.status !== 200){
              throw new error('Error loggin in');
          }
          return res.json();
      });

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
        <input type="text" placeholder="Username or email" ref={loginRef} />
        <input type="password" placeholder="Password" ref={pwdRef} />
        <button onClick={ () => login() }>Login</button>  
      </div>
     {error && <div style={{ border: '1px solid red'}}>{error}</div>}
    </>
  );
};

