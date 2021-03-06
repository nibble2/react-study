<<<<<<< HEAD
import React, { useState, useRef } from 'react';
import UserList2 from './components/UserList2' ;
import CreateUser2 from './components/CreateUser2' ;

function App() {

  const [ inputs, setInputs ] = useState ({
     username: '',
     email: ''
  }) ;

  const { username, email } = inputs ;

  const onChange = e => {
    const { value, name } = e.target ;
    setInputs({
      ...inputs,
      [name]: value
    }) ;
  } ;
  
  const [ users, setUsers ] = useState([
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com'
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com'
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com'
    }
  ]);

  const nextId = useRef(4) ;

  const onCreate = () => {
    const user = {
      id: nextId.current,
      username,
      email
    } ;
    setUsers ([
      ...users, user
    ]) ;

    setInputs({
      username: '',
      email: ''
    }) ;
    nextId.current += 1 ;
  } ;

  const onRemove = id => {
    setUsers(users.filter(user => user.id !== id)) ;
  }


  return (
    <>
      <CreateUser2
        username={username}
        email={email}
        onChange={onChange}
        onCreate={onCreate}
      />
      <UserList2 users={users} onRemove={onRemove} />
    </>
  ) ;
=======
import React from 'react';
import InputSample from './components/InputSample' ;

function App() {
  return (
    <InputSample />
  );
>>>>>>> 15705a69518fcea689f7408a8c91dc841db83fec
}

export default App;