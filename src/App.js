import logo from './logo.svg';
import './App.css';
import React,{ createContext, useEffect, useState } from 'react';
import Datatable from './Datatable';

export const UserContext = createContext()


function App() {
  
  const[user,setuser] =useState([])

  const url="https://61ee1f7ed593d20017dbac50.mockapi.io/students";

  const getMovies =  () => { 
     fetch(url) 
  .then((data) => data.json()
  ) 
  .then((mvs) => setuser(mvs));
};
   getMovies()

  console.log(user)


  return (
    <div className="App">
       <UserContext.Provider value={user}>
        <Datatable user={user} />
      </UserContext.Provider> 
   
    </div>
  );
}

export default App;
