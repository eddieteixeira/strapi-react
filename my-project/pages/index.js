import Router from 'next/router';
import React, { useEffect } from 'react';


export default () => {
  useEffect(() => {
    const jwt = window.sessionStorage.getItem('jwt');
    if (!jwt) {
      Router.push('/login');
    }
  }, []);

  return <h1>Hello World</h1>;
}