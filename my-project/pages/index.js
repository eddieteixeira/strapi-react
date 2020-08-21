import Router from 'next/router';
import React, { useEffect, useState, useRef } from 'react';

const endpoint = 'http://localhost:1337/todos';

export default () => {
  const titleRef = useRef();
  const [todos, setTodos] = useState([]);
  const jwtRef = useRef();

  //Acess only to logged in users
  useEffect(() => {
    const jwt = window.sessionStorage.getItem('jwt');
    if (!jwt) {
      Router.push('/login');
    }
    jwtRef.current = jwt;

    //get list of todos
    getTodos();
  }, []);

  const getTodos = async () => {
    const res = await fetch(endpoint, {
      headers: {
        Authorization: `Bearer ${jwtRef.current}`,
      },
    }).then(r => r.json());
    setTodos(res);
    //console.log(res);
  };

  const createTodo = async () => {
    const title = titleRef.current.value;

    const res = await fetch(endpoint,  {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${jwtRef.current}`,
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        title,
      }),
   }).then(r => r.json());

   const newTodos = [...todos, res];
   setTodos(newTodos);
   console.log(res);
   console.log(newTodos);
  };

  const toggleTodo = async (todo, checked) =>{
    setTodos(newTodos);
  }

  return  <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%' }}>
    <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', width: "200px" }}>
      <input type="text" placeholder="Title" ref={titleRef} />
      <button onClick={ () => createTodo() }>Create Todo</button>
    </div>

    <div>
      <h2>Todo's List:</h2>
        {todos.map(todo => (
          <div key={todo.title} style={{ display: 'flex', alignItems: 'center', background: 'rgba(0,0,0,0.3)', margin: '5px 0', padding: '5px', borderRadius: '5px' }}>
            <input type="checkbox" checked={todo.done} onChange={() => toggleTodo{todo, e.target.checked}} />
            {todo.title}
          </div>
        ))}
    </div>
  </div>;
}